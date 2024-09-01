const github = document.getElementById('github');
const facebook = document.getElementById('facebook');

github.addEventListener("click",()=>{
    window.open('https://github.com/ronit5036m');
});

facebook.addEventListener("click",()=>{
    window.open('https://www.facebook.com/ronitshakhari.fb');
});

const githubFoot = document.getElementById('github-foot');
const facebookFoot = document.getElementById('facebook-foot');

githubFoot.addEventListener("click",()=>{
    window.open('https://github.com/ronit5036m');
});

facebookFoot.addEventListener("click",()=>{
    window.open('https://www.facebook.com/ronitshakhari.fb');
});


const scrollTop = document.getElementById("scroll-top");

document.addEventListener("scroll",()=>{
    if (window.scrollY>300) {
        scrollTop.style.display = "block"
    } else {
        scrollTop.style.display = "none"
    }
});


scrollTop.addEventListener("click",()=>{
    window.scrollTo({
        top : 0,
        behavior: "smooth"
    })
})
const mylocation = document.getElementById('mylocation');

mylocation.addEventListener("click",()=>{
    window.open('https://maps.app.goo.gl/N6S9wmdN3xqWYWwk6');
})
// document.addEventListener("DOMContentLoaded",()=>{
//     window.addEventListener("load",()=>{
//         const loder = document.querySelector(".preloder");
//         const body = document.body



//     })
// })



