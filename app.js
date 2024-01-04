const connectButton = document.querySelector("#connect");
let socket, LocalUsername;

connectButton.addEventListener("click", () => {
const connectPage =  document.querySelector("#connect-page");
connectPage.style.display = 'none';

const chatContainer =  document.querySelector("#sendMessages");
chatContainer.style.display = 'block';

const usernameEl = document.getElementById("username");
  LocalUsername = usernameEl.value;
  console.log("Local username is: ", LocalUsername);

  socket = new WebSocket(
    `wss://s56499ymob.execute-api.us-east-2.amazonaws.com/production/?username=${encodeURIComponent(
      LocalUsername
    )}`
  );

  socket.addEventListener("open", (event) => {});
  socket.addEventListener("close", (event) => {});

  // Event handler for incoming messages
  socket.addEventListener("message", (event) => {
    const response = JSON.parse(event.data);
    console.log(event.data);
    username = response.username;
    message = response.message;
    displayMessage(username, message);
  });
});
// Function to send a message to the WebSocket API
function sendMessage() {
  const messageInput = document.getElementById("message-input");
  const messageText = messageInput.value;

  if (messageText) {
    const message = {
      action: "sendMessage",
      message: messageText,
      // Include sender information (e.g., your user ID)
      username: LocalUsername,
    };

    socket.send(JSON.stringify(message));
    messageInput.value = "";
  }
}

// Function to display incoming messages
function displayMessage(username, message) {
  const chatMessages = document.getElementById("chat-messages");
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");

  console.log(
    "local Username: ",
    LocalUsername,
    " and coming username: ",
    username
  );
  // Check if the message is your own
  if (username === LocalUsername) {
    messageElement.classList.add("own-message");
  } else {
    messageElement.classList.add("other-message");
  }

  messageElement.textContent = `${username}: ${message}`;
  chatMessages.appendChild(messageElement);
}
