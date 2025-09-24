import { LessThanOrEqual, Like, MoreThanOrEqual } from "typeorm";
import { AppDataSource } from "../../config/database-config";
import { ProductEntity } from "../models/product.entity";



export class ProductService {

    private repo = AppDataSource.getRepository(ProductEntity);

    async CreateProduct(data: Partial<ProductEntity>) {
        const product = this.repo.create(data);
        return await this.repo.save(product);
    }

    async GetProductwithFilter(filters?: { minPrice?: number; maxPrice?: number; }): Promise<ProductEntity[]> {

        const where: any = {};

        if (filters?.minPrice) {
            where.price = MoreThanOrEqual(filters.minPrice);
        }

        if (filters?.maxPrice) {
            where.price = LessThanOrEqual(filters.maxPrice);
        }

        return await this.repo.find({ where });
    }


    async GetDetailProduct(id: string) {
        return await this.repo.findOne({ where: { id } });
    }

    async UpdateProduct(id: string, data: Partial<ProductEntity>) {
        await this.repo.update(id, data);
        return await this.repo.findOneBy({ id });
    }

    async deleteProduct(id: string) {
        return await this.repo.delete(id);
    }
}
