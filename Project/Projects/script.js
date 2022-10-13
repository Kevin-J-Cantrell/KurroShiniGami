var world = [
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1,],
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1,],
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1,],
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1,],
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],
    [2, 1, 2, 1, 2, 1, 2, 1, 2, 1,],
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2,],

]

var worlddict = {
    1:'black',
    2:'white',
}


function drawWorld() {
    output = "";

    for (let row = 0; row < world.length; row++) {
        output += "<div class= 'row'>"
        for (let x = 0; x < world[row].length; x++) {
            output += "<div class='" + worlddict[world[row][x]] + "'></div>"
        }
        output += "</div>"

        document.getElementById("World").innerHTML = output;
    }
}
drawWorld()