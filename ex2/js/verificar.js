'use strict'

const txtUsuario = document.querySelector('input#txt__usuario');
const txtNome = document.querySelector('input#txt__nome');
const txtSobrenome = document.querySelector('input#txt__sobrenome');
const txtEmail = document.querySelector('input#txt__email');
const txtTelefone = document.querySelector('input#txt__tel');
const btn = document.querySelector('input#txt__btn');
const formAtive = document.getElementsByTagName('form')[0]

btn.addEventListener('click', verificar)

function verificar() {
    if (txtUsuario.value == '') {
        alert('[ERRO] Nome de Usuário inválido');
        txtUsuario.focus();
    } else if (txtNome.value == '') {
        alert('[ERRO] Nome inválido');
        txtNome.focus();
    } else if (txtSobrenome.value == '') {
        alert('[ERRO] Sobrenome inválido');
        txtSobrenome.focus();
    } else if (txtEmail.value == '') {
        alert('[ERRO] Email inválido');
        txtEmail.focus();
    } else if (txtTelefone.value == '' || txtTelefone.value.length < 9) {
        alert('[ERRO] Telefone inválido');
        txtTelefone.focus();
    } else {
        window.location.href = 'index.html'
    }
}