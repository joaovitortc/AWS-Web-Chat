# Real-Time Chat App

## Welcome

Welcome to ChatApp, a real-time chat application using WebSocket technology on AWS Lambda and DynamoDB. This project enables users to connect, send messages, and engage in real-time communication.

## Description

This project consists of Lambda functions written in Python for handling WebSocket connections, including connecting, disconnecting, and sending messages. The frontend is built using HTML, CSS, and JavaScript.

### Lambda Functions

- **`connect.py`**: Handles the connection of WebSocket clients. It stores the connection ID in a DynamoDB table.

- **`disconnect.py`**: Handles disconnection events. It removes the connection ID from the DynamoDB table.

- **`sendMessage.py`**: Handles the sending of messages to all connected WebSocket clients. It retrieves connection IDs from the DynamoDB table and sends messages through the API Gateway Management API.

### Frontend

- **`app.js`**: This JavaScript file contains the client-side code for the real-time chat. It establishes a WebSocket connection, sends and receives messages, and updates the UI accordingly.

- **`index.html`**: The HTML file defines the structure of the chat application. It includes user interface elements such as chat containers, user lists, and message input fields.

## Requirements

- AWS account with Lambda, DynamoDB, and API Gateway set up
- Boto3 library for Python (Included in the AWS Lambda environment)
- Bootstrap (v4.5.2)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/real-time-chat-app.git
Set up AWS Lambda functions and DynamoDB table using the provided code.

Update the Lambda functions with the appropriate environment variables, including WEBSOCKET_TABLE.

Deploy the frontend files (HTML, CSS, and JavaScript) to a web server or hosting platform.

Usage
Access the chat application through a web browser.

Enter your username and click "Connect" to join the chat.

Start sending and receiving real-time messages with other connected users.

License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code.
