import express, { Request, Response, Router } from "express";
import database from "../db";

const todosRouter:Router = express.Router();

todosRouter.get("/", async (req: Request, res: Response) => {
	const { data, error } = await database
		.from('todos')
		.select();
	res.send(JSON.stringify(data));
});

todosRouter.get("/:id", async (req: Request, res: Response) => {
	const { data, error } = await database
		.from('todos')
		.select()
		.eq('id', req.params["id"]);
	res.send(JSON.stringify(data));
});

todosRouter.post("/", async (req: Request, res: Response) => {

	const { title, description } = req.body;
	const { data, error } = await database.from("todos").insert([{title:title, description:description}]).select();
	res.send(JSON.stringify(data));
	
});

todosRouter.put("/:id", async (req: Request, res: Response) => {
	const { title, description } = req.body;

	const { data, error } = await database
	.from('todos')
	.update({ title: title, description: description })
	.eq('id', req.params["id"])
	.select();

	res.send(JSON.stringify(data));
});

todosRouter.delete("/:id", async (req: Request, res: Response) => {
	const { error } = await database
		.from('todos')
		.delete()
		.eq('id', req.params["id"]);
	res.send(JSON.stringify(error));
});


export default todosRouter;
