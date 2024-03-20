-- CreateTable
CREATE TABLE "produtos" (
    "codigo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" VARCHAR(255) NOT NULL,
    "data_cadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("codigo")
);
