import json
import boto3
import os

dynamodb = boto3.client('dynamodb')

def lambda_handler(event, context):
    payload = json.loads(event['body'])
    message = payload['message']
    sender_username = payload.get('username', 'Anonymous')

    paginator = dynamodb.get_paginator('scan')
    connectionIds = []
    apigatewaymanagementapi = boto3.client(
        'apigatewaymanagementapi', 
        endpoint_url="https://" + event["requestContext"]["domainName"] + "/" + event["requestContext"]["stage"]
    )

    for page in paginator.paginate(TableName=os.environ['WEBSOCKET_TABLE']):
        connectionIds.extend(page['Items'])

    
    for connectionId in connectionIds:
         formatted_message = {
            'action': 'sendMessage',
            'message': message,
            'username': sender_username,
            'allConnections': connectionIds,
        }
        
         apigatewaymanagementapi.post_to_connection(
            Data=json.dumps(formatted_message),
            ConnectionId=connectionId['connectionId']['S']
        )

    return {}
