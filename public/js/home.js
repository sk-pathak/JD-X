document.addEventListener('DOMContentLoaded', function() {
    var scroll = document.querySelector('.scroll');
    
  scroll.addEventListener('click', function() {
      scroll.scrollBy({
        top: 830,
      
      });
    });
  });