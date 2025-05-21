const mobileButton = document.getElementById('mobile-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileButton.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
})

mobileMenu.addEventListener('click', ()=>{
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
})


function initAnimacaoScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if(sections.length){    
        const windowMetade = window.innerHeight * 0.6;
            function animaScroll(){
            sections.forEach((section)=>{
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible)
                    section.classList.add('ativo');
                  else if(section.classList.contains('ativo')){
                    section.classList.remove('ativo');
                  }
            }); 
        }
        animaScroll();
        window.addEventListener('scroll', animaScroll);
    }
    console.log('foi')
} initAnimacaoScroll();