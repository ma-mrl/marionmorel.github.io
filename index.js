function hideHTML() {
    document.getElementById("html-arrow").setAttribute('class', 'fa-solid fa-angle-down');
    document.getElementById("html-arrow").setAttribute('onclick', "showHTML()");
    document.getElementById("html").style.display = 'none'; 
}

function showHTML() {
    document.getElementById("html-arrow").setAttribute('class', 'fa-solid fa-angle-up');
    document.getElementById("html-arrow").setAttribute('onclick', "hideHTML()");
    document.getElementById('html').style.display = ''; 
}

function hideReact() {
    document.getElementById("react-arrow").setAttribute('class', 'fa-solid fa-angle-down');
    document.getElementById("react-arrow").setAttribute('onclick', "showReact()");
    document.getElementById("react").style.display = 'none'; 
}

function showReact() {
    document.getElementById("react-arrow").setAttribute('class', 'fa-solid fa-angle-up');
    document.getElementById("react-arrow").setAttribute('onclick', "hideReact()");
    document.getElementById('react').style.display = ''; 
}

function hideP5() {
    document.getElementById("p5-arrow").setAttribute('class', 'fa-solid fa-angle-down');
    document.getElementById("p5-arrow").setAttribute('onclick', "showP5()");
    document.getElementById("p5").style.display = 'none'; 
}

function showP5() {
    document.getElementById("p5-arrow").setAttribute('class', 'fa-solid fa-angle-up');
    document.getElementById("p5-arrow").setAttribute('onclick', "hideP5()");
    document.getElementById('p5').style.display = ''; 
}

function hidePhaser() {
    document.getElementById("phaser-arrow").setAttribute('class', 'fa-solid fa-angle-down');
    document.getElementById("phaser-arrow").setAttribute('onclick', "showPhaser()");
    document.getElementById("phaser").style.display = 'none'; 
}

function showPhaser() {
    document.getElementById("phaser-arrow").setAttribute('class', 'fa-solid fa-angle-up');
    document.getElementById("phaser-arrow").setAttribute('onclick', "hidePhaser()");
    document.getElementById('phaser').style.display = ''; 
}