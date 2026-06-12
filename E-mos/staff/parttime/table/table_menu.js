(function(){
    const btnQr = document.getElementById('btnQr');
    const btnTableNumber = document.getElementById('btnTableNumber');

    btnQr.addEventListener('click', ()=>{
        window.location.href = 'qr_make.html';
    });

    btnTableNumber.addEventListener('click', ()=>{
        window.location.href = 'tablenumber_change.html';
    });
})();
