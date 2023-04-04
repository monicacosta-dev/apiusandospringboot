//acessando atraves do DOM
const formulario = document.querySelector('form');
const botao = document.querySelector("button");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Icelular = document.querySelector(".celular");

function cadastrar() {
    //fução api
    fetch("http://localhost:8080/usuarios",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',  
            },
            method: "POST",
            body:JSON.stringify({
                nome: Inome.value,
                email: Iemail.value,
                senha: Isenha.value,
                celular: Icelular.value
            })
            
        })
        .then(function (res) { console.log(res)})
        .catch(function (res){console.log(res)})
    };

function limpar() {
    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Icelular.value = "";

}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    //criar o objeto dados para armazenamento das informações do formulario.
    cadastrar();
    limpar();
})