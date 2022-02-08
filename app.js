var shake = document.getElementById('effect');

shake.addEventListener('mouseover', () => {
    if(!shake.classList.contains('hover')){
        shake.classList.add('hover')
    }
})

shake.addEventListener('mouseleave', () => {
    if(shake.classList.contains('hover')){
        shake.classList.remove('hover')
    }
})
