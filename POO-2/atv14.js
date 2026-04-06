class funcionario{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }
    calcularSalario(){
        return "Salário de " + this.nome + ": R$ " + this.salario.toFixed(2);
    }
}

class designer extends funcionario{
    constructor(nome, salario){
        super(nome, salario);
    }
    calcularSalario(){
        const salarioComBonus = this.salario * 1.1;
        return "Salário de " + this.nome + ": R$ " + salarioComBonus.toFixed(2);
    }

}

class desenvolvedor extends funcionario{
    constructor(nome, salario){
        super(nome, salario);
    }
    calcularSalario(){
        const salarioComBonus = this.salario * 1.2;
        return "Salário de " + this.nome + ": R$ " + salarioComBonus.toFixed(2);
    }
}

const desenvolvedor1 = new desenvolvedor("Maria", 5000);
const designer1 = new designer("Carlos", 4000);
console.log(desenvolvedor1.calcularSalario());
console.log(designer1.calcularSalario());