import { SchemaObject } from 'openapi3-ts/oas31';

export const todo: SchemaObject = {
    type: "object",
    properties: {
        id: {
            type: "integer",
            format: "int64",
            description: 'Unique identifier for the to-do item.',
            readOnly: true
        },
        title: {
            type: "string",
            description: "The title of a to-do item.",
            minLength: 1
        },
        description: {
            type: "string",
            description: "The description of a to-do item.",
            minLength: 1
        }
    },
    required: ['title', 'description']
}

export const error: SchemaObject = {
    type: "object",
    properties: {
        errorCode: {
            type: "integer",
            format: "int64",
            readOnly: true,
            description: "Unique code for the error.",
        },
        errorMessage: {
            type: "string",
            description: "An informative error message detailing the nature of the problem.",
            readOnly: true,
        }
    }
}

export const credentials: SchemaObject = {
    type: "object",
    properties: {
        email: {
            type: "string",
            description: "User's Email Address."
        },
        password: {
            type:"string",
            description: "User's Password"
        }
    }
}

