import { Request, Response } from 'express';
import database from "#root/db";
import { RequestError, RequestErrorCodes } from '#errors/RequestError';

const selectAll = async (req: Request, res: Response) => {
    const { data, error } = await database.from('todos').select();
    (!error) ? res.send(JSON.stringify(data)) : res.send(new RequestError(RequestErrorCodes.DATABASE_ERROR, "An error has transpired during the data processing procedure."))
}

const selectByID = async (req: Request, res: Response) => {
    const { data, error } = await database.from('todos').select().eq('id', req.params["id"]);
    (!error) ? res.send(JSON.stringify(data)) : res.send(new RequestError(RequestErrorCodes.DATABASE_ERROR, "An error has transpired during the data processing procedure."))
}

const insert = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const { data, error } = await database.from("todos").insert([{ title: title, description: description }]).select();
    (!error) ? res.send(JSON.stringify(data)) : res.send(new RequestError(RequestErrorCodes.DATABASE_ERROR, "An error has transpired during the data processing procedure."))
}

const update = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const { data, error } = await database.from('todos').update({ title: title, description: description }).eq('id', req.params["id"]).select();
    (!error) ? res.send(JSON.stringify(data)) : res.send(new RequestError(RequestErrorCodes.DATABASE_ERROR, "An error has transpired during the data processing procedure."))
}


const deleteById = async (req: Request, res: Response) => {
    const { error } = await database.from('todos').delete().eq('id', req.params["id"]);
    (!error) ? res.send(JSON.stringify({ error: false })) : res.send(new RequestError(RequestErrorCodes.DATABASE_ERROR, "An error has transpired during the data processing procedure."))
}

export {
    selectAll,
    selectByID,
    insert,
    update,
    deleteById
}