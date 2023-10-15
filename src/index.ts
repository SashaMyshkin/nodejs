import express, { Express, Request, Response } from "express";

import Todo from './types/Todo';
import Database from "./database";

const app: Express = express();
const port: number = 3000;

app.use(express.json());


app.get("/todos", (req: Request, res: Response) => {
	const database = new Database<Todo>('todos');
	const data = database.selectAll();
	res.send(JSON.stringify(data));
});

app.get("/todos/:id", (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const database = new Database<Todo>('todos');
	const data = database.select(id);
	res.send(JSON.stringify(data));
});

app.post("/todos", (req: Request, res: Response) => {
	const database = new Database<Todo>('todos');
	const data = database.insert(req.body);
	res.send(JSON.stringify(data));
});

app.put("/todos", (req: Request, res: Response) => {
	const database = new Database<Todo>('todos');
	const data = database.update(req.body);
	res.send(JSON.stringify(data));
});

app.delete("/todos/:id", (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const database = new Database<Todo>('todos');
	const data = database.delete(id);
	res.send(JSON.stringify(data));
});


app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
