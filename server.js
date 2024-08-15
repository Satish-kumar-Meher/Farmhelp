require("dotenv").config()
const express = require('express');
const cors = require('cors');
const connectDB = require("./utils/db")
const errorMiddleware = require("./middlewares/error-middleware")
const cropRouter = require("./router/crops-details-router")

const PORT = process.env.PORT || 4000;
const app = express();

//handling cors policy

const corsOption = {
    origin : "http://localhost:5173",
    method : "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials : true,
}

app.use(cors(corsOption));
app.use(express.json())

// const crops = [
//     {
//         id: 1,
//         name: "Wheat",
//         imageUrl: "https://example.com/images/wheat.jpg"
//     },
//     {
//         id: 2,
//         name: "Rice",
//         imageUrl: "https://example.com/images/rice.jpg"
//     },
//     // Add more crops as needed
// ];

// app.get('/api/crops', (req, res) => {
//     res.json(crops);
// });

app.use("/api/data", cropRouter)
app.use("/api/auth", cropRouter)
app.use(errorMiddleware)

connectDB().then(() => {
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})
})
