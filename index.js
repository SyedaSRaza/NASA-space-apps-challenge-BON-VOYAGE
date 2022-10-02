// let username = window.prompt("Enter you name: ");
// document.getElementById("name").innerHTML = "Space Explorer Name: " + username;

// setting the name of the user
// let username = window.prompt("Enter you name: ");
// document.getElementById("name").innerHTML = "Space Explorer Name: " + username;

//rolling the dice
rollDice = () =>{
    const diceNum = Math.floor(Math.random() * 6) + 1;
    console.log(diceNum);
    const diceChange = `dice/dice${diceNum}.jpeg`; 
    // const diceChange = "dice/dice"+diceNum+".jpeg"
    document.getElementById("dice").setAttribute('src',diceChange);
    // document.querySelectorAll("img")[0].setAttribute('src',diceChange);
}