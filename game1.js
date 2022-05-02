// create global variables
let lives;
let points;
let gameDuration;
let timeLeft = 5;


window.addEventListener("load", start);
//window.addEventListener("load", startTimer);


function start (){
    console.log(`start`);
    lives = 3;
    points = 0;
    gameDuration =61;
    document.querySelector("#current_score").textContent = points;
    document.querySelector("#current_lives").textContent = lives;
    showTitle ();
}




function showTitle () {
    console.log('showTitle');
    //Show title screen
    hideAllScreens();
    document.querySelector("#title_screen").classList.remove("hidden");
    //Stop music
    //Sound control button
    //Play sound
    // user clicks start button
    document.querySelector("#play_game").addEventListener("click", startGame);
   
 //   startGame();
    //user clicks instruction button
    document.querySelector("#instructions_button").addEventListener("click", showInstructions);

}

let closebtn = document.querySelector("#close_button");

function showInstructions (){
    console.log(`showInstructions`);
   // debugger

    //Show instruction screen
    hideAllScreens();
    document.querySelector("#instructions_screen").classList.remove("hidden");
    //Show start button
    //Show close button
    //Play sound
      // user clicks start button

    //user clicks close button
    document.querySelector("#close_button").addEventListener("click", showTitle);
  
}


function startGame () {
    console.log(`startGame`);
    //Show game screen
    hideAllScreens();
   //  document.querySelector("#title_screen").classList.add("hidden");
   // document.querySelector("if_yes").classList.add("hidden");
    //good elements start falling
    document.querySelector("#carrot1_container").classList.add("falling1", "pos1");
    document.querySelector("#chips1_container").classList.add("falling2", "pos1");
    document.querySelector("#eggplant1_container").classList.add("falling3", "pos3");
    document.querySelector("#bread1_container").classList.add("falling1", "pos1");
    //bad elements start falling
  document.querySelector("#pincho1_container").classList.add("falling2", "pos2");
  document.querySelector("#beef1_container").classList.add("falling2", "pos2");
  document.querySelector("#cheese1_container").classList.add("falling2", "pos2"); 
    //start timer
   startTimer ();

    //user clicks carrot
    document.querySelector("#carrot1_container").addEventListener("click", carrotHit);
    //carrot completes iteration
    document.querySelector("#carrot1_container").addEventListener("animationiteration", restartCarrot);

    //user clicks pincho
   document.querySelector("#pincho1_container").addEventListener("click", pinchoHit);
    //pincho completes iteration
   document.querySelector("#pincho1_container").addEventListener("animationiteration", restartPincho);


   document.querySelector("#chips1_container").addEventListener("click", chipsHit);
   document.querySelector("#chips1_container").addEventListener("animationiteration", restartChips);
   document.querySelector("#eggplant1_container").addEventListener("click", eggplantHit);
   document.querySelector("#eggplant1_container").addEventListener("animationiteration", restartEggplant);
   document.querySelector("#bread1_container").addEventListener("click", breadHit);
   document.querySelector("#bread1_container").addEventListener("animationiteration", restartBread);

   document.querySelector("#beef1_container").addEventListener("click", beefHit);
   document.querySelector("#beef1_container").addEventListener("animationiteration", restartBeef);
   document.querySelector("#cheese1_container").addEventListener("click", cheeseHit);
   document.querySelector("#cheese1_container").addEventListener("animationiteration", restartCheese);
  
}

//EventListeners


function carrotHit() {
    console.log(`carrotHit`);
    //stop falling
    document.querySelector("#carrot1_container").classList.add("stop");
   // document.querySelector("if_yes").classList.remove("hidden");
    //rotate carrotHit
    document.querySelector("#carrot1_sprite").classList.add("rotate");
    //1 point
    points = points + 1;
    console.log(`Points: ${points}`);
    document.querySelector("#current_score").textContent = points;
    if (points > 20) {
        if (points % 5 === 0) {
            document.querySelector("#wauw").classList.remove("hidden");
        } else {
            document.querySelector("#wauw").classList.add("hidden");
        }
    }
    //restart carrot when rotation completes
    document.querySelector("#carrot1_sprite").addEventListener("animationend", restartCarrot);
}


function restartCarrot() {
    console.log(`restartCarrot`);
    document.querySelector("#carrot1_container").classList.value="";
    document.querySelector("#carrot1_sprite").classList.value="";
    document.querySelector("#carrot1_sprite").removeEventListener("animationend", restartCarrot);
    document.querySelector("#carrot1_container").offsetHeight;
    let randomFalling = generateRandomNumber (3);
    let randomPosition = generateRandomNumber(4);
    document.querySelector("#carrot1_container").classList.add("falling" + randomFalling, "pos"+randomPosition);
}



function eggplantHit() {
    console.log(`eggplantHit`);
    //stop falling
    document.querySelector("#eggplant1_container").classList.add("stop");
    //rotate 
    document.querySelector("#eggplant1_sprite").classList.add("rotate");
    //1 point
    points = points + 1;
    console.log(`Points: ${points}`);
    document.querySelector("#current_score").textContent = points;
    if (points > 20) {
        if (points % 5 === 0) {
            document.querySelector("#wauw").classList.remove("hidden");
        } else {
            document.querySelector("#wauw").classList.add("hidden");
        }
    }
    //restart
    document.querySelector("#eggplant1_sprite").addEventListener("animationend", restartEggplant);
}


function restartEggplant() {
    console.log(`restartEggplant`);
    document.querySelector("#eggplant1_container").classList.value="";
    document.querySelector("#eggplant1_sprite").classList.value="";
    document.querySelector("#eggplant1_sprite").removeEventListener("animationend", restartEggplant);
    document.querySelector("#eggplant1_container").offsetHeight;
    let randomFalling = generateRandomNumber (3);
    let randomPosition = generateRandomNumber(4);
    document.querySelector("#eggplant1_container").classList.add("falling" + randomFalling, "pos"+randomPosition);
}




function chipsHit() {
    console.log(`chipsHit`);
    //stop falling
    document.querySelector("#chips1_container").classList.add("stop");
    //rotate 
    document.querySelector("#chips1_sprite").classList.add("rotate");
    //1 point
    points = points + 1;
    console.log(`Points: ${points}`);
    document.querySelector("#current_score").textContent = points;
    if (points > 20) {
        if (points % 5 === 0) {
            document.querySelector("#wauw").classList.remove("hidden");
        } else {
            document.querySelector("#wauw").classList.add("hidden");
        }
    }
    //restart 
    document.querySelector("#chips1_sprite").addEventListener("animationend", restartChips);
}


function restartChips() {
    console.log(`restartChips`);
    document.querySelector("#chips1_container").classList.value="";
    document.querySelector("#chips1_sprite").classList.value="";
    document.querySelector("#chips1_sprite").removeEventListener("animationend", restartChips);
    document.querySelector("#chips1_container").offsetHeight;
    let randomFalling = generateRandomNumber (3);
    let randomPosition = generateRandomNumber(4);
    document.querySelector("#chips1_container").classList.add("falling" + randomFalling, "pos"+randomPosition);
}


function breadHit() {
    console.log(`breadHit`);
    //stop falling
    document.querySelector("#bread1_container").classList.add("stop");
    //rotate 
    document.querySelector("#bread1_sprite").classList.add("rotate");
    //1 point
    points = points + 1;
    console.log(`Points: ${points}`);
    document.querySelector("#current_score").textContent = points;
    if (points > 20) {
        if (points % 5 === 0) {
            document.querySelector("#wauw").classList.remove("hidden");
        } else {
            document.querySelector("#wauw").classList.add("hidden");
        }
    }
    //restart
    document.querySelector("#bread1_sprite").addEventListener("animationend", restartBread);
}


function restartBread() {
    console.log(`restartBread`);
    document.querySelector("#bread1_container").classList.value="";
    document.querySelector("#bread1_sprite").classList.value="";
    document.querySelector("#bread1_sprite").removeEventListener("animationend", restartBread);
    document.querySelector("#bread1_container").offsetHeight;
    let randomFalling = generateRandomNumber (3);
    let randomPosition = generateRandomNumber(4);
    document.querySelector("#bread1_container").classList.add("falling" + randomFalling, "pos"+randomPosition);
}


//BAD ELEMENTS FROM HERE


function beefHit() {
    console.log(`beefHit`);
    //stop falling
    document.querySelector("#beef1_container").classList.add("stop");
    //rotate carrotHit
    document.querySelector("#beef1_sprite").classList.add("rotate");
   //rest one life
   if (lives === 3){
    document.querySelector("#cherry1").classList.add("hidden");

 }
 if (lives === 2){
    document.querySelector("#cherry2").classList.add("hidden");

 }
 if (lives === 1){
    document.querySelector("#cherry3").classList.add("hidden");

 }
   lives = lives - 1;
   console.log(`Lives: ${lives}`);

    if (lives < 1) {
        gameOver ();   
    }
    //restart carrot when rotation completes
    document.querySelector("#beef1_sprite").addEventListener("animationend", restartBeef);
}


function restartBeef() {
    console.log(`restartBeef`);
    document.querySelector("#beef1_container").classList.value="";
    document.querySelector("#beef1_sprite").classList.value="";
    document.querySelector("#beef1_sprite").removeEventListener("animationend", restartBeef);
    document.querySelector("#beef1_container").offsetHeight;
    let randomFalling = generateRandomNumber (3);
    let randomPosition = generateRandomNumber(3);
    document.querySelector("#beef1_container").classList.add("falling" + randomFalling, "pos"+randomPosition);
}


function cheeseHit() {
    console.log(`cheeseHit`);
    //stop falling
    document.querySelector("#cheese1_container").classList.add("stop");
    //rotate carrotHit
    document.querySelector("#cheese1_sprite").classList.add("rotate");
   //rest one life
   if (lives === 3){
    document.querySelector("#cherry1").classList.add("hidden");

 }
 if (lives === 2){
    document.querySelector("#cherry2").classList.add("hidden");

 }
 if (lives === 1){
    document.querySelector("#cherry3").classList.add("hidden");

 }
   lives = lives - 1;
   console.log(`Lives: ${lives}`);

    if (lives < 1) {
        gameOver ();   
    }
    //restart carrot when rotation completes
    document.querySelector("#cheese1_sprite").addEventListener("animationend", restartCheese);
}


function restartCheese() {
    console.log(`restartCheese`);
    document.querySelector("#cheese1_container").classList.value="";
    document.querySelector("#cheese1_sprite").classList.value="";
    document.querySelector("#cheese1_sprite").removeEventListener("animationend", restartCheese);
    document.querySelector("#cheese1_container").offsetHeight;
    let randomFalling = generateRandomNumber (3);
    let randomPosition = generateRandomNumber(4);
    document.querySelector("#cheese1_container").classList.add("falling" + randomFalling, "pos"+randomPosition);
}


function pinchoHit() {
    console.log(`pinchoHit`);
    //stop falling
    document.querySelector("#pincho1_container").classList.add("stop");
    //rotate pinchoHit
    document.querySelector("#pincho1_sprite").classList.add("rotate");
    //rest one life
    
    if (lives === 3){
        document.querySelector("#cherry1").classList.add("hidden");

     }
     if (lives === 2){
        document.querySelector("#cherry2").classList.add("hidden");

     }
     if (lives === 1){
        document.querySelector("#cherry3").classList.add("hidden");

     }
    lives = lives - 1;
    console.log(`Lives: ${lives}`);
   
     if (lives < 1) {
         gameOver ();   
     }


    //restart pincho when rotation completes
    document.querySelector("#pincho1_sprite").addEventListener("animationend", restartPincho);
}


function restartPincho() {
    console.log(`restartPincho`);
    document.querySelector("#pincho1_container").classList.value="";
    document.querySelector("#pincho1_sprite").classList.value="";
    document.querySelector("#pincho1_sprite").removeEventListener("animationend", restartPincho);
    document.querySelector("#pincho1_container").offsetHeight;
    let randomFalling = generateRandomNumber (3);
    let randomPosition = generateRandomNumber(4 );
    document.querySelector("#pincho1_container").classList.add("falling" + randomFalling, "pos"+ randomPosition);
}




function generateRandomNumber(num) {
    return Math.floor(Math.random() * num) +1;
}



function startTimer() {
    console.log("startTimer");

    document.querySelector("#time_sprite").classList.value = "glas" + timeLeft;
    // Calls the function changeImage() every 3rd second
    setTimeout(changeImage, 10000);
}

function changeImage() {
    console.log("changeImage");
    timeLeft--;

    // If there is still time, set image to the one that matches and call the startTimer function. 
    if (timeLeft > 1) {
        console.log("timeLeft: " + timeLeft);
        document.querySelector("#time_sprite").classList.value = "glas" + timeLeft;
        startTimer();
    } else {
        console.log("timeLeft: " + timeLeft);
        document.querySelector("#time_sprite").classList.value = "glas" + timeLeft;
        gameOver();
    }
}

function gameOver() {
    console.log("gameOver");
    document.querySelector("#carrot1_container").classList.value="";
    document.querySelector("#chips1_container").classList.value="";
    document.querySelector("#eggplant1_container").classList.value="";
    document.querySelector("#bread1_container").classList.value="";
    document.querySelector("#pincho1_container").classList.value="";
    document.querySelector("#beef1_container").classList.value="";
    document.querySelector("#cheese1_container").classList.value="";

    document.querySelector("#carrot1_container").removeEventListener("click", carrotHit);
    document.querySelector("#chips1_container").removeEventListener("click", chipsHit);
    document.querySelector("#eggplant1_container").removeEventListener("click", eggplantHit);
    document.querySelector("#bread1_container").removeEventListener("click", breadHit);
    document.querySelector("#pincho1_container").removeEventListener("click", pinchoHit);
    document.querySelector("#beef1_container").removeEventListener("click", beefHit);
    document.querySelector("#cheese1_container").removeEventListener("click", cheeseHit);

    document.querySelector("#carrot1_container").removeEventListener("animationiteration", restartCarrot);
    document.querySelector("#chips1_container").removeEventListener("animationiteration", restartChips);
    document.querySelector("#eggplant1_container").removeEventListener("animationiteration", restartEggplant);
    document.querySelector("#bread1_container").removeEventListener("animationiteration", restartBread);
    document.querySelector("#pincho1_container").removeEventListener("animationiteration", restartPincho);
    document.querySelector("#beef1_container").removeEventListener("animationiteration", restartBeef);
    document.querySelector("#cheese1_container").removeEventListener("animationiteration", restartCheese);

        // win or lose
        if(points > 9 && lives > 0) {
            winning();
        } else {
            losing();
        }

}

function winning() {
    console.log(`winning`);
    document.querySelector("#win_screen").classList.remove("hidden");
    document.querySelector("#play_again").addEventListener("click", start);
}

function losing() {
    console.log(`losing`);
    document.querySelector("#lose_screen").classList.remove("hidden");
    document.querySelector("#lose_play").addEventListener("click", start);
}


function hideAllScreens() {
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#instructions_screen").classList.add("hidden");
    document.querySelector("#win_screen").classList.add("hidden");
    document.querySelector("#lose_screen").classList.add("hidden");
}
