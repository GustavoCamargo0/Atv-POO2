class retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    perimetro(){
        return 2 * (this.largura + this.altura);
    }
    area(){
        return this.largura * this.altura;
    }
}