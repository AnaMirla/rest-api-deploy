import express, { json } from "express";
import cors from "cors";
import { moviesRouter } from './Routes/moviesRoutes.js';


const app = express();

app.use(json());
app.use(cors());
app.disable("x-powered-by");

app.use("/movies", moviesRouter);

app.options("/movies", (req, res) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.sendStatus(200);
});

const PORT = process.env.PORT ?? 1234;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}/movies`);
});
