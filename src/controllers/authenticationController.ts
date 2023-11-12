import { Request, Response } from 'express';
import database from "#root/db";
import { RequestError, RequestErrorCodes } from '#root/errors/RequestError';


export const signUp = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const { data, error } = await database.auth.signUp({
        email: email,
        password: password,
    });

    (!error) ? res.send(JSON.stringify({accessToken:data.session?.access_token})) : res.status(500).send(
        new RequestError(RequestErrorCodes.DATABASE_ERROR, error.message)
    )

}

export const signOut = async (req: Request, res: Response) => {

}

export const signIn = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const { data, error } = await database.auth.signInWithPassword({
        email: email,
        password: password,
    });

    (!error) ? res.send(JSON.stringify(JSON.stringify({accessToken:data.session.access_token}))) : res.status(500).send(
        new RequestError(RequestErrorCodes.DATABASE_ERROR, error.message)
    )

}