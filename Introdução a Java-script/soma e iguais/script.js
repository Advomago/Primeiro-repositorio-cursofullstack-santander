function iguais(num1,num2){
    const frase1 = primeirafrase(num1, num2);
    const frase2 = segundafrase(num1, num2);

    return ''+frase1+' '+frase2+'';
}

function primeirafrase(num1, num2){
    const iguais = num1 == num2;
    let numero = '';
    if (!iguais){
        numero = 'não';
    }
    return 'Os números '+ num1 +' e '+ num2 +' '+numero+' iguais.';
}

function segundafrase(num1,num2){
    const soma = num1 +num2;
    let resultado10 = '';
    let resultado20 = '';
    if (soma > 10){
        resultado10 = 'maior';
    }else{
        resultado10 = 'menor';
    }

    if (soma>20){
        resultado20 = 'maior'
    }else{
        resultado20 = 'menor';
    }

    return 'Sua soma é '+soma+', que é '+resultado10+' que 10 e '+resultado20+' que 20.'
    
}

console.log(iguais(5, 10));