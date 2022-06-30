const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const successButton = document.getElementById("btn-success") 
const resetButton = document.getElementById("btn-reset");
const result = document.getElementById("dynamic__bmi");
const message = document.getElementById("bmi-text");








function calculateBMI(){
    let height, weight, bmi;
    height = Number(heightInput.value);
    weight = Number(weightInput.value);
    bmi = weight / (height * 0.0254 * height * 0.0254);
    result.textContent = bmi;
    

}

function reset(){

}

successButton.addEventListner('click',calculateBMI);
resetButton.addEventListener('click',reset);
