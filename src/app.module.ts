import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [ConfigModule.forRoot(), ProdutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
