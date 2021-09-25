const experss = require('express');
const dotenv = require('dotenv')
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = experss();
dotenv.config()
const port = 4000;


mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.c44i3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
mongoose.connection.once('open', () => {
    console.log("Connected to database!")
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(port, () => {
    console.log("Server has started at port "+ port)
});