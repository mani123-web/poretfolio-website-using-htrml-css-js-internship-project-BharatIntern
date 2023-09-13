/*scroll section active link */
let sections= document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset+height){
            newLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header new a[href*=' + id + ']').classList.add('active');

            });
        };
        
    });

//sticky navbar
let header =documnet.querySelector('header');
header.classList.toggle('sticky',window.scroll);
};
