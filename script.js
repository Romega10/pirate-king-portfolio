window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1500);
};

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Typing Effect
const text = ["Gamer ⚡ Developer ⚡ Creator ⚡ Innovator"];
let index = 0;
let char = 0;
function type() {
    if(char < text[index].length){
        document.getElementById("typing").innerHTML += text[index].charAt(char);
        char++;
        setTimeout(type,50);
    }
}
type();

// Scroll Progress Bar
window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
};

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / 100;
        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(update,20);
        } else {
            counter.innerText = target;
        }
    };
    update();
});