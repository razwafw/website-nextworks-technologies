// Fungsi yang memberikan efek smooth scrolling saat mengeklik tombol di navigasi
document.addEventListener('DOMContentLoaded', () => {
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode
    const internalLinks = document.querySelectorAll(".main-navigation a[href^='#link-section")
    internalLinks.forEach(function (link) {
        link.addEventListener('click', () => {
            let extraOffset = document.querySelector('.main-navigation-container').clientHeight
            let target = link.href.split('#link-section')
            target = '#section' + target[1]
            if (isIE11) {
                window.scrollTo(0, (document.querySelector(target).offsetTop - extraOffset))
            } else {
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: document.querySelector(target).offsetTop - extraOffset,
                })
            }
        }) 
    })
})