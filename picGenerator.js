var accent1 = "";
var accent2 = "";

function changePantsColor(color) {
    var array = document.getElementsByClassName("accent1");
    for (var i = 0; i < array.length; ++i) {
        document.getElementsByClassName("accent1")[i].style.fill = color;
    }
    accent1 = color;

}

function changeShirtColor(color) {
    var array = document.getElementsByClassName("accent2");
    for (var i = 0; i < array.length; ++i) {
        document.getElementsByClassName("accent2")[i].style.fill = color;
    }
    accent2 = color
}

function saveColors() {
    sessionStorage.setItem("accent1Color", accent1);
    sessionStorage.setItem("accent2Color", accent2);
    sessionStorage.setItem("userName", document.getElementById("userName").value);
}

function changeAvatar(link) {
    if (link == "avatar1") {
        console.log("here");
        document.getElementById("avatar1").style.display = "block";
        document.getElementById("avatar2").style.display = "none";
    } else {
        document.getElementById("avatar2").style.display = "block";
        document.getElementById("avatar1").style.display = "none";
    }
}

function start() {

    document.getElementById("avatar2").style.display = "none";
    console.log(document.getElementsByClassName);
    var toChange = document.getElementsByClassName("accent1");
    if (localStorage.getItem("accent1Color") != null) {
        for (var i = 0; i < toChange.length; ++i) {
            document.getElementsByClassName("accent1")[i].style.fill = sessionStorage.getItem("accent1Color");
        }
        accent1 = sessionStorage.getItem("accent1Color");
    } else {
        for (var i = 0; i < toChange.length; ++i) {
            document.getElementsByClassName("accent1")[i].style.fill = "black";
        }
        accent1 = "black";
    }

    var toChange2 = document.getElementsByClassName("accent2");
    if (localStorage.getItem("accent2Color") != null) {
        for (var i = 0; i < toChange2.length; ++i) {
            document.getElementsByClassName("accent2")[i].style.fill = sessionStorage.getItem("accent1Color");
        }
        accent2 = sessionStorage.getItem("accent2Color");
    } else {
        for (var i = 0; i < toChange2.length; ++i) {
            document.getElementsByClassName("accent2")[i].style.fill = "black";
        }
        accent2 = "black";
    }
}

window.addEventListener("load", start, false);
