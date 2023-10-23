import express, { Express } from "express";
import todosRouter from "#routes/todos";

const app: Express = express();
const port: number = Number(process.env.PORT) || 3600;

app.use(express.json());

//Don't forget leading slash!!!
app.use('/api/todos', todosRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
