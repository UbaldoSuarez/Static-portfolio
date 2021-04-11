let contactButton = Array.from(document.querySelectorAll('.circle.button'))
contactButton.forEach(button => {
    button.addEventListener('click', (e)=> {
        e.preventDefault()
        let containerButton = button.parentElement
        contactButton.forEach(el => {
            el.parentElement.classList.remove('active')
        })
        containerButton.classList.toggle('active')
        let src = button.children[0].getAttribute('src')
        let p = button.parentElement.children[1]
        
        if (src == '/img/email.svg') {
            
            p.innerHTML = '<a href="mailto:sarcosas.dev@gmail.com" target="_blank">sarcosas.dev@gmail.com</a>'

        } else if (src == '/img/instagram_new_2.svg') {
            
            p.innerHTML = '<a href="https://instagram.com/sarcosas.dev" target="_blank">@sarcosas.dev</a>'

        }  else if (src == '/img/dribbble_circled_1.svg') {
            
            p.innerHTML = '<a href="https://dribbble.com/usuarez" target="_blank">@usuarez</a>'

        }  else if (src == '/img/facebook_messenger_1.svg') {
            
            p.innerHTML = '<a href="https://fb.me/sarcosas.dev" target="_blank">@sarcosas.dev</a>'

        }  else if (src == '/img/whatsapp.svg') {
            p.innerHTML = '<a href="tel:+584125293944" target="_blank">+584125293944</a>'
        }
    })
});

let shotbtn = document.querySelector('.shotclose')
//console.log(shotbtn)
shotbtn.addEventListener('click', (e)=> {
    e.preventDefault()
    document.querySelector('.shotview').style.display = 'none'
})

let shotshow = Array.from(document.querySelectorAll('.shotshow'))
//console.log(shotshow)
shotshow.forEach(btn => {
//    console.log(btn.previousElementSibling.textContent)
    btn.addEventListener('click', (e) => {
        let template = (src, styles) => {
            return `<img src="/shots/${src}.png" alt="" class="shot" ${styles}>`
        }
        if(btn.previousElementSibling.textContent == 'Travel Blog Concept') {
            document.querySelector('.shot').parentElement.innerHTML = `${template('Blog')} ${template('blog-mobile')}`
            document.querySelector('.shot').setAttribute('src','/shots/Blog.png')
            document.querySelector('.shot').style.maxHeight = '100%'
            document.querySelector('.shot').style.maxWidth = '100%'
        }
        if(btn.previousElementSibling.textContent == 'DanzApp') {
            let stl = 'style="max-height: 80%; max-width: 90%; margin-top: 32px;"'
            document.querySelector('.shot').parentElement.innerHTML = `
            ${template('Dashboard - Resume', stl)} 
            ${template('dashboard2', stl)} 
            ${template('dashboard3', stl)} 
            ${template('dashboard4', stl)}
            `
            
            document.querySelector('.shot').style.maxHeight = '80%'
            document.querySelector('.shot').style.maxWidth = '90%'
            document.querySelector('.shot').style.marginTop = '32px'
        }
        if(btn.previousElementSibling.textContent == 'Interlink ISP') {
            document.querySelector('.shot').parentElement.innerHTML = `${template('isp')}`
        }
        
        if(btn.previousElementSibling.textContent == 'Cripto Exchange') {
            document.querySelector('.shot').parentElement.innerHTML = `${template('cripto')}`
        }

        document.querySelector('.shotview').style.display = 'block'
    })
})



let headerImgs = Array.from(document.querySelectorAll('.header-img'))
const slide = () => {
    //iterador en el array
    let i = 0;
    headerImgs[i].style.animation = 'inimg .6s forwards'
    //cambia la imagen cada 4s
    window.setInterval(()=> {
        //sacar la imagen renderizada
        headerImgs.forEach(image => {
            image.style.animation = 'outimg .4s forwards'
        })
        if(i == 3) {
            //renderizar la siguiente imagen
            headerImgs[i-1].style.animation = 'outimg .4s forwards'
            i=0
            headerImgs[i].style.animation = 'inimg .6s forwards'
        } else {
            headerImgs[i+1].style.animation = 'inimg .6s forwards'
            i++
            }
    }, 4000)
}
slide()