import express, { Request, Response, Router } from "express";
import { validateID, validateBodyProperties } from "@validation/todos";
import { selectAll, selectByID, insert, update, deleteById } from "@controllers/todosConroller";

const todosRouter:Router = express.Router();

todosRouter.get("/", selectAll);

todosRouter.get("/:id", validateID, selectByID);

todosRouter.post("/", validateBodyProperties, insert);

todosRouter.put("/:id", validateID, validateBodyProperties, update);

todosRouter.delete("/:id", validateID, deleteById);


export default todosRouter;
