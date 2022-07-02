
let botaoAtualizar = document.getElementById('atualizar-saldo')!;
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')!;

let saldoTotal = 0


function adicionarValor(soma: number) {
    saldoTotal += soma
    campoSaldo.innerHTML = saldoTotal.toString();
    limparCampoSoma();

}


botaoAtualizar.addEventListener('click', () => {
    adicionarValor(Number(soma.value));
});

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {    
    saldoTotal = 0;
    campoSaldo.innerHTML = saldoTotal.toString();   
}

botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});