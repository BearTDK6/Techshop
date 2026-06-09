const banner = document.querySelector('.banner');

if (banner) {
    const track = banner.querySelector('.banner-track');
    const slides = track.querySelectorAll('img');
    const btnPrev = banner.querySelector('.prev');
    const btnNext = banner.querySelector('.next');
    const dotsBox = banner.querySelector('.dots');
    let index = 0;

    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'dot';
        dot.addEventListener('click', () => {
            index = i;
            show();
        });
        dotsBox.appendChild(dot);
    });

    const dots = dotsBox.querySelectorAll('.dot');

    function show() {
        const slideWidth = banner.clientWidth;
        track.style.transform = 'translateX(-' + index * slideWidth + 'px)';
        dots.forEach((d, i) => {
            if (i === index) d.classList.add('active');
            else d.classList.remove('active');
        });
    }

    btnNext.addEventListener('click', () => {
        index++;
        if (index >= slides.length) index = 0;
        show();
    });

    btnPrev.addEventListener('click', () => {
        index--;
        if (index < 0) index = slides.length - 1;
        show();
    });

    window.addEventListener('resize', show);
    show();
}
