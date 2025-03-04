(function () {
  const listElements = document.querySelectorAll(".nav__item--show");
  const list = document.querySelector(".nav__list");
  const menu = document.querySelector(".nav__menu");

  const addClick = () => {
    listElements.forEach((element) => {
      element.addEventListener("click", () => {
        let subMenu = element.children[1];

        console.log(element.children[1]);
        
        let height = 0;
        element.classList.toggle("nav__item--active");

        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight;
        }

        subMenu.style.height = `${height}px`;
      });
    });
  };


  const deleteStyleHeight = () => {
    listElements.forEach(element => {
        let subMenu = element.children[1];  

        if (subMenu && subMenu.getAttribute('style')) {  // Verifica que subMenu no sea undefined
            subMenu.removeAttribute('style');
            element.classList.remove('nav__item--active');  
        }
    });
};


  window.addEventListener('resize', ()=>{
    if(window.innerWidth <= 800){
        deleteStyleHeight();
        if (list.classList.contains('nav__list--show')) {
            list.classList.remove('nav__list--show');
        }
    }else{
        addClick();
    }
  });

  if(window.innerWidth <= 800){
    addClick();
  }

  menu.addEventListener('click', ()=> list.classList.toggle('nav__list--show'));

})();
