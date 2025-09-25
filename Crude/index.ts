import express from "express";
import { AppDataSource } from "./config/database-config";
import routerProduct from "./src/routes/product.route";

const app = express();

const PORT :number =  5000;

app.use(express.json());

app.use("/products", routerProduct);

AppDataSource.initialize()
  .then(() => {
    console.log(" Database connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err:Error) => {
    console.error("Database connection failed!", err);
  });
  
