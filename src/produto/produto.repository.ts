/* eslint-disable prettier/prettier */
export class ProdutoRepository{
    private produtos = [];

    async salvar(produto) {
        this.produtos.push(produto);
    }

    async listar() {
        return this.produtos;
    }
    
}