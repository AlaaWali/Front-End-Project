var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


var btn = document.querySelector('.icon');
var body = document.querySelector('html');

window.addEventListener("scroll", () => {
    if (body.scrollTop >= 500) {
        btn.style.display = "block";
        btn.addEventListener('click', () => {
            window.scrollTo(0, 0);
        })
    } else {
        btn.style.display = "none";
    }

})