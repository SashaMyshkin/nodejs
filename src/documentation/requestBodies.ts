import { RequestBodyObject } from 'openapi3-ts/oas31';

export const bodyOfToDoItem: RequestBodyObject = {
    description: "A JSON object containing the details of a to-do item",
    required: true,
    content: {
        "application/json": {
            schema: {
                "$ref": "#/components/schemas/todo"
            }
        }
    }
}

export const usersCredentials:RequestBodyObject = {
    description: "A JSON object that contains the details of the credentials.",
    required: true,
    content: {
        "application/json":{
            schema: {
                "$ref": "#/components/schemas/credentials"
            }
        }
    }
}