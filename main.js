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