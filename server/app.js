const express = require('express');
const graphqlHTTP = require('express-graphql'); // handel the graphQl requiest
const schema = require('./schema/schema');
// const mongoose = require('mongoose'); 
const firebase = require('firebase'); 
const cors =require('cors');

const app = express();

// const mongoose = require('mongoose');

//allow cross-origin requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));  


// // <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>

// // <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBeyOw-8lMhUsb-t8YTjxTzryyRCmoHg-M",
    authDomain: "books-and-authors-4f152.firebaseapp.com",
    databaseURL: "https://books-and-authors-4f152.firebaseio.com",
    projectId: "books-and-authors-4f152",
    storageBucket: "books-and-authors-4f152.appspot.com",
    messagingSenderId: "884990712864",
    appId: "1:884990712864:web:acd1a644dbe7df4b86b045",
    measurementId: "G-76LZB3ERSC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>



// the endpoint to get the data requiested, and handeled by this graphqlHTTP function.


// mongoose.connect('mongodb+srv://Laith:test123@cluster0-qu05f.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

// mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.connect('mongodb+srv://Laith:test123@cluster0-qu05f.mongodb.net/retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb+srv://Laith:test123@cluster0-qu05f.mongodb.net/test?retryWrites=true&w=majority', {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false
//         });
//         console.log("MongoDB Conected")
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };

// firebase.connection.once('open',() => {
//     console.log('connected to database')
// })


app.listen(4000, () =>{
    console.log('the server is running on http://localhost:4000/')
}); 

///// make the server app is running