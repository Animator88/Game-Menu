let game = document.getElementById('game');
let form = document.getElementById('form');
let play = document.getElementById('play');
let input = document.getElementById('input');
let nick = document.getElementById('nick');
let butshop = document.getElementById('butshop');
let dsp_gold = document.getElementById('gold');
let shop = document.getElementById('shop');
let gold = 0;

play.addEventListener('click', function() {
  form.style.display = 'none';
  game.style.display = 'flex';
  nick.textContent = input.value;
  if(input.value == "") {
    nick.textContent = 'Nick';
  }
})
butshop.addEventListener('click', function() {
  if(getComputedStyle(shop).display == 'none') {
    shop.style.display = 'flex';
  } else {
    shop.style.display = 'none';
  }
})