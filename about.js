let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let closePic = document.querySelector("span");

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        openModal(`Images/img${index}.jpg`);
    });
});

function openModal(pic){
    wrapper.style.display = 'flex'
    imgWrapper.src = pic
}

closePic.addEventListener('click', () => wrapper.style.display = 'none')



