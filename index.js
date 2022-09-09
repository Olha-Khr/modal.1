// import "./sass/index.scss";



var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.ddEventListener('keydown', function (e) {
     if(e.key === 'Escape') document.getElementById('myModal').hidden=1;
});
  

// document.addEventListener('keydown', function (e) {
//     if(e.keyCode === 27) document.getElementById('myModal').hidden= 1;
//   }); 

// document.addEventListener('keypress', function (e) {
//     if(e.keyCode === 27) document.getElementById('myModal').hidden= 1;
//   }); 

// document.addEventListener('keydown ', function (e) {
//     if(e.keyCode === 27) document.getElementById('myModal').hidden= 1;
// }); 

//     document.body.addEventListener('keyup', function (e) {
//         var key = e.keyCode;

//         if (key == 27) 

