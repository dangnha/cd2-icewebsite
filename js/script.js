let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

document
  .getElementById("order-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_6ly78pg"; // Replace with your actual service ID
    const templateID = "template_z5ofge7"; // Replace with your actual template ID

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        alert("Đơn hàng của bạn đã được gửi thành công!");
      },
      (err) => {
        alert("Gửi đơn hàng thất bại, xin thử lại!");
        console.log(JSON.stringify(err));
      }
    );
  });
