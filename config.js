const config = {
  challenge: true, // Set to true if you want to enable password protection.
  blocked: {
    // Normal users can ignore this option. This is for the owner of the website.
    "gointerstellar.app": "",
    "localhost": "",
  },
  users: {
    // You can add multiple users by doing username: 'password'.
    "interstellar": "password",
    "admin": "rootuser",
    "1rcefa": "010910", // Use quotes for keys that start with a number
  },
};

export default config;
