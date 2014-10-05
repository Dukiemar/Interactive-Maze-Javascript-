window.onload = function() {
    $("boundary1").onmouseover = overBoundary;
};

function overBoundary() {
    $("boundary1").style.backgroundColor = "red";
    $("boundary1").addClassName("youlose");
}



window.onload = function() {
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.backgroundColor = "red";
    }
}

var loser = false;  

window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    loser = true;
    $("status").textContent="You Lose!,Try Again :("
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
}



function startClick() {
    loser = false;
    $("status").textContent="Find the end!"
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}

function overEnd() {
    if(loser) {
    	$("status").textContent="Sorry, you lost :("
    } else {
    	$("status").textContent="Congratulations, you win! :)"
    }
}