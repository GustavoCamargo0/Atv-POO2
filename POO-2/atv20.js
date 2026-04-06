class cliente {
    constructor(nome, email) {
        this.nome = nome;   
        this.email = email;
    }
}

class produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }}

class pedido {
    constructor(cliente){
        this.cliente = cliente;
        this.produtos = [];
        this.desconto = 0;
    }
    adicionarProduto(produto){
        this.produtos.push(produto);
    }
    aplicarDesconto(percentual){
        this.desconto = percentual;
    }
    calcularTotal(){
        const total = this.produtos.reduce((soma, produto)=> soma + produto.preco, 0);
        const valorDesconto = total * (this.desconto / 100);
        return total - valorDesconto;
    }
    tudo(){
        console.log(`Cliente: ${this.cliente.nome} (${this.cliente.email})`);
        console.log("Produtos:");
        this.produtos.forEach(produto => {
            console.log(`- ${produto.nome}: R$${produto.preco.toFixed(2)}`);
        });
        console.log('Desconto:' + this.desconto + '%');
        console.log('Total: R$' + this.calcularTotal().toFixed(2))
    }
}
const cliente1 = new cliente("gus", "gus@gmail.com")

const produto1 = new produto("calça", 150)
const produto2 = new produto("camiseta", 70)
const produto3 = new produto("sueter", 120)

const pedido1 = new pedido(cliente1)
pedido1.adicionarProduto(produto2)
pedido1.adicionarProduto(produto2)
pedido1.adicionarProduto(produto3)

pedido1.aplicarDesconto(10)

console.log(pedido1.calcularTotal())
pedido1.tudo()