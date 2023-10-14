import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define a simple route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
