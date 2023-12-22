import ErrorObject from "#errors/ErrorObject";
import { TodoErrorCodes } from "#errors/ErrorCodes";

export class TodoError implements ErrorObject<TodoErrorCodes> {

    errorCode: TodoErrorCodes;
    errorMessage: string;

    constructor(errorCode:TodoErrorCodes, errorMessage:string){
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;    
    }
    
}