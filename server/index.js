import express from "express";
import { createServer } from "http";
import { json } from "body-parser";
import morgan from "morgan";
import router from "./router";
import { connect } from "mongoose";
import mongoAltasUrl from "./config/mongodbConnection";
const app = express();
import cors from 'cors';
// App Setip
app.use(morgan("combined"));
app.use(cors());
app.use(json({ type: "*/*" }));
router(app);

connect(mongoAltasUrl, {
		reconnectTries: 100,
		reconnectInterval: 500,
        autoReconnect: true,
        useCreateIndex: true,
		useNewUrlParser: true,
		dbName: "test"
	})
	.then(() => {
		console.log("Connected to database!");
	})
	.catch(err => console.log("Mongo connection error", err));

// Server Setup
const port = process.env.PORT || 3090;
const server = createServer(app);
server.listen(port);
console.log("Server listening on:", port);
