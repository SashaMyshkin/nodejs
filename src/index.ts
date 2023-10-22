import express, { Express } from "express";
import todosRouter from "./routes/todos";
import dotenv from 'dotenv';


dotenv.config();


const app: Express = express();
const port: number = 8080;

app.use(express.json());

//Don't forget following slash!!!
app.use('/api/todos', todosRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
