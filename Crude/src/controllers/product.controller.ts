import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import { ProductFilter } from "../interfaces/product.interface";

const productService = new ProductService();


export class ProductController {


    async CreateProduct(req: Request, res: Response): Promise<void> {
        try {
            const product = await productService.CreateProduct(req.body);
            res.status(201).json(product);
        } catch (err) {
            res.status(500).json({ message: "Error creating product", error: err });
        }
    }

    async GetProductwithFilter(req: Request, res: Response): Promise<void> {

        const { minPrice, maxPrice } = req.body as ProductFilter;

        const filters = {
            minPrice: minPrice ? Number(minPrice) : undefined,
            maxPrice: maxPrice ? Number(maxPrice) : undefined,
        };

        const products = await productService.GetProductwithFilter(filters);
        res.json(products);
    }


    async GetDetailProduct(req: Request, res: Response): Promise<void> {
        const product = await productService.GetDetailProduct(req.params.id);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        res.json(product);
    }

    async UpdateProduct(req: Request, res: Response): Promise<void> {
        const product = await productService.UpdateProduct(req.params.id, req.body);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        res.json(product);
    }

    async deleteProduct(req: Request, res: Response): Promise<void> {
        const success = await productService.deleteProduct(req.params.id);
        if (!success) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        res.status(204).send("product is deleted successfully");
    }
}
