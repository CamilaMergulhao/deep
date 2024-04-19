export default function accordion() {
    
    
    const infosPerguntas = document.querySelectorAll('[data-accordion="js-accordion"], .treinos-infos-title')
        
    if(infosPerguntas.length){
    
    function listClick(){
    
    this.classList.toggle('respostaAtiva');
  
     const infoRespostas = this.nextElementSibling;

     if (infoRespostas) {
         infoRespostas.classList.toggle('respostaAtiva');
     }
  }
    
    
  infosPerguntas.forEach((item) => {
    
        item.addEventListener('click', listClick);
    });
}








}




