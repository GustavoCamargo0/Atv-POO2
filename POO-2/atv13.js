class carrinho {
    constructor() {
        this.produtos = [];
    }
    addProduto(nome, preco, quantidade) {
        const produto = {
            nome: nome,
            preco: preco,
            quantidade: quantidade
        };
        this.produtos.push(produto);
    }
    verTotal(){
        let total = 0;
        total = this.produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
        return ("Total do carrinho: R$ " + total.toFixed(2));
    }
}

const carrinho1 = new carrinho();
carrinho1.addProduto("Camiseta", 50, 2);
carrinho1.addProduto("Calça", 100, 1);
console.log(carrinho1.verTotal());
