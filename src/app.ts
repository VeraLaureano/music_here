import express from "express";
const app = express();

const PORT: string | number = process.env.PORT || 8808;

app.get('/', (_req, res) => {
    res.send("<h1>Welcome!</h1>");
})

app.listen(PORT, (): void => {
    console.log(`Server listening on port ${PORT}...`);
})