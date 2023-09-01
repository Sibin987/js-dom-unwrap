
// get value
const countValue = document.getElementById('counter');
console.log(countValue);

function decrement(){
    let value = countValue.innerText;
    let parsedValue = parseInt(value);
    parsedValue-=1;

    countValue.innerHTML = parsedValue;

}

const increment = () => {

    let value = countValue.innerText;
    let parsedValue = parseInt(value);

    parsedValue+=1;

    // display karne ke liye 
    // innerhtml yaa innertext ka bhi use kar sakhthe hai
    countValue.innerHTML = parsedValue;

}