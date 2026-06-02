const container = document.querySelector('.container');
const finalImage = document.querySelector('.final-image');

container.addEventListener('mousemove', (e) => {
    // মাউসের সঠিক পজিশন নির্ণয়
    const x = e.clientX;
    const y = e.clientY;

    // CSS ভেরিয়েবল আপডেট করা
    finalImage.style.setProperty('--x', `${x}px`);
    finalImage.style.setProperty('--y', `${y}px`);
});