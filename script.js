const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -250px 0px"
};

// const slideIn = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             // document.querySelectorAll(".benefits")[0].classList.add("fade-in-left");
//             document.querySelectorAll(".display-4")[0].classList.add("fade-in-top");
//             document.querySelector(".welcomeP").classList.add("fade-in-bottom");
//         }
//     })
// },
// appearOptions)

// slideIn.observe(document.querySelector(".welcome"))

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
    )
{
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
// const observer2 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             document.querySelectorAll(".card")[0].classList.add("fade-in-left");
//             document.querySelectorAll(".card")[1].classList.add("fade-in-top");
//             document.querySelectorAll(".card")[2].classList.add("fade-in-bottom");
//         }
//     })
// })

// observer2.observe(document.querySelector(".card"))

// observer.observe(document.querySelector(".welcome"))

// const observer3 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             document.querySelector(".fa-solid").classList.add("fade-in");
//         }
//     })
// })

// observer3.observe(document.querySelector(".fa-solid"))

// const h1observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             document.querySelectorAll(".display-4")[0].classList.add("fade-in-top");
//         }
//     })
// })

// h1observer.observe(document.querySelector(".welcome"))

// const pobserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             document.querySelectorAll(".lead")[0].classList.add("fade-in-top");
//         }
//     })
// })

// pobserver.observe(document.querySelector(".welcome"))
