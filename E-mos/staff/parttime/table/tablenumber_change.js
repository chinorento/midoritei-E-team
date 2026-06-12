(function(){
    const input = document.getElementById('tableInput');
    const btnBack = document.getElementById('btnBack');
    const btnSave = document.getElementById('btnSave');
    const confirmModal = document.getElementById('confirmModal');
    const btnCancel = document.getElementById('btnCancel');
    const btnConfirm = document.getElementById('btnConfirm');

    function openConfirmation(){
        const value = input.value.trim();
        if(!value){
            alert('変更後のテーブル番号を入力してください。');
            input.focus();
            return;
        }
        confirmModal.classList.remove('hidden');
    }

    function changeTableNumber(){
        const current = document.getElementById('currentTable').textContent;
        const value = input.value.trim();
        confirmModal.classList.add('hidden');
        alert(`${current} を ${value} に変更しました。`);
    }

    btnSave.addEventListener('click', openConfirmation);
    btnCancel.addEventListener('click', ()=> confirmModal.classList.add('hidden'));
    btnConfirm.addEventListener('click', changeTableNumber);

    btnBack.addEventListener('click', ()=>{
        window.location.href = 'table_menu.html';
    });

    input.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter'){
            e.preventDefault();
            openConfirmation();
        }
    });
})();