import ErrorObject from "./ErrorObject";

enum RequestErrorCodes {
    MISSING_PARAMETER,
    MISSING_QUERY_PARAMETER,
    MISSING_PROPERTY,
    INVALID_PARAMETER_TYPE,
    INVALID_QUERY_PARAMETER_TYPE,
    INVALID_PROPERTY_TYPE,
    DATABASE_ERROR
}

class RequestError implements ErrorObject<RequestErrorCodes> {

    errorCode: RequestErrorCodes;
    errorMessage: string;

    constructor(errorCode:RequestErrorCodes, errorMessage:string){
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;    
    }
    
}

export {
    RequestErrorCodes,
    RequestError
};