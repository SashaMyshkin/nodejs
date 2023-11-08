import { OperationObject } from 'openapi3-ts/oas31';
import { TAGS } from '#documentation/tags';

export const getToDoItemById: OperationObject = {
    tags: [TAGS.TODO],
    summary: "Selection of a To-Do Item",
    description: "This service retrieves your to-do item from the database by ID.",
    operationId: "getToDoItemById",
    parameters: [
        {
            $ref: "#/components/parameters/id"
        }
    ],
    responses: {
        "200": {
            "$ref": "#/components/responses/itemResponse"
        },
        "400": {
            "$ref": "#/components/responses/badRequest"
        },
        "500": {
            "$ref": "#/components/responses/serverError"
        },

    }
}

export const updateToDoItem: OperationObject = {
    tags: [TAGS.TODO],
    summary: "Update a To-Do Item.",
    description: "This service updates the specified to-do item in the database.",
    operationId: "updateToDoItem",
    parameters: [
        {
            $ref: "#/components/parameters/id"
        }
    ],
    requestBody: {
        $ref: "#/components/requestBodies/bodyOfToDoItem"
    },
    responses: {
        "200": {
            "$ref": "#/components/responses/itemResponse"
        },
        "400": {
            "$ref": "#/components/responses/badRequest"
        },
        "500": {
            "$ref": "#/components/responses/serverError"
        },

    }
}

export const getAllToDoItems: OperationObject = {
    tags: [TAGS.TODO],
    summary: "Selection of all To-Do Items",
    description: "This service fetches the entire collection of to-do items associated with your account from the database.",
    operationId: "getAllToDoItems",
    responses: {
        "200": {
            "$ref": "#/components/responses/itemsResponse"
        },
        "400": {
            "$ref": "#/components/responses/badRequest"
        },
        "500": {
            "$ref": "#/components/responses/serverError"
        },

    }
}

export const insertToDoItem: OperationObject = {
    tags: [TAGS.TODO],
    summary: "Insertion of a To-Do Item",
    description: "This service adds your to-do item to the database.",
    operationId: "insertToDoItem",
    requestBody: {
        $ref: "#/components/requestBodies/bodyOfToDoItem"
    },

    responses: {
        "200": {
            "$ref": "#/components/responses/itemResponse"
        },
        "400": {
            "$ref": "#/components/responses/badRequest"
        },
        "500": {
            "$ref": "#/components/responses/serverError"
        },

    }

}

export const deleteToDoItem: OperationObject = {
    tags: [TAGS.TODO],
    summary: "Deletion of a To-Do Item",
    description: "This service deletes your to-do item from the database by ID.",
    operationId: "deleteToDoItem",
    parameters: [
        {
            $ref: "#/components/parameters/id"
        }
    ],
    responses: {
        "200": {
            description: "",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            error: {
                                type: "boolean"
                            }
                        }
                    }
                }
            }
        },
        "400": {
            "$ref": "#/components/responses/badRequest"
        },
        "500": {
            "$ref": "#/components/responses/serverError"
        },

    }
}

