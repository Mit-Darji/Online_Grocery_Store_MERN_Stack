const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoute');
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");


dotenv.config();
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);
//rest api
app.get('/',(req,res) => {
    res.send('<h1>welcome to ecommerce app</h1>');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT,() => {
    console.log(`Server is running ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});