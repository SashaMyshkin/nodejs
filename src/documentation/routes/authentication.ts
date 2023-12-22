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
    responses: {
        "200": {
            description: "Successful sign up",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            token: {
                                type: "string",
                                description: "Bearer token to be used for every request.",
                                readOnly: true
                            }
                        }
                    }
                }
            }
        }
    }
}

export const signIn: OperationObject = {
    tags: [TAGS.AUTH],
    summary: "Sign in",
    description: "This service facilitates your sign in process.",
    operationId: "signIn",
    requestBody: {
        "$ref": "#/components/requestBodies/usersCredentials"
    },
    responses: {
        "200": {
            description: "Successful sign in",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            token: {
                                type: "string",
                                description: "Bearer token to be used for every request.",
                                readOnly: true
                            }
                        }
                    }
                }
            }
        }
    }
}