var animals = [
  {name: "Animal", sound:"Sound"},
  {name: "cat", sound: "meow"},
  {name: "dog", sound: "woof"},
  {name: "turtle", sound: "meep"},
  {name: "tiger", sound: "rawr"},
  {name: "lamb", sound: "baaa"}
];

// create table and tbody
var table = document.createElement("table");
var tbody = document.createElement("tbody");

//append table to DOM
document.querySelector('body').appendChild(table);
table.appendChild(tbody);

for (var i = 0; i < animals.length; i++) {
    var tr = document.createElement("tr");

    var td1= document.createElement("td");
    var td2= document.createElement("td");

    td1.innerText = animals[i].name;
    td2.innerText = animals[i].sound;

    tr.appendChild(td1);
    tr.appendChild(td2);

    tbody.appendChild(tr);

}
