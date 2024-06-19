window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scroll_top')
    scroll.classList.toggle('active', window.scrollY > 450)
})

function back_top(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}