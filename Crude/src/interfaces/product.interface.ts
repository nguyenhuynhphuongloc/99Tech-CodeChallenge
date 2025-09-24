export interface ProductFilter {
    minPrice?: number;
    maxPrice?: number;
}

export interface ProductUpdate {
    name?: string;
    price?: number;
    stock?: number;
    description?: string;
}