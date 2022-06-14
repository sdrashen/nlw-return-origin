window.addEventListener('scroll', onScroll)
    //addEventListener é uma funcionalidade/função criada direto na window, nesse caso na janela inteira
    //Essa função recebe esse evento chamado 'scroll'.
    //O que vem ao lado é o nome da function que esse evento vai executar: onScroll, sem os ()

onScroll()
    //O onSrcoll precisa ser executado uma única vez. Pode ser chamado aqui mesmo.
    //Quando carregar o file executa o onScroll

/* A propriedade ScrollY mostra o posicionamento do scroll ( rolagem na tela).
 /*function onScroll() {
 /*    console.log(scrollY)
 /*}
 /* É necessário que o body esteja assim:
 /* <body onscroll="onScroll()">
 */

//NOTE: Console é um obj que tem uma funcionalidade chamada "log"

function onScroll() {
    //onScroll function tem apenas 1 função: gerenciar os eventos de scroll da page
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}
//innerHeight no dev tolls mostra a altura visível da page
//innerHeight / 2 mostra a altura da page dividida ao meio
//innerHeight / 2 + scrollY
function activateMenuAtCurrentSection() {
    //Aqui estamos recriando o valor do target line, por isso usando const
    const targetLine = scrollY + innerHeight / 2
        //"Estado da aplicação" muda conforme o scroll
        //Abaixo: verificar se a sessão passou da linha. Quais dados serão necessários?
        //console.log(home.offsetTop) do id home, ñ necessita #. Se fosse, por exemplo, #home-section o JS ñ conseguiria identifcar. Isso aqui foi apenas para ensinar.
    const sectionTop = home.offsetTop
    const sectionHeight = home.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    //infos do dados: e da lógica. No console.log, no dev tolls, aparece true or false
    //console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)
    //Abaixo: verificar se a base está abaixo da linha. Quais dados serão necessários?
    //console.log(sectionHeight)
    //A seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight
        // console.log(sectionEndsAt)

    const sectionEndPassedTargetline = sectionEndsAt <= targetLine
        //console.log('O fundo de seção passou da linha?, sectionEndPassedTargetline')
        //Necessário que se transforme em true

    const sectionBoundaries =
        sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline
        //O ! nega o booleano
        // console.log(sectionBoundaries)
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(
        `.menu a[href*=${section.getAttribute(id)}]`
    )
    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    //Mostrar o navigation ao fazer scroll
    //scrollY aqui é uma var
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

// navigation aqui passa a ser interpretado como um objeto, por isso adquiri propriedades e funcionalidades(add, por exemplo).
// Ao colocar "." se tem acesso a todas as propriedades e funcionalidades de um objeto.

function showBackToTopButtonOnScroll() {
    //Mostrar o botão backToTop ao fazer scroll
    if (scrollY > 550) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)