var question = document.getElementsByClassName("panel");
var heading = document.getElementsByClassName("panel-head");
var answer = document.getElementsByClassName("panel-body");

function activated() {
for(var i = 0; i < answer.length; i++) {
    answer[i].style.display = "none";
}

var activePanel = document.querySelectorAll(".panel.active .panel-body");
for(var i = 0; i < activePanel.length; i++) {
    activePanel[i].style.display = "";
}
}

for (var i = 0; i < heading.length; i++) {
heading[i].addEventListener('click', function(e) {
   for (var j = 0; j < question.length; j++){
       question[j].classList.remove('active');
   }
   e.target.parentNode.classList.add('active');
   activated();
});
}

activated();