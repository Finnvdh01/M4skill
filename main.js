const cardbuttons = document.getElementsByClassName('card__button');
var itemCount = 0;
const itemCounter = document.getElementById('ItemCounter');


console.log(cardbuttons[1]);
let sum = 0;

for (let i = 0; i < cardbuttons.length; i++) {
  cardbuttons[i].addEventListener('click', function() {
    console.log(itemCount);
  });
}


function counter() {
  itemCount++;
  itemCounter.innerText = itemCount;

}

const removefromcart = document.getElementsByClassName('del');
for (let i = 0; i < removefromcart.length; i--) {
  removefromcart[i].addEventListener('click', function() {
    console.log(itemCount);
  });
}

function verwijder() {
  itemCount--;
  itemCounter.innerText = itemCount;
  if (itemCount < 0) {
    itemCount = 0;
    itemCounter.innerText = itemCount;
  }
}



const products_array = [
     ["Movie speakers", 44.99, "img/product1.jpg.jpg", "Een krachtige Rating: 4.2/5", true],
     ["kantoor speakers", 39.99, "img/product2.jpg", "Rating: 4.1/5", true],
     ["gaming speakers", 47,99, "img/product3.jpg", "Rating: 4.8/5", false]
  ];
  



    





















