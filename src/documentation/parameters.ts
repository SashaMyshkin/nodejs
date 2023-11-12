import { ParameterObject} from 'openapi3-ts/oas31';

export const id: ParameterObject = {
    name: "id",
    in: "path",
    required: true,
    description: "The unique identifier of the item.",
    schema:{
        type:"integer"
    }
}

export const token: ParameterObject = {
    name: "Authorization",
    in: "header",
    required: true,
    description: "The authorization token required to access the endpoint.",
    schema: {
        type: "string",
        format: "bearer"
    }
}

