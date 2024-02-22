function tip(){
    let ammount = document.getElementById("usd").value;
    let ammount2 = document.getElementById("usd2").value;
    let total = ammount * (ammount2/100);
    let ammountTotal = Number(total) + Number(ammount);
    document.querySelector("#result").innerHTML = "$ " + total.toFixed(2);
    document.querySelector("#result2").innerHTML = "$ " + ammountTotal.toFixed(2); 
}


function reset(){
    location.reload()
}