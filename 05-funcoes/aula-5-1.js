function escreverMeuNome(nome) {
   return 'meu nome é ' + nome; 
}

function verificarIdade(idade){
    if(idade >= 18){
        console.log(escreverMeuNome('luiz') +' e sou Maior de Idade');
    }else{
        console.log(escreverMeuNome('allan') +' e sou Menor de idade');
    }
}

verificarIdade(19);
verificarIdade(8);
