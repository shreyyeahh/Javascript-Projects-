const inputText = document.getElementById("input-text");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");
let age;


submitBtn.onclick = function(){
    age = inputText.value;
    age = Number(age);
    if(age>100){
        result.textContent = "you are too old to enter this site";
    }
    else if(age>=18){
        result.textContent = "you can enter this site";
    }
    else if (age==0){
        result.textContent = "you can't enter , you are just born";
    }
    else if (age<18){
        result.textContent = "you can't enter this site";
    }
    else{
        result.textContent = "you can't be below 0";
    }

}