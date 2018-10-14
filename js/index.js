// $('#contact-form').submit(function(e) {
//     const name = document.getElementById('name');
//     const email = document.getElementById('email');
//     const message = document.getElementById('message');

//     if (!name.value || !email.value || !message.value) {
//         alertify.error('Name, email and message are required.');
//     } else {
//         $.ajax({
//             url: "https://formspree.io/info@walksandwhiskers.co.uk",
//             method: "POST",
//             data: $(this).serialize(),
//             dataType: "json"
//         });
//         e.preventDefault();
//         $(this).get(0).reset();
//         alertify.success('Message sent!');
//     }
// });

const elements = document.getElementsByClassName('navigation__link');
const navToggle = document.getElementById('navi-toggle');

Array.prototype.slice.call(elements)
    .forEach(function(el) {
        el.addEventListener('click', function (e) {
            navToggle.checked = false;
        });
    });