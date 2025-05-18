var arrayOfItems = [
  {
    blog_date: "20/April/2025",
    blog_title: "How to create a simple website using HTML, CSS, and JavaScript",
    blog_description:
      "In this blog, we will learn how to create a simple website using HTML, CSS, and JavaScript. We will cover the basic structure of an HTML document, how to style it with CSS, and how to add interactivity with JavaScript.",
    blog_image: "../collection/audi_A8L_WHITE.jpg",
  },
];

var blog_section = document.querySelector(".blog_section");

var clutter = "";
arrayOfItems.forEach((blog, index) => {
  clutter += `
      <div class="blog_box" data-index="${index}">
                <div class="blog_img">
                 <img src="${blog.blog_image}" alt="">
                </div>
                <div class="blog_date">
                  <p>${blog.blog_date}</p>
                </div>
                <div class="blog_title">
                  <h3>${blog.blog_title}</h3>
                </div>
                <div class="blog_desc">
                  <p>
                  ${blog.blog_description}
                  </p>
                </div>
              </div>`;
});

blog_section.innerHTML = clutter;

// Modal logic
var modal = document.getElementById("modal");
var modalTitle = document.getElementById("modal_title");
var modalDate = document.getElementById("modal_date");
var modalImage = document.getElementById("modal_image");
var modalDesc = document.getElementById("modal_desc");
var closeModal = document.getElementById("closeModal");

document.querySelectorAll(".blog_box").forEach((box) => {
  box.addEventListener("click", () => {
    const blog = arrayOfItems[box.dataset.index];
    modalTitle.textContent = blog.blog_title;
    modalDate.textContent = blog.blog_date;
    modalImage.src = blog.blog_image;
    modalDesc.textContent = blog.blog_description;
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
