'use stric'

const txt1 = document.querySelector('#txt1');
const txt2 = document.querySelector('#txt2');
const btn = document.getElementsByTagName('button')[0];
const res = document.querySelector('.res');

btn.addEventListener('click', () => {
    if (txt1.value != '' || txt2.value != '') {
        let value1 = Number(txt1.value);
        let value2 = Number(txt2.value);
        res.innerHTML = ''
        console.clear()
        soma(value1,value2);
        subtracao(value1,value2);
        divisao(value1,value2);
        multiplicacao(value1,value2);
        
        function soma(n1,n2) {
            res.innerHTML += `<p>A soma entre ${n1} e ${n2} é igual a ${n1 + n2}</p>`;
            console.log(`A soma entre ${n1} e ${n2} é igual a ${n1 + n2}`);
        }   

        function subtracao(n1,n2) {
            res.innerHTML += `<p>A subtração entre ${n1} e ${n2} é igual a ${n1 - n2}</p>`;
            console.log(`A subtração entre ${value1} e ${n2} é igual a ${n1 - n2}`);
        }   

        function divisao(n1,n2) {
            res.innerHTML += `<p>A divisão entre ${n1} e ${n2} é igual a ${n1 / n2}</p>`;
            console.log(`A divisão entre ${n1} e ${n2} é igual a ${n1 / n2}`)
        }   

        function multiplicacao(n1,n2) {
            res.innerHTML += `<p>A multiplicação entre ${n1} e ${n2} é igual a ${n1 * n2}</p>`;
            console.log(`A multiplicação entre ${n1} e ${n2} é igual a ${n1 * n2}`)
        }
    } else {
        alert('[ERRO] Valor inválido, digite um valor');
    }
})