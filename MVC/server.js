// import express from 'express';
// import mongoose from 'mongoose';
// import { userForm } from './controllers/user.js';

// const app = express();
// app.use(express.urlencoded({extended:true}))

// mongoose.connect(
//     "mongodb://localhost:27017/",
//     {
//         dbName:"mvc",
//     }
// ).then(()=>console.log("connected to mongodb"))
// .catch((err)=>console.log(err));

// app.get('/',(req,res)=>{
//     res.render("index");
// });

// app.post("/form-submit",userForm );




// const port=4000;
// app.listen(port,()=>console.log(`server is running on port ${port}`));




import express from 'express';
import mongoose from 'mongoose';
import { userForm } from './controllers/user.js';

const app = express();

// ✅ Set EJS as the View Engine
app.set("view engine", "ejs");
app.set("views", "./views"); // Ensure your views folder exists

app.use(express.urlencoded({ extended: true }));

mongoose.connect(
    "mongodb://localhost:27017/",
    {
        dbName: "mvc",
    }
).then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.render("index"); // Ensure there is a "views/index.ejs" file
});

app.post("/form-submit", userForm);

const port = 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
