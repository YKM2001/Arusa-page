// ? header--modal, header--burger
const header = document.querySelector('.header')


if(header) {
        // ? modal

        const modalOpenButton = document.querySelector('.bag__text')
        const modal = document.querySelector('.bag__modale')
        modalOpenButton.addEventListener('click', () => {
            modal.classList.add('bag__open')
        })

        const modalCloseButton = document.querySelector('.bag__change--continue')
        modalCloseButton.addEventListener('click', () => {
            modal.classList.remove('bag__open')
        })

        //? burger
        
        const burgerOpenButton = document.querySelector('.header__icon')
        burgerOpenButton.addEventListener('click', () => {
        header.classList.toggle('header__active--burger')
        })
}


// ? scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('scroll--active')
        }
    })
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => { observer.observe(section)})







// ? header--scroll
window.addEventListener('scroll', function() {
    const height = window.scrollY
    const scrollChange = 100
    if(height >= scrollChange){
        header.classList.add('header__scroll--active')
    } else {
        header.classList.remove('header__scroll--active')
    }
})




const dropdown = document.querySelectorAll('.dropdown')

dropdown.forEach((item) => {
    item.addEventListener('click', (e) => {
        const target = e.target
        if(target.classList.contains('checkbox__to')) {
            target.classList.toggle('checkbox__checked')
        }
    })
})


