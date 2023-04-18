function calcular() {
    var at = document.querySelector('#cal')
    var pe = document.querySelector('#peso')
    var res = document.querySelector('.res')
    var txt = document.querySelector('.txt')
    var altura = Number(at.value)
    var peso = Number(pe.value)

    var calculo = altura * altura
    var final = peso / calculo

    res.innerHTML = `SEU IMC É DE: ${final.toFixed(2)}`
    
    if(altura== 0 || peso == 0) {
        res.innerHTML = `Algum valor não foi digitado!`
        txt.innerHTML = ""
    }else{
        if(final < 18.5){
            txt.innerHTML = ` Seu (IMC) é de ${final.toFixed(2)}, isso pode indicar que você está abaixo do peso. É importante lembrar que o IMC é apenas uma medida geral e não leva em conta a composição corporal, por exemplo, músculos e gordura. No entanto, estar abaixo do peso pode levar a problemas de saúde, incluindo fraqueza muscular, falta de energia e um sistema imunológico enfraquecido. É recomendável conversar com um profissional de saúde para avaliar sua saúde geral e discutir as melhores opções para ganhar peso e melhorar sua saúde. Isso pode incluir uma dieta equilibrada e a prática de exercícios físicos adequados.`        
        }else if(final < 25) {
          txt.innerHTML = ` Seu (IMC) é de ${final.toFixed(2)}, isso indica que você está dentro da faixa considerada saudável para a maioria das pessoas. No entanto, é importante lembrar que o IMC é apenas uma medida geral e não leva em conta a composição corporal individual, como a quantidade de músculo e gordura. Portanto, é essencial avaliar outros fatores de saúde, como a alimentação equilibrada, a prática regular de exercícios físicos e o controle do estresse. Além disso, é recomendável manter visitas regulares ao médico para avaliar sua saúde geral e discutir opções para melhorar a qualidade de vida. `
        }else if(final < 30) {
            txt.innerHTML = ` Seu (IMC) é de ${final.toFixed(2)}, isso pode indicar que você está com sobrepeso. É importante lembrar que o IMC é apenas uma medida geral e não leva em conta a composição corporal individual, como a quantidade de músculo e gordura. No entanto, estar com sobrepeso pode levar a problemas de saúde, como pressão alta, diabetes tipo 2 e problemas cardíacos. É recomendável conversar com um profissional de saúde para avaliar sua saúde geral e discutir opções para melhorar sua alimentação e aumentar a atividade física. ` 
        }else if(final < 35) {
            txt.innerHTML = ` Seu (IMC) é de ${final.toFixed(2)}, isso pode indicar que você está com obesidade grau 1. É importante lembrar que o IMC é apenas uma medida geral e não leva em conta a composição corporal individual, como a quantidade de músculo e gordura. No entanto, estar com obesidade pode levar a problemas de saúde, como pressão alta, diabetes tipo 2, doenças cardiovasculares, entre outros. É recomendável conversar com um profissional de saúde para avaliar sua saúde geral e discutir opções para melhorar sua alimentação e aumentar a atividade física.`
        }else if(final < 40) {
            txt.innerHTML = ` Seu (IMC) é de ${final.toFixed(2)}, isso pode indicar que você está com obesidade grau 2. É importante lembrar que o IMC é apenas uma medida geral e não leva em conta a composição corporal individual, como a quantidade de músculo e gordura. No entanto, estar com obesidade pode levar a problemas de saúde mais graves, como doenças cardíacas, diabetes tipo 2, apneia do sono, entre outros. É recomendável conversar com um profissional de saúde para avaliar sua saúde geral e discutir opções para melhorar sua alimentação e aumentar a atividade física. `
        }else {
            txt.innerHTML = ` Seu (IMC) é de ${final.toFixed(2)}, isso pode indicar que você está com obesidade grau 3, ou obesidade mórbida. É importante lembrar que o IMC é apenas uma medida geral e não leva em conta a composição corporal individual, como a quantidade de músculo e gordura. A obesidade mórbida pode levar a problemas graves de saúde, como doenças cardíacas, diabetes tipo 2, problemas respiratórios, entre outros. É extremamente recomendável conversar com um profissional de saúde o mais rápido possível para avaliar sua saúde geral e discutir opções para uma perda de peso segura e eficaz. `
        }
    }
}