const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
const productRoute = require('./routes/productRoutes')
const connectDB = require('./config/db')
const  { notFound, errorHandler } = require('./middleware/errorMiddleware')
const cors = require("cors");
const userRoutes = require('./routes/userRoutes')
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products',productRoute);
app.use('/api/users',userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>{console.log(`server is running on port ${port}`)})