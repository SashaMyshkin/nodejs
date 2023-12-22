import { OpenAPIObject, OpenApiBuilder } from 'openapi3-ts/oas31';
import { todo, error, credentials } from '#documentation/schemas';
import info from '#documentation/info';
import { id, token } from '#documentation/parameters';
import { itemResponse, itemsResponse, badRequest, serverError } from '#documentation/responses';
import { getToDoItemById, insertToDoItem, getAllToDoItems, updateToDoItem, deleteToDoItem } from '#documentation/routes/todos';
import { signUp, signIn } from '#documentation/routes/authentication';
import { bodyOfToDoItem, usersCredentials } from '#documentation/requestBodies';
import { BearerAuth } from '#documentation/securityShemes';

const openApiObject: OpenAPIObject = {
    openapi: "3.1.0",
    info: info,
    paths: {
        "/api/todos": { post: insertToDoItem, get:getAllToDoItems },
        "/api/todos/{id}": { get: getToDoItemById, put: updateToDoItem, delete: deleteToDoItem },
        "/api/authentication/sign-up": { post: signUp},
        "/api/authentication/sign-in": { post: signIn}
        
    },
    components: {
        schemas: { todo, error, credentials },
        parameters: { id, token },
        responses: { itemResponse, itemsResponse, badRequest, serverError },
        requestBodies: { bodyOfToDoItem, usersCredentials},
        securitySchemes: {BearerAuth}
    },
    security:[
        {
            BearerAuth:[]
        }
    ]
}


const documentation = new OpenApiBuilder(openApiObject);

export default documentation;