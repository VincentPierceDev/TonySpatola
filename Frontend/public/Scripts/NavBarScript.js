function Start(){
    HamburgerControl();
    PageScrollingEffect();
}

function HamburgerControl() {

    const hamburgerMenu = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");
    const navBar = document.getElementById("navbar");

    if(!hamburgerMenu || !navMenu || !navBar)
        return;

    //mobile hamburger menu control
    hamburgerMenu.addEventListener('click', () => {
        const expanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
        ToggleButton(hamburgerMenu, expanded);
        MobileMenuControl(navMenu, navBar, expanded);
    })
    

    //add accessibility attribute for nav button menu
    if(window.screen.availWidth <= 800){
        navMenu.setAttribute('aria-labeledby', "menu-button");
    }

}

function ToggleButton(hamburgerMenu, expanded) {
    const topBar = document.getElementById("top-bar");
    const botBar = document.getElementById("bot-bar");
    const midBar = document.getElementById("mid-bar");

    if(!topBar || !botBar || !midBar)
        return;

    //inform screen readers
    hamburgerMenu.setAttribute('aria-expanded', !expanded);

    topBar.classList.toggle('top-bar-toggle');
    midBar.classList.toggle('mid-bar-toggle');
    botBar.classList.toggle('bot-bar-toggle');
}

function MobileMenuControl(navMenu, navBar, expanded){
    if(!expanded){
        navBar.classList.add("navbar-solid");
        navMenu.classList.add("opened-mobile-menu");
    }
    else{
        navBar.classList.remove("navbar-solid");
        navMenu.classList.remove("opened-mobile-menu");
    }
}

function PageScrollingEffect(){

    const navBar = document.getElementById("navbar");
    const container = document.getElementById("navbar-container");

    if(!navBar || !container)
        return;

    window.addEventListener('scroll', () => {
        let scrollDist = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if(scrollDist >= 150){
            navBar.classList.add("scroll-nav-style");
            container.classList.add("scroll-container-style");
            RaiseMobileMenuOrigin();
        }
        else if(scrollDist < 150){
            navBar.classList.remove("scroll-nav-style");
            container.classList.remove("scroll-container-style");
            DropMobileMenuOrigin();
        }
    })
}

function DropMobileMenuOrigin(){

    if(window.screen.availWidth <= 800){
        const mobileMenu = document.getElementById("nav-menu");

        if(mobileMenu){
            mobileMenu.classList.remove("raise-mobile-menu");
        }

    }
}

function RaiseMobileMenuOrigin(){
        
    if(window.screen.availWidth <= 800){
        const mobileMenu = document.getElementById("nav-menu");

        if(mobileMenu){
            mobileMenu.classList.add("raise-mobile-menu");
        }
    }
}

Start();