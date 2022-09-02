`strict`;

let peso;
let altura;
let imc;
let resultadoIMC;
let pesoDigitado;
let alturaDigitado;



function calcular(event) {
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    resultadoIMC = document.getElementById('resultadoIMC');
    pesoDigitado = document.getElementById('pesoDigitado');
    alturaDigitado = document.getElementById('alturaDigitado');

    pesoDigitado.value = peso;
    alturaDigitado.value = altura;

   imc = peso / (altura * altura);
   
    if (peso === '' || altura === '') {
        
        Toastify({
            text: "Campos Não Podem ser Vazios",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #00b09b, #0F0C29)",
              fontWeight: "700"
            },
            onClick: function(){} // Callback after click
          }).showToast();

          resultadoIMC.value = '';

          return false;
        
    }
    
    else if(imc < 17) {
        resultadoIMC.value = `Você Está Muito Abaixo do Peso | Seu IMC é ${imc.toFixed(2)}`
    }

    else if(imc > 17 && imc <= 18.49) {
        resultadoIMC.value = `Você Está Abaixo do Peso | Seu IMC é ${imc.toFixed(2)}`
    }

    else if(imc > 18.50 && imc <= 24.99) {
        resultadoIMC.value = `Você Está no Peso Normal | Seu IMC é ${imc.toFixed(2)}`
    }

    else if(imc > 25 && imc <= 29.99) {
        resultadoIMC.value = `Você Está Acima do Peso | Seu IMC é ${imc.toFixed(2)}`
    }

    else if(imc > 30) {
        resultadoIMC.value = `Cuidado Obesidade Atingida | Seu IMC é ${imc.toFixed(2)}`
    }

    peso = document.getElementById('peso').value = '';
    altura = document.getElementById('altura').value = '';
    
}   