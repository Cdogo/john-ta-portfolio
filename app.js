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

new Pageable("#fullpage", {
    childSelector: "[data-anchor]", // CSS3 selector string for the pages
    anchors: ['slide1', 'slide2', 'slide3', 'slide4'], // define the page anchors
    pips: true, // display the pips
    animation: 700, // the duration in ms of the scroll animation
    delay: 0, // the delay in ms before the scroll animation starts
    throttle: 50, // the interval in ms that the resize callback is fired
    orientation: "vertical", // or horizontal
    swipeThreshold: 50, // swipe / mouse drag distance (px) before firing the page change event
    freeScroll: false, // allow manual scrolling when dragging instead of automatically moving to next page
    navPrevEl: false, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
    navNextEl: false, // define an element to use to scroll to the next page (CSS3 selector string or Element reference)
    infinite: false, // enable infinite scrolling (from 0.4.0)
    slideshow: { // enable slideshow that cycles through your pages automatically (from 0.4.0)
        interval: 5000, // time in ms between page change,
        delay: 0 // delay in ms after the interval has ended and before changing page
    },
    events: {
        wheel: true, // enable / disable mousewheel scrolling
        mouse: true, // enable / disable mouse drag scrolling
        touch: true, // enable / disable touch / swipe scrolling
        keydown: true, // enable / disable keyboard navigation
    }})