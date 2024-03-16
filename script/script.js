


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


        const content = document.getElementById("content");
        content.style.display = "block";
        var p = document.getElementById('text');
        p.innerHTML = '';
        var n = 0;
        var str = 'Software Engineer, Full-Stack Web Developer';
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
        }, 100)


    

    


        