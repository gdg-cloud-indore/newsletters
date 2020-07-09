//alternate color switch for "GDG Cloud Indore"
let colors = ["#0085ff", "#3cba54", "#ea4335", "#f4b400"];
let maintext = document.getElementById('main-text');
maintext.style.color = colors[Math.floor(Math.random() * colors.length)];

//To display main content based on Navbar
let navbuttons = Array.from(document.getElementsByClassName('nav-links'))
let mainContents = Array.from(document.getElementsByClassName('main--content'))
navbuttons.forEach(button => {
    button.addEventListener('click', () => {
        navbuttons.forEach(button => {
            button.classList.remove('active-nav')
        })
        let activeMain = button.id.split('-').filter(cl => cl !== 'nav')[0]
        mainContents.forEach(main => {
            main.classList.remove('active')
            if (main.classList.value.split(' ').includes(activeMain)) {
                console.log("adding")
                main.classList.add('active')

            }
        })
        button.classList.add('active-nav')
    })
})