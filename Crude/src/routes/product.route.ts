import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

const routerProduct = Router();
const controller = new ProductController();

// a.Create a resource.
routerProduct.post("/createProduct", (req, res) => controller.CreateProduct(req, res));

// b.List resources with basic filters
routerProduct.get("/filterProduct", (req, res) => controller.GetProductwithFilter(req, res));

// c.Get details of a resource.
routerProduct.get("/GetdetailProduct/:id", (req, res) => controller.GetDetailProduct(req, res));

// d.Update resource details
routerProduct.put("/UpdateProduct/:id", (req, res) => controller.UpdateProduct(req, res));

// e.Delete a resource.
routerProduct.delete("/DeleteProduct/:id", (req, res) => controller.deleteProduct(req, res));

export default routerProduct;
