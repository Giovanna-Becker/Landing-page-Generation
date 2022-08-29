var nome = window.document.getElementById('nome')
var email = window.document.getElementById('email')
var assunto = window.document.getElementById('assunto')
var nomeOk = false
var emailOk = false
var assuntoOk = false

function validarNome(){

    let txtNome = document.getElementById('txtNome')

    if(nome.value.length < 2){
        txtNome.innerHTML ='Nome inválido!'
        txtNome.style.color = 'rgb(140, 0, 255)'
        nomeOk = false
    }else{
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail(){
    
    let txtEmail = document.getElementById('txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1){
        txtEmail.innerHTML = 'O email deve ser no formato email@email.com'
        txtEmail.style.color = 'rgb(140, 0, 255)'
        emailOk = false
    }else{
        txtEmail.innerHTML = 'Email válido!'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validarAssunto(){

    let txtAssunto = document.getElementById('txtAssunto')

    if(assunto.value.length < 20){
        txtAssunto.innerHTML = 'O texto deve ter no mínimo 20 caracteres'
        txtAssunto.style.color = 'rgb(140, 0, 255)'
        assuntoOk = false
    }else if(assunto.value.length > 100){
        txtAssunto.innerHTML = 'O texto não pode ter mais de 100 caracteres'
        txtAssunto.style.color = 'rgb(140, 0, 255)'
        assuntoOk = false
    }else{
        txtAssunto.innerHTML = 'Texto válido!'
        txtAssunto.style.color = 'green'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente!')
    }
}