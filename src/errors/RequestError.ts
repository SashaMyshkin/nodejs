import ErrorObject from "#errors/ErrorObject";
import { RequestErrorCodes } from "#errors/ErrorCodes";

export class RequestError implements ErrorObject<RequestErrorCodes> {

    errorCode: RequestErrorCodes;
    errorMessage: string;

    constructor(errorCode:RequestErrorCodes, errorMessage:string){
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;    
    }
    
}