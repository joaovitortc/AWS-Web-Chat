import json
import boto3
import os

dynamodb = boto3.client('dynamodb')

def lambda_handler(event, context):
    connectionId = event['requestContext']['connectionId']
    
    print("This is event: ", event)
    print("This is event.requestContext: ", event['requestContext'])
    dynamodb.put_item(
       TableName=os.environ['WEBSOCKET_TABLE'],
        Item={'connectionId': {'S': connectionId}}
    )
    
    return {}