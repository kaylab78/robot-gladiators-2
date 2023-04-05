const playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

// console.log(playerName, playerAttack, playerHealth);

const enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

function fight(enemyName) {
    // Repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0) {
        // Alert players that they are starting the round
        // window.alert("Welcome to Robot Gladiators!");

        let promptFight = window.prompt("Would you like FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    
        // If player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;
    
            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
            // Check enemy's health.
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
        
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;
        
            // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
            // Check player's health.
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }    
        // If player chooses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            // Confirm player wants to skip
            const confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
            // If yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");
    
                // Subtract money from playerMoney for skipping
                playerMoney = playerMoney - 2; 
            } else {
                fight();
            }
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    let pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}