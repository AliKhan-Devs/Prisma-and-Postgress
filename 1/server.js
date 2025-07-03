import express from 'express';
import "dotenv/config"; // Automatically loads environment variables from .env file
import routes from './Routes/index.js'; // Importing the routes

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(routes); // Using the imported routes

app.get('/', (req, res) => {
    res.send("Hello from the Prisma based Server")
})




app.listen(PORT, () => {
    console.log(`Server is listning at http://localhost:${PORT}`)
});