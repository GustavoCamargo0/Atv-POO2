class usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
    }
    validarSenha(senha) {
        if (this.senha == senha) {
            return "senha correta";
        } else {
            return "senha incorreta";
        }
    }
}

usuario1 = new usuario("João", "123456");
console.log(usuario1.validarSenha("12345")); 