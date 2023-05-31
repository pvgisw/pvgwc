
price = 0;

const p1 = document.getElementById("a1");
const p2 = document.getElementById("a2");
const p3 = document.getElementById("a3");

var count = document.querySelector("#total");
count.innerHTML = price;

function clik1()
{
    price += parseInt(p1.innerText);
    console.log(price)
    count.innerHTML = price;
}

function clik2()
{
    price += parseInt(p2.innerText);
    console.log(price)
    count.innerHTML = price
}

function clik3()
{
    price += parseInt(p3.innerText);
    console.log(price)
    count.innerHTML = price;
}