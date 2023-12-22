import ErrorObject from "#errors/ErrorObject";
import { AuthenticationErrorCodes } from "#errors/ErrorCodes";


export class AuthenticationError implements ErrorObject<AuthenticationErrorCodes> {

    errorCode: AuthenticationErrorCodes;
    errorMessage: string;

    constructor(errorCode:AuthenticationErrorCodes, errorMessage:string){
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;    
    }
    
}