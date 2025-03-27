let imc = document.querySelector(".imc");
let classification = document.querySelector(".classification");

let imcValue;

let calculate = document.getElementById("calculate")
.addEventListener("click", CalculateIMC => {
    let heightInput = document.getElementById("heightInput").value;

    let weightInput = document.getElementById("weightInput").value;

    imcValue = weightInput / Math.pow(heightInput, 2);

    parseFloat(imcValue);

    if(imcValue == isNaN)
    {
        alert("Altura ou peso inválidos");
    }
    else
    {
        imc.innerHTML = "IMC: " + imcValue;
        CompareClasses();
    }
});

function CompareClasses()
{
    if(imcValue < 18.5)
    {
        classification.innerHTML = "Classificação: Baixo Peso";
    }
    else if(imcValue >= 18.5 && imcValue < 24.9)
    {
        classification.innerHTML = "Classificação: Peso Normal";
    }
    else if(imcValue >= 25 && imcValue < 29.9)
    {
        classification.innerHTML = "Classificação: Excesso de Peso";
    }
    else if(imcValue >= 30 && imcValue < 34.9)
    {
        classification.innerHTML = "Classificação: Obesidade Classe I";
    }
    else if(imcValue >= 35 && imcValue < 39.9)
    {
        classification.innerHTML = "Classificação: Obesidade Classe II";
    }
    else if(imcValue >= 40)
    {
        classification.innerHTML = "Classificação: Obesidade Mórbida";
    }
}