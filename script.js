let card = document.querySelectorAll('.card');

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener( 'click', function() {
        this.classList.toggle('isFlipped');
    });
}
// card.addEventListener( 'click', function() {
//     card.classList.toggle('isFlipped');
// });
//
//
//
//
// var inputs = document.querySelectorAll("input[type=text]")
// for (i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('click', function() {
//         this.style.width = "500px";
//     });
// }