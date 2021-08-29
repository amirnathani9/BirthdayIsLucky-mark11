const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#btn-check")
const outputBox = document.querySelector("#output-box");

function compareValue(sum, luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText= "Your Birthday Is Lucky😍"
    }
    else{
        outputBox.innerText= "Your Birthday Is Not Lucky😞"
    }
}


function birthDayIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(dob&&luckyNumber){
    compareValue(sum, luckyNumber.value)
    }
    else{
        outputBox.innerText="Input both the values"
    }

}

function calculateSum(dob){
    dob = dob.replaceAll("-","")
    let sum=0;

    for(let i=0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i))
    }
    return sum;
}



checkBtn.addEventListener("click",birthDayIsLucky);