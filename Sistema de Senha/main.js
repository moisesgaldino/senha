const vSenha = document.querySelector('#senha');
let senhaLaudo = localStorage.getItem('senhaLaudo');
let senhaReceita = localStorage.getItem('senhaReceita');
let ultSenha = localStorage.getItem('ultSenha');
let audio = new Audio('senha.mp3')
//
if (!senhaLaudo)
    senhaLaudo = 0

if (!senhaReceita)
    senhaReceita = 0

if (!ultSenha)
    ultSenha = 'R'

mostraSenha();
// Caso o usuário tecle com o CAPS ativo       
window.addEventListener('keydown', function(e){
    if (e.key == 'l' || e.key == 'L'){
        senhaLaudo++;
        ultSenha = 'L';
        audio.play();
    }
    else if (e.key == 'r' || e.key == 'R'){
        senhaReceita++;
        ultSenha = 'R';
        audio.play();
    } else if (e.key == 'z' || e.key == 'Z'){
        ultSenha = 'L';
        senhaLaudo = 0;
        senhaReceita = 0;
    }
//armazenar no local
    localStorage.setItem('senhaLaudo', senhaLaudo);
    localStorage.setItem('senhaReceita', senhaReceita);
    localStorage.setItem('ultSenha', ultSenha);

    mostraSenha();
});
// correção do string para numb
function mostraSenha() {
    if (ultSenha=='L') {
        vSenha.innerHTML = 'L' + parseInt(senhaLaudo).toLocaleString('pt-br', {minimumIntegerDigits: 3});
    }
    else{
        vSenha.innerHTML = 'R' + parseInt(senhaReceita).toLocaleString('pt-br', {minimumIntegerDigits: 3});
    }   
}