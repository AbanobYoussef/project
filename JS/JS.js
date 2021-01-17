var x = document.getElementsByClassName("Navli") //.length;
console.log(x);
for (var i = 0; i < x.length; i++) {
    x[i].style.width = (100 / x.length - .5) + "%";
}



function disease(d) {
    var i;
    var x = document.getElementsByClassName("disease");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(d).style.display = "block";
}





for (var j = 0; j <= 10; j++) {
    var x = document.getElementsByClassName("disease");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[i].innerHTML += `<article class="card"><br>
    <img class="cardprofile" src="./resource/istockphoto-1214428300-612x612.jpg"><br><br>
    <p>Dr.Name` + i * j + `</p><br><br>
    <button>View Description </button><br><br>
</article>`;
    }
}