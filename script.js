const lis = document.querySelectorAll("li");
const contact = document.querySelector(".contact");
const hiringMe = document.querySelector(".hiring-me");
const mainMenu = document.querySelector(".main-menu");
const mainLinks = document.querySelector(".main-links");
const sections = document.querySelectorAll("section");
const text = document.querySelector(".text")
const inputs = document.querySelectorAll('input');
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

window.addEventListener("scroll", changeLinkState);

document.getElementById("sendButton").onclick = function() {
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPhone = document.getElementById("userPhone").value;
    var userMessage = document.getElementById("userMessage").value;
    if (userName && userEmail && userPhone && userMessage) {
        alert("Your message has been sent successfully");
    }else {
        alert("Please fill all the fields");
        return;
    }
    inputs.forEach(function(input) {
        input.value = '';
        console.log("input is empty")
    });
    var templateParams = {
    to_name: 'Ibrahem Albialy',
    from_name: userEmail,
    email: userEmail,
    phone: userPhone,
    message: `You got a new message: ${userMessage}`
    };
    emailjs.init("DI8AocHz_yjskdOJN");
    emailjs.send('service_5wusw2t', 'template_ve0ypv9', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
};