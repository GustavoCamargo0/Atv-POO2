class login {
    constructor(){
        this.usuarios = []
    }
    cadastro(email, senha){
        if (this.usuarios.some(user => user.email === email)) {
            return console.log("Email já cadastrado");
        }
        else{
        const novoUsuario = {
            email: email,
            senha: senha
        };
        this.usuarios.push(novoUsuario)};
    }
}

const login1 = new login()
login1.cadastro("email1", "senha1")
login1.cadastro("email2", "senha2")
login1.cadastro("email1", "senha3")
console.log(login1.usuarios)