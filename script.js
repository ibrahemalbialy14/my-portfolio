const lis = document.querySelectorAll("li");
const contact = document.querySelector(".contact");
const hiringMe = document.querySelector(".hiring-me");

lis.forEach((li) => {
    li.addEventListener("click", () => {
        lis.forEach((item) => {
            item.classList.remove("active");
        });
        li.classList.add("active");
    });
});

contact.addEventListener("click", () => {
    lis.forEach((li) => {
        li.classList.remove("active");
    });
})

hiringMe.addEventListener("click", () => {
    lis.forEach((li) => {
        li.classList.remove("active");
    });
})