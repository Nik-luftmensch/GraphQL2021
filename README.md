# GraphQL Project
| Server Side | Client Side | Deployed On |
| ------ | ------ |----------------------|
| Node.js | React | Heroku
| Express GraphQL | Apollo | Firebase

Understanding the Structure of the Project
==========================================
The project is Divided into two parts:

ServerSide

- The Project has Node js server which along with a express GraphQL server creates an excellent GraphQL server.
- Then this server is connected to MongoDB for storing the Data.

ClientSide

- The client is build using Nodejs since its one of the most used front-end
- Which along with Apollo eases the work for processing the GraphQL while sending as well as recieving the data

Deployed On 

- I enjoyed writing the whole server side and client side I could have easily used AWS apmlify and started an app but wanted to dive deep in to development and understand more.
- Deployed on Heroku and tested it 
- Deployed on FireBase and tested it 

Before you Play
==============

 You need to install the dependencies before you can play.

You need to navigate to "\Grapql2021\server" and download the dependencies using the following commands
```sh
cd server
npm i 
cd..
```
Then navigate to "\Grapql2021\client" and download the dependencies using the following commands
```sh
cd client
npm i 
```
You need to start the Node js server which connects to MongoDB so create an .env file and create MongoDB_URL variable in the server directory
```sh
MongoDB_URL = "mongodb+srv://<@user_name>:<@password>@gql-nikhil.4zzsb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
```

Moment of truth 
================
To Start Server side and play with GraphiQL
-

If you have done the above steps correctly now you can run server and validate different queries,mutation just by running server side and test it witht the help of GraphiQL
- In server directory start the server for which you should have nodemon installed on your 
 ```sh
 cd server
npm start 
```
> ` Note :-
If everything is goes right you should see some thing like this :-
now listening for request on port 4000
Connected to MongoDB database
`

If not then you missed something

If you see the above output go to your browser with the following link 
```sh
http://localhost:4000/graphql 

And what you see is GraphiQL playground where you can play with your server without an UI adn check the implementation of server side
```

To Start Client side and play with React
-

If you have sucessfullt started the server now its time to start the client side so open a new terminal
- In client directory start the Reactjs 
 ```sh
 cd client
npm start 
```

> ` Note :-
If everything is goes right you should see some thing like this:-
You can now view client in the browser.
  Local:            http://localhost:3000
  On Your Network:  http://10.19.22.37:3000
Note that the development build is not optimized.
To create a production build, use npm run build.
`

If not then you missed something

If you see the above output go to your browser with the following link 

 ```sh
http://localhost:3000 

And what you see is the client side connected with the server enjoy playing and adding and testing new features.
```


Deployment 
==========
- I have deployed the above application on Heroku 
- Server side seperately and Client Side separately and connected both of them together 

ServerSide EndpointURL
-

 ```sh
https://ns-graphql-server.herokuapp.com/

This wont get you any thing if you paste in Browser just a " Cannot GET /"
But can use the URL on POSTMAN to post and get the data
```

- To check the server end point go on the URL 


 ```sh
http://vr-test-server.herokuapp.com/

Paste the server side endpoint and play online 
``` 

> ` Note :-
If you deploying on any other WebHost such as AWS or Firebase dont forget to ADD environment variable named MongoDB_URL = DataBaseURL`

ClientSide EndpointURL
-

 ```sh
https://ns-graphql-client.herokuapp.com/

This is connected with the Serverside and then to database and a fully functioning website is up
```

> ` Note :-
If you deploying on any other WebHost such as AWS or Firebase dont forget to ADD environment variable named REACT_APP_SERVER_URL = ServerEndPointURL`


Future
==========
- I want to Add more features,make the data more complex and retrieval more easier
- Use cake script so I can just deploy with one command 
- When I will be learning docker I will try to contanarized the application 
- Use Terraform to deploy on Heroku just with one command 

 © Nikhil.Singh nik.singh1208@gmail.com