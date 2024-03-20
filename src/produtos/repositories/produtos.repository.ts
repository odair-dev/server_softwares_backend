import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from '../dto/create-produto.dto';
import { UpdateProdutoDto } from '../dto/update-produto.dto';
import { ProdutoEntity } from '../entities/produto.entity';

@Injectable()
export class ProdutosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<ProdutoEntity> {
    const newProduct = await this.prisma.produto.create({
      data: createProdutoDto,
    });
    return newProduct;
  }

  async findAll(): Promise<ProdutoEntity[]> {
    return this.prisma.produto.findMany();
  }

  async findOne(id: string): Promise<ProdutoEntity> {
    const uniqueProduto = await this.prisma.produto.findUnique({
      where: {
        codigo: id,
      },
    });

    if (!uniqueProduto) {
      throw new NotFoundException('Produto não encontrado');
    }

    return uniqueProduto;
  }

  async update(
    id: string,
    updateProdutoDto: UpdateProdutoDto,
  ): Promise<ProdutoEntity> {
    const uniqueProduto = await this.prisma.produto.findUnique({
      where: {
        codigo: id,
      },
    });

    if (!uniqueProduto) {
      throw new NotFoundException('Produto não encontrado');
    }

    const produto = await this.prisma.produto.update({
      where: {
        codigo: id,
      },
      data: updateProdutoDto,
    });

    return produto;
  }

  async remove(id: string): Promise<void> {
    const uniqueProduto = await this.prisma.produto.findUnique({
      where: {
        codigo: id,
      },
    });

    if (!uniqueProduto) {
      throw new NotFoundException('Produto não encontrado');
    }

    await this.prisma.produto.delete({
      where: {
        codigo: id,
      },
    });
  }
}
