let users = [];
const fs = require('fs');
const path = require('path');
const usersDataPath = path.join(__dirname, 'users_data', 'users.json');

function saveUsersToFile() {
    fs.writeFileSync(usersDataPath, JSON.stringify(users, null, 2));
}

function registerUser(username, email, balance) {
    const user = {
        username: username,
        email: email,
        balance: balance
    };
    users.push(user);
    saveUsersToFile();
    return user;
}


function getUser(username) {
    return users.find(user => user.username === username);
}


function getUser(username) {
    return users.find(user => user.username === username);
}

// Example usage
registerUser('User123', 'user@example.com', 100);
