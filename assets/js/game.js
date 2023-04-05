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
    while (playerHealth > 0 && enemyHealth > 0) {
        // Alert players that they are starting the round
        // window.alert("Welcome to Robot Gladiators!");

        let promptFight = window.prompt("Would you like FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

        // If player choose to skip
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
            // Confirm player wants to skip
            const confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");

                // Subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        // Check enemy's health.
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // Award player money for winning
            playerMoney = playerMoney + 20;
            break;
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
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        /*
        // If player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
        */
    }
};

// Function to end entire game
function endGame() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("The game has now ended. Let's see how you did!");
    }

    const playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

function startGame() {
    // Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welome to Robot Gladiators! Round " + (i + 1));
            let pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        } else {
            window.alert("You have lost your robot in battle! Game over!");
            break;
        }
    }

    endGame();
};

startGame();