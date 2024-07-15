const lis = document.querySelectorAll("li");
const mainMenu = document.querySelector(".main-menu");
const mainLinks = document.querySelector(".main-links");
lis.forEach((li) => {
    li.addEventListener("click", () => {
        lis.forEach((item) => {
            item.classList.remove("active");
            mainLinks.classList.remove("active");
            text.classList.remove("active");
        });
        li.classList.add("active");
    });
});
mainMenu.addEventListener("click", () => {
    mainLinks.classList.toggle("active");
})