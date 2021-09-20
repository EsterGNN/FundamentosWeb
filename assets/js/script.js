let resposta = document.querySelector('#resposta')
let nome = window.document.getElementById('nome')

let respostaOk = false
let nomeOk = false

nome.style.width = '100%'

function validaResposta() {
    let txtResposta = document.querySelector('#txtResposta')

    if(resposta.value.length < 250 || resposta.value.length > 2500){
        txtResposta.innerHTML = 'O texto deve conter no máximo 2500 caracteres e no mínimo 250 caracteres.'
        txtResposta.style.color = 'red'
    }else{
        txtResposta.innerHTML = 'Válido.'
        txtResposta.style.color = 'green'
        respostaOk = true
    }
}

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 3 || nome.value.length > 100){
        txtNome.innerHTML = 'Nome inválido.'
        txtNome.style.color = 'red'
        txtNome.style.display = 'block'
    }else{
        txtNome.style.display = 'none'
        nomeOk = true
    }
}

function enviar() {
    if(respostaOk == true && nomeOk == true){
        alert('Resposta enviada com sucesso!')
    }
    else{
        alert("Preencha todos os campos os corretamente para enviar.")
    }
}