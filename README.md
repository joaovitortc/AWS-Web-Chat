# Real-Time Chat App

<video src='https://dms.licdn.com/playlist/vid/D5605AQHk5uO1_UUsQg/mp4-720p-30fp-crf28/0/1704391092722?e=1706144400&v=beta&t=zA-W9Mnj36relXKHV-TAV3xz9RT6vf535qz1meK3c9o' width=180/>

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

## Setup

1. **Set up AWS Lambda functions and DynamoDB table:**
   - Use the provided code to create Lambda functions for handling WebSocket connections (`connect.py`, `disconnect.py`, `sendMessage.py`).
   - Create a DynamoDB table to store connection IDs.

2. **Update Lambda functions with environment variables:**
   - Open each Lambda function in the AWS Lambda Console.
   - Add the required environment variables, including `WEBSOCKET_TABLE`.

3. **Deploy the frontend files:**
   - Clone the repository:
     ```bash
     git clone https://github.com/your-username/real-time-chat-app.git
     ```
   - Deploy the frontend files (HTML, CSS, and JavaScript) to a web server or hosting platform.

## Usage

1. **Access the chat application:**
   - Open your web browser and navigate to the deployed frontend.

2. **Connect to the chat:**
   - Enter your username in the provided input field.
   - Click the "Connect" button to join the chat.

3. **Start chatting:**
   - Once connected, you can start sending and receiving real-time messages with other connected users.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code.

