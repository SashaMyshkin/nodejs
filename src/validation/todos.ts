import { Request, Response, NextFunction } from 'express';
import { TodoErrorCodes, TodoError }  from '@errors/TodoError';
import { RequestError, RequestErrorCodes }  from '@errors/RequestError';

function validateID(req:Request, res:Response, next:NextFunction){

    const id = req.params["id"];

    if(!id){
        res.status(400).send(new RequestError(RequestErrorCodes.MISSING_PARAMETER, "The parameter 'ID' should be present within the request."));
    } else if(isNaN(Number(id))){
        res.status(400).send(new RequestError(RequestErrorCodes.INVALID_PARAMETER_TYPE, "The parameter 'ID' should possess a numeric data type."));
    } else {
        next();
    }
}

function validateBodyProperties(req:Request, res:Response, next:NextFunction){

    const { title, description } = req.body;

    if(!title){
        res.status(400).send(new RequestError(RequestErrorCodes.MISSING_PROPERTY, "Ensure the inclusion of the 'title' property within the body of your request."));
    } else if(!description){
        res.status(400).send(new RequestError(RequestErrorCodes.MISSING_PROPERTY, "Ensure the inclusion of the 'description' property within the body of your request."));
    } else if(String(title).trim() === "") {
        res.status(400).send(new TodoError(TodoErrorCodes.EMPTY_TITLE_PROPERTY, "The title parameter ought not to be an empty string."));
    } else if(String(description).trim() === "") {
        res.status(400).send(new TodoError(TodoErrorCodes.EMPTY_DESCRIPTION_PROPERTY, "The description parameter ought not to be an empty string."));
    } else {
        next();
    }
    
}

export {
    validateID,
    validateBodyProperties
}