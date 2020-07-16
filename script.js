let content = document.getElementById("content");
let button = document.getElementById("button");

let reset = document.getElementById("reset");
let blue = document.getElementById("blue");
let orange = document.getElementById("orange");
let red = document.getElementById("red");
let green = document.getElementById("green");


button.addEventListener("click", function () {

    if (content.className == 'open') {
        content.classList.remove('open');
    }
    else {
        content.classList.add('open')
    }
});

reset.addEventListener("click", function () {

    if (body.className != 'grey') {

        body.classList.remove('orange', 'blue', 'red', 'green', 'grey');

        body.classList.add('grey');
    }
})

blue.addEventListener("click", function () {

    if (body.className != 'blue') {

        body.classList.remove('orange', 'blue', 'red', 'green', 'grey');

        body.classList.add('blue');
    }
})

orange.addEventListener("click", function () {

    if (body.className != 'orange') {

        body.classList.remove('orange', 'blue', 'red', 'green', 'grey');

        body.classList.add('orange');
    }
})

red.addEventListener("click", function () {

    if (body.className != 'red') {

        body.classList.remove('orange', 'blue', 'red', 'green', 'grey');

        body.classList.add('red');
    }
})

green.addEventListener("click", function () {

    if (body.className != 'green') {

        body.classList.remove('orange', 'blue', 'red', 'green', 'grey');

        body.classList.add('green');
    }
})

