import express, { Router } from 'express';
import { signUp, signIn, signOut } from "#controllers/authenticationController";
import { validateCredentials } from "#validation/authentication";

const authentication:Router = express.Router();

authentication.post('/sign-in', validateCredentials, signIn);
authentication.post('/sign-up', validateCredentials, signUp);
authentication.post('/sign-out', validateCredentials, signOut );


export default authentication;