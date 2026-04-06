class conta{
    constructor(nome, saldo){
        this.nome = nome
        this.saldo = saldo
    }
Depositar(valor){
    this.saldo += valor
}
Retirada(valor){
    this.saldo -= valor
}
Transferir(valor, usuario){
    this.saldo -= valor
    usuario.saldo += valor 
}
verSaldo(){
    return this.saldo.toFixed(2)
}
}

const usuario1 = new conta("gus", 0)
const usuario2 = new conta("davi", 0)
usuario1.Depositar(1000)
usuario1.Transferir(500, usuario2)
console.log(usuario2.verSaldo())


