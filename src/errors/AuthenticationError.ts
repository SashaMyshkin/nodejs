import ErrorObject from "#errors/ErrorObject";

enum AuthenticationErrorCodes{
    EMPTY_EMAIL_PROPERTY = "EMPTY_EMAIL_PROPERTY",
    EMPTY_PASSWORD_PROPERTY = "EMPTY_PASSWORD_PROPERTY"
}

class AuthenticationError implements ErrorObject<AuthenticationErrorCodes> {

    errorCode: AuthenticationErrorCodes;
    errorMessage: string;

    constructor(errorCode:AuthenticationErrorCodes, errorMessage:string){
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;    
    }
    
}

export { AuthenticationError, AuthenticationErrorCodes }