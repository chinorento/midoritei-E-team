(function(){
    const buttons = document.querySelectorAll('.menu-button');
    buttons.forEach(button => {
        button.addEventListener('click', ()=>{
            const target = button.dataset.target;
            if(target) window.location.href = target;
        });
    });
})();