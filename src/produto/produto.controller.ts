/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common/decorators";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produtos')
export class ProdutoController {
    constructor(
        private produtoRepository: ProdutoRepository
    ){}

    @Post()
    async criaProduto(@Body() dadosdoProduto) {
        this.produtoRepository.salvar(dadosdoProduto);
        return dadosdoProduto;
    }

    @Get()
    async listaProduto() {
        return this.produtoRepository.listar();
    }
}
