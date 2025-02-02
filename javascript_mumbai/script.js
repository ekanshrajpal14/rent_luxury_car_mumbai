document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var click = 1;
function clickOn(val) {

    if (val == 1) {
        document.querySelector(".toggle_switch").innerHTML = `<i class="ri-close-line"></i>`
        document.querySelector(".items").style.left = "0%";
        click = 0;
    }
    else {
        document.querySelector(".toggle_switch").innerHTML = `<i class="ri-menu-3-line"></i>`;
        document.querySelector(".items").style.left = "-110%";
        click = 1;
    }
}
document.querySelector(".toggle_switch").addEventListener("click", (re) => {
    clickOn(click);
})

var item = document.querySelectorAll(".item");
item.forEach((i) => {
    i.addEventListener("click", function () {
        clickOn(0)
    })
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // effect: "coverflow",
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
    },


    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});



function redirectIfNeeded() {
    const path = window.location.pathname; // Get the current path

    // Check if the path is exactly /carcategories/ (or ends with a trailing slash)
    if (path === '/carcategories/' || path === '/carcategories') {
        console.log('Redirecting to home page...');
        window.location.replace('/'); // Redirect to the home page
    }
}

// Call the function on page load
redirectIfNeeded();


var allImageClick = document.querySelectorAll(".image_click_handle");

allImageClick.forEach((i) => {
    i.addEventListener("click", function () {
        let openUrl = i.getAttribute("data-link");
        const currenturl = window.location.href;
        if(currenturl.endsWith("/")){
            openUrl = openUrl.slice(1);
            console.log(openUrl);
            
        }
        console.log(currenturl + openUrl);
        window.location.href = (currenturl + openUrl);
    })
});