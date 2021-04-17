/*Indicator start*/
const sections = [...document.querySelectorAll("section")];
const getLinkById = (id) => document.querySelector(`a[href='#${id}']`);
const inView = (section) => {
    let top = section.offsetTop;
    let height = section.offsetHeight;

    while (section.offsetParent) {
        section = section.offsetParent;
        top += section.offsetTop;
    }

    return (
        top < window.pageYOffset + window.innerHeight &&
        top + height > window.pageYOffset
    );
};

window.onscroll = () => {
    let next = false;

    sections.forEach((section) => {
        const a = getLinkById(section.id);

        if (inView(section) && !next) {
            a.classList.add("scroll--current");
            next = true;
        } else {
            a.classList.remove("scroll--current");
        }
    });
};
/*Indicator end*/
/*Burger start*/
document.querySelector('.c-hamburger').addEventListener('click', function(e) {
        e.preventDefault();

        if (this.classList.contains('is-active')) {
            this.classList.remove('is-active');
            document.querySelector('#menu').classList.remove('nav-active');
            document.body.classList.remove('body-active')

        } else {
            this.classList.add('is-active');
            document.querySelector('#menu').classList.add('nav-active');
            document.body.classList.add('body-active')

        }

    })
    /*Burger end*/