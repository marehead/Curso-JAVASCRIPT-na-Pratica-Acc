class Conta{
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  verSaldo() {
    console.log("Saldo: " + this.saldo);
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    this.saldo -= valor;
  }

  transferir(outraConta, valor) {
    this.sacar(valor);
    outraConta.depositar(valor)
  }
}

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/super
class Teste extends Conta {
  constructor(titular, greeting) {
    super(titular);
    this.greeting = greeting;
  }

  speak(){
    console.log(this.greeting + ', ' + this.titular);

    this.verSaldo();
  }
}

var c1 = new Conta("Pedro");
console.log('c1');
console.log(c1);
var c2 = new Conta("Maria");
console.log('c2');
console.log(c2);

c1.depositar(100);
c2.depositar(50);
c1.transferir(c2, 60);

console.log(c1.titular + " - R$" + c1.saldo);
console.log(c2.titular + " - R$" + c2.saldo);

var teste1 = new Teste("Paulo", "Bom dia");
console.log('teste1');
console.log(teste1);

teste1.depositar(1000);
teste1.transferir(c1, 500);
teste1.sacar(200);
teste1.speak();