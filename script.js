const lis = document.querySelectorAll("li");
const contact = document.querySelector(".contact");
const hiringMe = document.querySelector(".hiring-me");
const mainMenu = document.querySelector(".main-menu");
const mainLinks = document.querySelector(".main-links");
const sections = document.querySelectorAll("section");
const text = document.querySelector(".text")
console.log(text)
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

contact.addEventListener("click", () => {
    lis.forEach((li) => {
        li.classList.remove("active");
    });
    text.classList.add("active");
})

hiringMe.addEventListener("click", () => {
    lis.forEach((li) => {
        li.classList.remove("active");
    });
})

mainMenu.addEventListener("click", () => {
    mainLinks.classList.toggle("active");
})

function changeLinkState () {
    let index = sections.length;
    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
    lis.forEach((li) => {
        li.classList.remove("active");
    })
    lis[index].classList.add("active");
}
    changeLinkState();

window.addEventListener("scroll", changeLinkState)