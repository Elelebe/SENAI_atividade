//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();
    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }
    if(logado == 0){
        alert("Acesso Negado. Dados incorretos");
    }
}

//Cadastro do cliente + ativar alert no botão cadastrar

function cadastro() {
    var usuario = document.getElementsByName('usuariocad')[0].value;
    usuario = usuario.toLowerCase();
    var email = document.getElementsByName('email')[0].value;
    email = email.toLowerCase();
    var senha = document.getElementById('senhacad').value;
    senha = senha.toLowerCase();
    if(usuario.length >= 4 && senha.length >= 6 && (email.slice(-10) == '@gmail.com' || email.slice(-12) == '@hotmail.com')){
        cadastrado = 1;
        alert("Cadastrado com sucesso!");
        window.location = "index.html";
    }
    else{
        if(usuario.length < 4){
            alert("Seu usuário precisa ter ao menos 4 caracteres.");
        }
        if(email.slice(-10) != '@gmail.com' && email.slice(-12) != '@hotmail.com'){
            alert("Seu email está com a sintaxe incorreta.")
        }
        if(senha.length < 6){
            alert("Sua senha precisa ter ao menos 6 caracteres.");
        }
    }
}

   
