import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutosRepository } from './repositories/produtos.repository';

@Injectable()
export class ProdutosService {
  constructor(private readonly repository: ProdutosRepository) {}

  create(createProdutoDto: CreateProdutoDto) {
    return this.repository.create(createProdutoDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateProdutoDto: UpdateProdutoDto) {
    return this.repository.update(id, updateProdutoDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
