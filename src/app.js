import express from "express";
import morgan from "morgan";

const app = express();

//settings
app.set("port", 5000);
//middlewares
app.use(morgan("dev"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use(express.json());

//routes
import amigosRoutes from "./routes/amigos.route"
app.use("/api/friends", amigosRoutes);

export default app;