document.addEventListener('click', ()=>{

    let elem = document.getElementById('elem-content')

    const dataModal = document.querySelectorAll('[data-modal]'),
          closeBtn = document.querySelector('[data-close]'),
          modal = document.querySelector('.modal');
    
    
        dataModal.forEach(item => {
            item.addEventListener('click', () => {
                modal.classList.remove('hide');
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            })
        })
    
        function closeModal(){
            modal.classList.remove('show');
            modal.classList.add('hide');
            document.body.style.overflow = '';
        }


        closeBtn.addEventListener('click', closeModal);


        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains('show')) { 
                closeModal();
            }
        });

})



    