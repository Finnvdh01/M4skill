const cardbuttons = document.getElementsByClassName('card__button');
var itemCount = 0;
const itemCounter = document.getElementById('itemCounter');


console.log(cardbuttons[1]);
let sum = 0;

for (let i = 0; i < cardbuttons.length; i++) {
  cardbuttons[i].addEventListener('click', function() {
    console.log(cardbuttons[i].innerText);
    myFunction(cardbuttons[i].innerText);
    itemCount = itemCount + 1;
    console.log(itemCount);
    itemCounter.innerText = itemCount;
  });
}


function myFunction(item) {
  sum += item;
}



    





















