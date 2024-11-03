import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller({
  path: '/product',
})
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProductByPage(): Promise<Product[]> {
    return this.productService.findAll();
  }
}