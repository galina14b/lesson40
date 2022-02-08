let card = document.querySelectorAll('.card');

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener( 'mouseenter', function() {
        this.classList.toggle('isFlipped');
    });
    card[i].addEventListener( 'mouseleave', function() {
        this.classList.toggle('isFlipped');
    });
}
