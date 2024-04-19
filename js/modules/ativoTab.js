export default function tabHorarios() {
    const tabMenu = document.querySelectorAll('.horarios-menu li a');
    const menuItens = document.querySelectorAll('.horarios-tab');

    if (tabMenu.length && menuItens.length) {
        
        menuItens[0].classList.add('active');
        tabMenu[0].classList.add('active');
        
        function trocaTabmenu(index) {
            menuItens.forEach((item) => {
                item.classList.remove('active');
            });

            menuItens[index].classList.add('active');
        }

        tabMenu.forEach((listas, index) => {
            listas.addEventListener('click', (event) => {
                event.preventDefault(); 
                trocaTabmenu(index);
                tabMenu.forEach(link => link.classList.remove('active'));
                listas.classList.add('active');
            });
        });
    }
}
