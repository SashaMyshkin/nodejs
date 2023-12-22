import { Request, Response, NextFunction } from 'express';
import { RequestError }  from '#errors/RequestError';
import { AuthenticationError }  from '#errors/AuthenticationError';
import database from '#root/db';
import { AuthenticationErrorCodes, RequestErrorCodes } from '#root/errors/ErrorCodes';

export function validateCredentials(req:Request, res:Response, next:NextFunction){

    const { email, password } = req.body;

    if(!email){
        res.status(400).send(new RequestError(RequestErrorCodes.MISSING_PROPERTY, "Ensure the inclusion of the 'email' property within the body of your request."));
    } else if(!password){
        res.status(400).send(new RequestError(RequestErrorCodes.MISSING_PROPERTY, "Ensure the inclusion of the 'password' property within the body of your request."));
    } else if(String(email).trim() === "") {
        res.status(400).send(new AuthenticationError(AuthenticationErrorCodes.EMPTY_EMAIL_PROPERTY, "The email parameter ought not to be an empty string."));
    } else if(String(password).trim() === "") {
        res.status(400).send(new AuthenticationError(AuthenticationErrorCodes.EMPTY_PASSWORD_PROPERTY, "The password parameter ought not to be an empty string."));
    } else {
        next();
    }
}

export async function isAuthenticated(req:Request, res:Response, next:NextFunction){

    const authorization = req.headers.authorization;
    const token = authorization?.split(' ')[1];
    const { data, error } = await database.auth.getUser(token);

    console.log('authorization:', authorization);
    console.log('data', data);
    console.log('error', error);

    if(!authorization){
        res.status(401).send(JSON.stringify(error))
    } else {
        next()
    }

   

}

