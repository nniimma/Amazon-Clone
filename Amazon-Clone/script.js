// Popular products in wirelessly internationally
const leftBtn = document.querySelector(".l-btn");
const rightBtn = document.querySelector(".r-btn");


rightBtn.addEventListener("click", function (event){
        const conent = document.querySelector(".product-slide");
        conent.scrollLeft +=1100;
        event.preventDefault();
});

leftBtn.addEventListener("click", function (event){
    const conent = document.querySelector(".product-slide");
    conent.scrollLeft -=1100;
    event.preventDefault();
});


// Popular products in wirelessly internationally
const leftButton = document.querySelector(".btn-1b");
const rightButton = document.querySelector(".btn-1a");


rightButton.addEventListener("click", function (event){
        const conent = document.querySelector(".product-slide-1");
        conent.scrollLeft +=1100;
        event.preventDefault();
});

leftButton.addEventListener("click", function (event){
    const conent = document.querySelector(".product-slide-1");
    conent.scrollLeft -=1100;
    event.preventDefault();
});

// Popular products in wirelessly internationally
const leftButton2 = document.querySelector(".btn-2b");
const rightButton2 = document.querySelector(".btn-2a");


rightButton2.addEventListener("click", function (event){
        const conent = document.querySelector(".product-slide-2");
        conent.scrollLeft +=1100;
        event.preventDefault();
});

leftButton2.addEventListener("click", function (event){
    const conent = document.querySelector(".product-slide-2");
    conent.scrollLeft -=1100;
    event.preventDefault();
});

// Deals Under $25
const leftButton3 = document.querySelector(".btn-3b");
const rightButton3 = document.querySelector(".btn-3a");


rightButton3.addEventListener("click", function (event){
        const conent = document.querySelector(".product-slide-3");
        conent.scrollLeft +=1100;
        event.preventDefault();
});

leftButton3.addEventListener("click", function (event){
    const conent = document.querySelector(".product-slide-3");
    conent.scrollLeft -=1100;
    event.preventDefault();
});

// back to top
const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// sidebar
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second1");

sidebtn.addEventListener("click", ()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
});

cross.addEventListener("click", ()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");

});

// sign in next to USA flag
const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", ()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");

});