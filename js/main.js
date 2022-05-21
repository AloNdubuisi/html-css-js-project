// $(document).ready(function(){
//     $('#icon').click(function(){
//         $('ul').toggleClass('active');
//     });
// });



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// var i = 0;
// var images = [];
// var time = 1000;

// images[0] = '../images/background1.png';
// images[1] = '../images/hero-image.jpg';
// images[3] = '../images/image3.jpeg';

// function changeImage() {
//     document.slide.src = images[i];

//     if (i < images.length-1) {
//         i++;
//     }else{
//         i = 0;
//     }
    
//     setTimeout("changeImage()", time);
        
// }
// window.onload = changeImage;















// var imgArray = [
//     '../images/image1.jpg',
//     '../images/image2.jpg',
//     '../images/image3.jpeg',
//     '../images/image4.jpg',
// ],
// currentIndex = 0;
// imgDuration = 30;

// function slideShow() {
//     document.getElementById('slider').className =+"fadeOut";
//     setTimeout(() => {
//         document.getElementById('slider').src = imgArray[currentIndex];
//         document.getElementById('slider').className = "";
//     }, 1000);
//     currentIndex++;
//     if (currentIndex == imgArray.length) {
//         currentIndex = 0;
//     }
//     slideShow();
    
// }

