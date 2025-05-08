function Start(){

    const hamburgerMenu = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    if(hamburgerMenu){
        hamburgerMenu.addEventListener('click', () => {
            const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
            toggleButton(hamburgerMenu, expanded);
            
            if(!expanded){
                navMenu.classList.add("opened-mobile-menu");
                document.getElementById("navbar-container").classList.add("sticky-navbar");
            }
            else{
                navMenu.classList.remove("opened-mobile-menu");
                document.getElementById("navbar-container").classList.remove("sticky-navbar");
            }
        })
    }

    if(window.screen.availWidth <= 800){
        navMenu.setAttribute('aria-labeled-by', "menu-button");
    }
}


function toggleButton(hamburgerMenu, expanded) {
    const topBar = document.getElementById("top-bar");
    const botBar = document.getElementById("bot-bar");
    const midBar = document.getElementById("mid-bar");

    //inform screen readers
    hamburgerMenu.setAttribute('aria-expanded', !expanded);

    topBar.classList.toggle('top-bar-toggle');
    midBar.classList.toggle('mid-bar-toggle');
    botBar.classList.toggle('bot-bar-toggle');
}


Start();