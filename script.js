
// gets the html element with class of cursor from the page
let cursor = document.querySelector('.cursor');

// “Listen” on the window for mouse movement and log X & Y
window.addEventListener('mousemove', (event) => {
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
})


let rollovers = document.querySelectorAll('.rollover');


console.log(rollovers);


rollovers.forEach(rollover => {

    // // “Listen” on the window for mouse movement and log X & Y
    rollover.addEventListener('mouseenter', (event) => {
        console.log('mouse entered!')
        cursor.style.backgroundImage = 'url("' + rollover.dataset.img + '")'
        cursor.style.width = rollover.dataset.width;
        cursor.style.height = rollover.dataset.height;
        cursor.style.translate = '-50% -50%';
    })

    rollover.addEventListener('mouseleave', (event) => {
        console.log('mouse left!')
        cursor.style.backgroundImage = '';
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.translate = '0 0';
    })
});

