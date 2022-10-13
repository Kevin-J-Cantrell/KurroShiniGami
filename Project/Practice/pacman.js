

let World = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 0],
    [0, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 0],
    [0, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 0],
    [0, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 0],
    [0, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 0],
    [0, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 0],
    [0, 2, 2, 2, 3, 2, 2, 1, 3, 2, 2, 1, 3, 2, 0],
    [0, 2, 1, 2, 3, 2, 2, 2, 1, 2, 2, 2, 3, 2, 0],
    [0, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 0],
    [0, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 0],
    [0, 2, 3, 2, 3, 1, 2, 2, 3, 2, 2, 2, 3, 2, 0],
    [0, 2, 2, 2, 3, 1, 2, 2, 3, 2, 2, 2, 3, 2, 0],
    [0, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

function randomWorld() {
    for (let row = 2; row < World.length; row++) {
        for (let x = 2; x < World[row].length; x++) {
            if (World[row][x] == 2) {
                World[row][x] = Math.floor(Math.random() * 2) % 2 + 2;
            }
            if (World[row][x] == 2) {
                World[row][x] = Math.floor(Math.random() * 2) % 2 + 1;
            }
        }
    }
}
randomWorld()


let WorldData = {
    0: 'Wall',
    1: 'innerWall',
    2: 'sushi',
    3: 'onigiri',
    4: 'blank',

}
function drawWorld() {
    output = "";

    for (let row = 0; row < World.length; row++) {
        output += "<div class= 'row'>"
        for (let x = 0; x < World[row].length; x++) {
            output += "<div class='" + WorldData[World[row][x]] + "'></div>"
        }
        output += "</div>"

        document.getElementById("World").innerHTML = output;
    }
}
drawWorld();

let direction = 'right';
var result = 0
var Lives = 3
var player = {
    x: 1,
    y: 1,
}
var enemy = {
    x: 5,
    y: 13,
}
var enemy2 = {
    x: 9,
    y: 3,
}
var enemy3 = {
    x: 10,
    y: 10,
}


function drawPlayer() {
    document.getElementById("player").style.top = player.y * 60 + "px";
    document.getElementById("player").style.left = player.x * 60 + "px";
    document.getElementById("player").style.backgroundImage = "url('img/" + direction + ".gif')";
}
drawPlayer()



function movePlayer() {
    document.onkeydown = function (e) {


        if (e.keyCode == 37) {
            if (World[player.y][player.x - 1] != 0 && World[player.y][player.x - 1] != 1) {
                player.x--;
                direction = 'left';
            }
        }

        if (e.keyCode == 38) {
            if (World[player.y - 1][player.x] != 0 && World[player.y - 1][player.x] != 1) {
                player.y--;
                direction = 'up';
            }
        }

        if (e.keyCode == 39) {
            if (World[player.y][player.x + 1] != 0 && World[player.y][player.x + 1] != 1) {
                player.x++;
                direction = 'right';
            }
        }

        if (e.keyCode == 40) {
            if (World[player.y + 1][player.x] != 0 && World[player.y + 1][player.x] != 1) {
                player.y++;
                direction = 'down';
            }
        }
        drawPlayer();
        drawWorld();
        EatFood()
    }
}



function drawEnemy() {
    document.getElementById("enemy").style.top = enemy.y * 60 + "px";
    document.getElementById("enemy").style.left = enemy.x * 60 + "px";
    document.getElementById("enemy2").style.top = enemy2.y * 60 + "px";
    document.getElementById("enemy2").style.left = enemy2.x * 60 + "px";
    document.getElementById("enemy3").style.top = enemy3.y * 60 + "px";
    document.getElementById("enemy3").style.left = enemy3.x * 60 + "px";

}
drawEnemy()

function moveEnemy(min, max) {
    let playerY = player.y;
    let playerX = player.x;
    let enemyY = enemy.y;
    let enemyX = enemy.x;
    if (playerY > enemyY) {
        enemyY++
    } else if (playerY < enemyY) {
        enemyY--
    } else if (playerX > enemyX) {
        enemyX++
    } else if (playerX < enemyX) {
        enemyX--
    } else {
        enemyY = Math.floor(Math.random() * (max - min + 1)) + min;
        enemyX = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (World[enemyY][enemyX] == 2) {
        enemy.x = enemyX; enemy.y = enemyY; {
            drawWorld();
            drawEnemy();
        }
    }
    if (World[enemyY][enemyX] == 3) {
        enemy.x = enemyX; enemy.y = enemyY; {
            drawWorld();
            drawEnemy();
        }
    }
    if (World[enemyY][enemyX] == 4) {
        enemy.x = enemyX; enemy.y = enemyY; {
            drawWorld();
            drawEnemy();
        }
    }
    if (enemy.x == player.x && enemy.y == player.y) {
        Lives-= 1;
        life.textContent = Lives
        if (Lives < 0 ) {
            alert('Game Over')
            window.location.reload()
        }
    }
}
function moveEnemy2(min, max) {
    let playerY = player.y;
    let playerX = player.x;
    let enemy3Y = enemy2.y;
    let enemy3X = enemy2.x;
    if (playerY > enemy3Y) {
        enemy3Y++
    } else if (playerY < enemy3Y) {
        enemy3Y--
    } else if (playerX > enemy3X) {
        enemy3X++
    } else if (playerX < enemy3X) {
        enemy3X--
    } else {
        enemy3Y = Math.floor(Math.random() * (max - min + 1)) + min;
        enemy3X = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (World[enemy3Y][enemy3X] == 2) {
        enemy2.x = enemy3X; enemy2.y = enemy3Y; {
            drawWorld();
            drawEnemy();
        }
    }
    if (World[enemy3Y][enemy3X] == 3) {
        enemy2.x = enemy3X; enemy2.y = enemy3Y; {
            drawWorld();
            drawEnemy();
        }
    }
    if (World[enemy3Y][enemy3X] == 4) {
        enemy2.x = enemy3X; enemy2.y = enemy3Y; {
            drawWorld();
            drawEnemy();
        }
    }
    if (enemy2.x == player.x && enemy2.y == player.y) {
        Lives-= 1;
        life.textContent = Lives
        if (Lives < 0 ) {
            alert('Game Over')
            window.location.reload()
        }
    }
}
function moveEnemy3(min, max) {
    let playerY = player.y;
    let playerX = player.x;
    let enemy3Y = enemy3.y;
    let enemy3X = enemy3.x;
    if (playerY > enemy3Y) {
        enemy3Y++
    } else if (playerY < enemy3Y) {
        enemy3Y--
    } else if (playerX > enemy3X) {
        enemy3X++
    } else if (playerX < enemy3X) {
        enemy3X--
    } else {
        enemy3Y = Math.floor(Math.random() * (max - min + 1)) + min;
        enemy3X = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (World[enemy3Y][enemy3X] == 2) {
        enemy3.x = enemy3X; enemy3.y = enemy3Y; {
            drawWorld();
            drawEnemy();
        }
    }
    if (World[enemy3Y][enemy3X] == 3) {
        enemy3.x = enemy3X; enemy3.y = enemy3Y; {
            drawWorld();
            drawEnemy();
        }
    }
    if (World[enemy3Y][enemy3X] == 4) {
        enemy3.x = enemy3X; enemy3.y = enemy3Y; {
            drawWorld();
            drawEnemy();
        }
    }
    if (enemy3.x == player.x && enemy3.y == player.y) {
        Lives-= 1;
        life.textContent = Lives
        if (Lives < 0 ) {
            alert('Game Over')
            window.location.reload()
        }
    }
}











function EatFood() {
    if (World[player.y][player.x] === 2) { //sushi
        World[player.y][player.x] = 4;
        drawWorld();
        result += 4;
        score.textContent = result
        if (result == 350){
            alert('You Win')
            location.reload()
        }
    }
    if (World[player.y][player.x] === 3) { // onigiri
        World[player.y][player.x] = 4;
        drawWorld();
        result += 2;
        score.textContent = result
        if (result == 350){
            alert('You Win')
            location.reload()
        }
    }
}

function gameloop() {
    movePlayer();
    drawWorld();
    drawPlayer();
    drawEnemy();
    setTimeout(gameloop, 650);
    moveEnemy2(0, World.length - 1)
    moveEnemy3(0, World.length - 1)
    moveEnemy(0, World.length - 1)
}
gameloop()

