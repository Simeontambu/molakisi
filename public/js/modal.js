 // le js du modal
 var modal = document.getElementById('id01');
 var modal_inscript = document.getElementById('modal__inscript');
 var modal_login = document.getElementById('modal__login');
 var btn_login = document.getElementById('btn__login');
 var btn_inscript = document.getElementById('btn__inscript');
 

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function (event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 };
 //pour afficher l'inscript
 btn_inscript.onclick = function (event) {
      modal_login.style.display = "none";
      modal_inscript.style.display = "block";
};
//pour afficher le login
btn_login.onclick = function (event) {
      modal_inscript.style.display = "none";
      modal_login.style.display = "block";
};


// style du header pour le burger
function toggleBloc() {
    var bloc = document.getElementById("mon-bloc");
    if (bloc.style.display === "none") {
        bloc.style.display = "block";
    } else {
        bloc.style.display = "none";
    }
}
//le style du collapse
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
