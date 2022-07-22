console.log("hi");
let btn = document.getElementById('btn').addEventListener('click', () =>{
    let number = Math.floor(Math.random() * (6 - 1+1) ) + 1;
    document.getElementById('h11').innerHTML = `${number}`;
    let dice = document.getElementById('dice');
    dice.classList.toggle('clicked');
})
