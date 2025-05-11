const fadeElements = document.querySelectorAll('.fade-in-element');

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

fadeElements.forEach(fadeElement => {
    onScrollFade.observe(fadeElement);
});

export default onScrollFade;