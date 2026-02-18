// script.js
document.querySelectorAll('a[href^=&quot;#&quot;]').forEach(anchor =&gt; {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Booking request sent! (Demo - connect to real backend next)');
    this.reset();
});