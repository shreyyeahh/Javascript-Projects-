const textbox = document.getElementById("text-box");
const tofahrenheit = document.getElementById("fahrenheit-to-celsius");
const tocelsius = document.getElementById("Celsius-to-Fahrenheit");
const result = document.getElementById("result");
let temp;
function convert(){
    if(tofahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp + "F";

    }
    else if(tocelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9); 
        result.textContent = temp + "C";

    }
    else{
        result.textContent ="Select a Unit"

    }
}