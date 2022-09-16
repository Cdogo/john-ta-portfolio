const options = {
    reRunAnimation: false
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } if (options.reRunAnimation && !entry.isIntersecting){
            entry.target.classList.remove('show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))