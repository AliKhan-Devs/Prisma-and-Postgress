import express from 'express';
import "dotenv/config"; // Automatically loads environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send("Hello from the Prisma based Server")
})

app.listen(PORT, () => {
    console.log(`Server is listning at http://localhost:${PORT}`)
});