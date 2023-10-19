import express, { Express, Request, Response, Router } from "express";
import Database from "../Database";
import Todo from "../types/Todo";

// userRoutes.js

const todosRouter:Router = express.Router();

todosRouter.get("/", (req: Request, res: Response) => {
    const q = req.query.q;
    const database = new Database<Todo>('todos');
	let data = database.selectAll();

    if(q && q !== "" && data ){
        data = data.filter(elem => elem.title.toLowerCase().includes(q.toString().toLowerCase()));
    }
	
	res.send(JSON.stringify(data));
});

todosRouter.get("/:id", (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const database = new Database<Todo>('todos');
	const data = database.select(id);
	res.send(JSON.stringify(data));
});

todosRouter.post("/", (req: Request, res: Response) => {
	const database = new Database<Todo>('todos');
	const data = database.insert(req.body);
	res.send(JSON.stringify(data));
});

todosRouter.put("/", (req: Request, res: Response) => {
	const database = new Database<Todo>('todos');
	const data = database.update(req.body);
	res.send(JSON.stringify(data));
});

todosRouter.delete("/:id", (req: Request, res: Response) => {
	const id = Number(req.params.id);
	const database = new Database<Todo>('todos');
	const data = database.delete(id);
	res.send(JSON.stringify(data));
});


// Export the router
export default todosRouter;
