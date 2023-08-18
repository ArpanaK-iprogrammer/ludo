let images = [
    "./roll/dice_1.png",
    "./roll/dice_2.png",
    "./roll/dice_3.png",
    "./roll/dice_4.png",
    "./roll/dice_5.png", 
    "./roll/dice_6.png"
]

let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let randomNum = Math.floor(Math.random()*6);
        console.log(randomNum);
        document.querySelector("#die").setAttribute("src", images[randomNum]);
    },
    1000
    );
}


roll();

// function insertElements(){

//     let arr = [12,2,5,17,4];

//     arr.splice(2,0,3);

//     console.log(arr);
// }

// insertElements();