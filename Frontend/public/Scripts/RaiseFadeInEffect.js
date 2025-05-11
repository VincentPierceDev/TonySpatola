const raiseFadeElements = document.querySelectorAll('.fade-raise-element');

const fadeOptions = {
    threshold: 1
};

const onScrollFade = new IntersectionObserver(function(entries, onScrollFade){

    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            onScrollFade.unobserve(entry.target);
        }
    })

}, fadeOptions);

raiseFadeElements.forEach(fadeElement => {
    onScrollFade.observe(fadeElement);
});

export default onScrollFade;