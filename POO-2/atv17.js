class biblioteca {
    constructor(){
        this.livros = []
        this.emprestados = []
    }
    addLivros(nome){
        this.livros.push(nome)
    }
    pegarEmprestado(nome){
    if(this.livros.includes(nome)){
        this.emprestados.push(nome)
        console.log("livro emprestado")
        this.livros = this.livros.filter(livro => livro !== nome)}
    else {
        console.log("livro indisponivel")
    }}
    verLivros(){
        return this.livros
    }
    verEmprestados(){
        return this.emprestados
    }
}

const biblioteca1 = new biblioteca()
biblioteca1.addLivros("livro1")
biblioteca1.addLivros("livro2")
biblioteca1.pegarEmprestado("livro2")
console.log(biblioteca1.verLivros())
