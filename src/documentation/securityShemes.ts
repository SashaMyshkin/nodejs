import { SecuritySchemeObject } from 'openapi3-ts/oas31';

export const BearerAuth: SecuritySchemeObject = {
    type: "http",
    scheme: "bearer",
    bearerFormat:"JWT"
}