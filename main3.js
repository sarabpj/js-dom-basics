var button = document.querySelector("button"); //grab what you need, the eleement you want to change

button.addEventListener("click", once);


function annoyingAlert () { //having separate functions makes it remove event listeners
    alert("You clicked on the button!!!");
}


function once (){
  console.log("Done");
  button.removeEventListener("click",once);

}