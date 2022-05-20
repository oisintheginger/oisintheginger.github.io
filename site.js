
var modal = document.getElementById('modal');
var modalimg = document.getElementById('modal_image');
var mod_close = document.getElementById('modal_close');


const images = document.querySelectorAll(".portfolio_gallery img");
let imgSrc;
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        console.log(imgSrc);
        modal.style.display = "flex";
        modalimg.src=imgSrc;
    });
});

mod_close.onclick = function(){
    if(modal.style.display ==="flex")
    {
        modal.style.display = "none"
    }
}