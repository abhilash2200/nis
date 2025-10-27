
// slider js
 var $carousel = $('[data-owl-carousel]');
 if ($carousel.length) {
     $carousel.each(function (index, el) {
         $(this).owlCarousel($(this).data('owl-carousel'));
     });
 }


 const cards = document.querySelectorAll('.campus-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });


    
  
    






  

// close-btn
function closeSection() {
  document.getElementById("closeable-section").style.display = "none";
}


document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
  }, 5000);
});