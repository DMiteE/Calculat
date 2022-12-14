
let countLs = 1;
let price = 10;
let result,
    resultYear,
    resultHalf;

function calc() {
    if(countLs > 100){
        countLs = Math.round(countLs / 100) * 100;
    }
    if (countLs <= 2500) {
        result = countLs * price;
        resultPrice();
    } else if (countLs > 2500) {
        if (countLs <= 5000) {
            let temp = countLs - 2500;
            result = (temp * 8) + (2500 * 10);
            resultPrice();
        } else if (countLs > 5000 && countLs <= 10000) {

            let temp = countLs - 5000;
            result = (temp * 5) + (2500 * 10) + (2500 * 8);
            resultPrice();

        } else if (countLs > 10000 && countLs <= 20000) {
            let temp = countLs - 10000;
            result = (temp * 3) + (2500 * 10) + (2500 * 8) + (5000 * 5);
            resultPrice();
        } else if (countLs > 20000 && countLs <= 50000) {
            let temp = countLs - 20000;
            result = (temp * 2) + (2500 * 10) + (2500 * 8) + (5000 * 5) + (10000 * 3);
            resultPrice();
        } else if (countLs > 50000) {
            let temp = countLs - 50000;
            result = (temp * 0.5) + (2500 * 10) + (2500 * 8) + (5000 * 5) + (10000 * 3) + (30000 * 2);
            resultPrice();
        }
    }
    document.querySelector('.out').innerHTML =  '<p>' +  resultHalf + '</p>';
    document.querySelector('.out2').innerHTML = '<p>' + resultYear + '</p>';
}
document.getElementById('count').oninput = function () {
    document.querySelector('.out').innerHTML += "0";
    countLs = this.value;
    
    calc();
  
};
function resultPrice() {
    
    resultYear = Math.round((result + 4000) * 0.8);
    resultHalf = Math.round(resultYear * 0.6);
   
}

