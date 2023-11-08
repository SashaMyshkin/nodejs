import express, { Express } from "express";
import todosRouter from "#routes/todos";
import swaggerUi from 'swagger-ui-express';
import documentation from "#documentation/openApi";

const app: Express = express();
const port: number = Number(process.env.PORT) || 3600;

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(documentation.getSpec()));

//Don't forget leading slash!!!
app.use('/api/todos', todosRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
