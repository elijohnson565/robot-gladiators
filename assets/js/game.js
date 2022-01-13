var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var gameover = false;
var round = 1;
var fight = function(opponent) {

    window.alert("Welcome to Robot Gladiators! Round " + round);

    fightOrNoFight = window.prompt("Would you like to fight or skip? If you skip you lose 10 money points");

    switch(fightOrNoFight){
        case "fight":
            enemyHealth -= playerAttack;
            window.alert("you have attacked and brought " + opponent + "'s health down to " + enemyHealth + " health points");
            playerHealth -= enemyAttack;
            window.alert(opponent + " has attacked and brought your health down to " + playerHealth + " health points");
            break;
        case "skip":
            var confirmSkip = window.confirm("Are you sure you'd like to skip?")
            if(confirmSkip){
                window.alert("You have skipped! You have lost 10 money points. You have " + playerMoney + " money points left")
                playerMoney -= 10;
                break;
            }else{
                fight();
                break;
            }
        default:
            window.alert("GAME OVER!");
            break;
    }

};

while(!gameover){
    if(playerHealth > 0 && enemyHealth > 0){
        for(i = 0; i < enemyNames.length; i++){
            debugger;
            fight(enemyNames[i]);
            round++;
        }
    } else if (enemyHealth <= 0){
        window.alert("The enemy robot has been destroyed!");
        round = 1;
        gameover = true;
    } else{
        window.alert("You have been destroyed!");
        round = 1;
        gameover = true;
    }
}
