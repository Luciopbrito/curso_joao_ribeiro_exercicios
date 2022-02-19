'use stric'

const txt1 = document.querySelector('#txt1');
const txt2 = document.querySelector('#txt2');
const btn = document.getElementsByTagName('button')[0];
const res = document.querySelector('.res');

btn.addEventListener('click', () => {
    if (txt1.value == '' || txt2.value == '') {
        alert('[ERRO] Valor inválido, digite um valor');
        res.innerHTML = ''
    } else {
        let value1 = Number(txt1.value);
        let value2 = Number(txt2.value);
        res.innerHTML = '';
        console.clear();

        //somando
        let soma = (n1,n2) => `<p>A soma entre ${n1} e ${n2} é igual a ${n1 + n2}</p>`;
        //subtraindo
        let subtracao = (n1,n2) => `<p>A subtração entre ${n1} e ${n2} é igual a ${n1 - n2}</p>`;
        //dividindo
        let divisao = (n1,n2) => `<p>A divisão entre ${n1} e ${n2} é igual a ${n1 / n2}</p>`;
        //multiplicando
        let multiplicacao = (n1,n2) => `<p>A multiplicação entre ${n1} e ${n2} é igual a ${n1 * n2}</p>`;
        
        res.innerHTML += soma(value1,value2);
        res.innerHTML += subtracao(value1,value2);
        res.innerHTML += divisao(value1,value2);
        res.innerHTML += multiplicacao(value1,value2);
    }
})