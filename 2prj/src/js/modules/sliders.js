const sliders = (slids, dir, pref, next) => {
    let slideIndex = 1;
    const items = document.querySelectorAll(slids);
    
    function showSlides(n) {
        if(n > items.length) {
            slideIndex = 1;
        }
        if(n < 1) {
            slideIndex =items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });
        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(pref),
        nextBtn = document.querySelector(next);
        prevBtn.addEventListener('click', ()=> {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });
        nextBtn.addEventListener('click', ()=> {
            plusSlides(1);
            items[slideIndex - 1].classList.add('slideInLeft');
            items[slideIndex - 1].classList.remove('slideInRight');
        });
    } catch(e) {}
};
export default sliders; 