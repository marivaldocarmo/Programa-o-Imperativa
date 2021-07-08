function logar(){
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');

    console.log(email.value+senha.value);

    if(email.value == 'gmail' && senha.value == 'admin'){
        localStorage.setItem('acesso', true);

        window.location.href = 'consult.html';
    }else{
        alert('Usuário ou senha invalidos')
    }
}

function situacao(){
    let aluno = document.getElementById('aluno');
    let nota = document.getElementById('nota');

    console.log(aluno.value+nota.value);

    if(nota.value >= 60){
        alert(aluno.value + " Aprovado")
    }else if(nota.value >=50){
        alert(aluno.value + " Recuperação")
    }else if(nota.value <=40){
        alert(aluno.value + " Reprovado")
    }
}