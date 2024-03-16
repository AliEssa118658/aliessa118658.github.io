
// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
document.addEventListener("DOMContentLoaded", () => {
    // Simulate an API request or any async operation
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 3000); // Replace with your actual data loading logic and time

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
     
    }
    
    function showContent() {
        const content = document.getElementById("content");
        content.classList.add("block");
 
        const part = document.getElementById("particles-js");
        part.classList.add("block");
        var p = document.getElementById('text');
        p.innerHTML = '';
        var n = 0;
        var str = 'Software engineer, Full-stack web Developer';
        var typeTimer = setInterval(function() {
        n = n + 1;
        p.innerHTML = "" + str.slice(0, n);
        if (n === str.length) {
            clearInterval(typeTimer);
            p.innerHTML = "" + str;
            n = 0;
            setInterval(function() {

            if (n === 0) {
                p.innerHTML = "" + str + "|"
                n = 1;
            } else {
                p.innerHTML = "" + str
                n = 0;
            };
            }, 500);
        };
        }, 60)
    }
});

