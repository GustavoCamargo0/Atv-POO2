class forma{
    constructor(){
    }
}

class retangulo extends forma{
    constructor(largura, altura){
        super();
        this.largura = largura;
        this.altura = altura;
    }      
    calcularArea(){
        return this.largura * this.altura;
    }
}

class circulo extends forma{
    constructor(raio){
        super();
        this.raio = raio;
    }      
    calcularArea(){
        return Math.PI * this.raio ** 2;
    }
}

class triangulo extends forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}

const retangulo1 = new retangulo(10,5)
console.log(retangulo1.calcularArea())

const circulo1 = new circulo(5)
console.log(circulo1.calcularArea())

const triangulo1 = new triangulo(5,8)
console.log(triangulo1.calcularArea())