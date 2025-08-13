function rollDice(){
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
    // dice emojis from 1-6
    const diceFaces = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685', '\u2686'];
    // add animation class temperarily
    dice1.style.animation = 'shake 0.5s';
    dice2.style.animation = 'shake 0.5s';
    // remove animation after it completes
    setTimeout(()=>{
        dice1.style.animation = 'none';
        dice2.style.animation = 'none';
        // generate random numbers and update dice faces
        const roll1 = Math.floor(Math.random()*6);
        const roll2 = Math.floor(Math.random()*6);

        dice1.textContent = diceFaces[roll1];
        dice2.textContent = diceFaces[roll2];
    },500);
}