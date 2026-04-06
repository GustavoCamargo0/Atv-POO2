class produto {
    constructor(estoque){
        this.estoque = estoque
    }
    reposicao(valor){
        this.estoque += valor
    }
    venda(valor){
        if (valor > this.estoque) {
            return console.log("Estoque insuficiente")
        }
        else {
        this.estoque -= valor
    }}
    verEstoque(){
        return this.estoque
}}

const produto1 = new produto(100)
produto1.reposicao(20)
produto1.venda(130)
console.log(produto1.verEstoque())