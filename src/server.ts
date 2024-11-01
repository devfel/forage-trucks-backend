// ./src/server.ts
import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// localhost:3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Running on port: ${port}`);
});
