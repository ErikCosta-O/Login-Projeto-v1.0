var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 4000)
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}