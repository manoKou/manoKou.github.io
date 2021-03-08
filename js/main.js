window.onload = function(){
  var yas = document.getElementById('yas');
  var nooo = document.getElementById('nooo');
  var img = document.getElementById('img');

  yas.addEventListener('click', function(){
    img.src = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/happy-cat-jamart-photography.jpg";
  });
  nooo.addEventListener('click', function(){
    img.src = "https://media.tenor.com/images/dac79996006d7dd97e7097c2662bab74/tenor.gif";
  });
}
