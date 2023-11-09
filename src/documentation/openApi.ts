import { OpenAPIObject, OpenApiBuilder } from 'openapi3-ts/oas31';
import { todo, error } from '#documentation/schemas';
import info from '#documentation/info';
import { id } from '#documentation/parameters';
import { itemResponse, itemsResponse, badRequest, serverError } from '#documentation/responses';
import { getToDoItemById, insertToDoItem, getAllToDoItems, updateToDoItem, deleteToDoItem } from '#documentation/routes/todos';
import { bodyOfToDoItem } from '#documentation/requestBodies';

const openApiObject: OpenAPIObject = {
    openapi: "3.1.0",
    info: info,
    paths: {
        "/api/todos": { post: insertToDoItem, get:getAllToDoItems },
        "/api/todos/{id}": { get: getToDoItemById, put: updateToDoItem, delete: deleteToDoItem },
        
    },
    components: {
        schemas: { todo, error },
        parameters: { id: id },
        responses: { itemResponse, itemsResponse, badRequest, serverError },
        requestBodies: { bodyOfToDoItem: bodyOfToDoItem }
    }
}


const documentation = new OpenApiBuilder(openApiObject);

export default documentation;