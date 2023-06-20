import "dotenv/config";
import express, {json} from "express";
import cors from "cors";
import connectDB from "./config/mongo";
import { songRouter } from "./routes/song.route";
import { notFound } from "./middlewares/notFound";
const app = express();

const PORT: string | number = process.env.PORT || 8808;

// MIDDLEWARES
app.use(json());
app.use(express.static("./public"));
app.use(cors());

// ROUTING
app.get('/', (_req, res) => {
    res.send("<h1>Welcome!</h1>");
})

app.use("/api/v1/songs", songRouter);
app.use(notFound);

(async () => {
    try {
        await connectDB(process.env.MONGO_URI as string)
        app.listen(PORT, (): void => {
            console.log(`Server listening on port ${PORT}...`);
        })
    } catch (error) {
        console.log(error);
    }
})();