<!-- Answers to the Short Answer Essay Questions go here -->
Middleware are functions that are used by Express before a request is sent to the final event handler. There can be any number of them and allow a developer to have more control over what happens between a raw request and the final intedned route.

Sessions in express allow you to persist data across requests. They are conneted to each invidiual client, allowing the information to be specific to each one.

Bcrypt is a hashing library that takes a plain text password and creates an ecrypted string of characters. It uses a secret that is on the server and a salt round in combination with the password to create the hash.

JWT is Json Web Tokens. It also is a library that takes many factors to create a token that is sent back to the client. The token can be stored on the client to use for authenication without the user having to continually log in. It can be set to expire at a certain time and to keep the client from accessing data on the server.

Bcrypt uses salt rounds for one in order to prevent attacks. This helps to prevent rainbow table attacks. By also offering the ability to increase the iteration count over time, it can prevent brute force search attacks by making the user have to work on it for long periods of time, usually not making the attempt even worth it. 

The 3 parts to the JWT are Header, Payload, and signature. 