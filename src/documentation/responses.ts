import { ResponseObject } from 'openapi3-ts/oas31';

export const itemResponse:ResponseObject = {
    description: "A JSON object containing the to-do item details.",
    content:{
        "application/json": {
            schema: {
                "$ref": "#/components/schemas/todo"
            }
        }
    }
}

export const itemsResponse:ResponseObject = {
    description: "A JSON object containing the details about bad request error.",
    content: {
        "application/json": {
            schema: {
                type:"array",
                items: {
                    "$ref": "#/components/schemas/todo"
                }
            }
        }
    }
}

export const badRequest:ResponseObject ={
    description: "A JSON object containing the details about bad request error.",
    content: {
        "application/json": {
            schema: {
                "$ref": "#/components/schemas/error"
            }
        }
    }
}

export const serverError:ResponseObject = {
    description: "A JSON object containing the details about bad request error.",
    content: {
        "application/json": {
            schema: {
                "$ref": "#/components/schemas/error"
            }
        }
    }
}