function mostrarMenu() {
    let menuCelular = document.querySelector('.menu-celular');
    if (menuCelular.classList.contains('open')){
        menuCelular.classList.remove('open');
        document.querySelector('.icon').src="imagens/menu-close.png";
    
    } else {
        menuCelular.classList.add('open')
        document.querySelector('.icon').src="imagens/menu-icon.png";
    }
}   
