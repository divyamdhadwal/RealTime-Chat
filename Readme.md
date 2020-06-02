Description:
Using Express JS as the framework for NodeJS, JQuery and Bootstrap I created a web application that could be used to conduct Realtime chat between different clients. The project also uses socket.io library to fetch and push any new messages being posted so that all the clients could stay connected & updated all the time.

Files included:
1. index.html : A static HTML page.
2. server.js : Server which shows the static HTML page to the client.
2. A) Post : A method that helps the user to post a new new message i.e., Passes data from client to server.
2. B) Get : A method that passes the message array data when "/messages" is requested by the client.
2. C) messages : An array that stores the messages sent by the client to the server during a session.
3. package.json : Keeps the dependecies of code intact so that It could be easily migrated from one environment to the other.

Languages Used:
NodeJS, Bootstrap, JQuery

Framework Used:
Express JS

Setup:
1. Put all the files in a folder.
2. Download all the dependecies mentioned in package.json.
3. CD into the folder and run node server.js