import express, { Request, Response, Router } from "express";
import { validateID, validateBodyProperties } from "#validation/todos";
import { selectAll, selectByID, insert, update, deleteById } from "#controllers/todosController";
import { isAuthenticated } from "#root/validation/authentication";

const todosRouter: Router = express.Router();

todosRouter.get("/", isAuthenticated, selectAll);

todosRouter.get("/:id", isAuthenticated, validateID, selectByID);

todosRouter.post("/", isAuthenticated, validateBodyProperties, insert);

todosRouter.put("/:id", isAuthenticated, validateID, validateBodyProperties, update);

todosRouter.delete("/:id", isAuthenticated, validateID, deleteById);


export default todosRouter;
