import { Produto } from '@prisma/client';

export class ProdutoEntity implements Produto {
  codigo: string;
  descricao: string;
  preco: string;
  data_cadastro: Date;
}
