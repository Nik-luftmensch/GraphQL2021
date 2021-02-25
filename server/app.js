const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require("./schema/schema")
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

//allow cross-origin requests

app.use(cors());

mongoose.connect("mongodb+srv://nikhil_singh:<@password>@gql-nikhil.4zzsb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open',()=>{
    console.log('Connected to database');
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log("now listening for request on port 4000")
});