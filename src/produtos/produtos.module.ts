import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutosRepository } from './repositories/produtos.repository';

@Module({
  controllers: [ProdutosController],
  providers: [ProdutosService, PrismaService, ProdutosRepository],
})
export class ProdutosModule {}
