import ErrorObject from "./ErrorObject";

enum TodoErrorCodes{
    EMPTY_TITLE_PROPERTY,
    EMPTY_DESCRIPTION_PROPERTY
}

class TodoError implements ErrorObject<TodoErrorCodes> {

    errorCode: TodoErrorCodes;
    errorMessage: string;

    constructor(errorCode:TodoErrorCodes, errorMessage:string){
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;    
    }
    
}

export {
    TodoErrorCodes,
    TodoError
};