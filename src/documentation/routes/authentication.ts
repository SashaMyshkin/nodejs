import { OperationObject } from 'openapi3-ts/oas31';
import { TAGS } from '#documentation/tags';

export const signUp: OperationObject = {
    tags: [TAGS.AUTH],
    summary: "Sign up",
    description: "This service facilitates your registration process.",
    operationId: "signUp",
    requestBody: {
        "$ref": "#/components/requestBodies/usersCredentials"
    },
    responses: {}
}

export const signIn: OperationObject = {
    tags: [TAGS.AUTH],
    summary: "Sign in",
    description: "This service facilitates your sign in process.",
    operationId: "signIn",
    requestBody: {
        "$ref": "#/components/requestBodies/usersCredentials"
    },
    responses: {}
}