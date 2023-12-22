import express, { Express } from "express";
import swaggerUi from 'swagger-ui-express';
import documentation from "#documentation/openApi";
import todosRouter from "#routes/todos";
import authentication from "#routes/authentication";

const app: Express = express();
const port: number = Number(process.env.PORT) || 3600;

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(documentation.getSpec()));

//Don't forget leading slash!!!
app.use('/api/todos', todosRouter);
app.use('/api/authentication', authentication);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
