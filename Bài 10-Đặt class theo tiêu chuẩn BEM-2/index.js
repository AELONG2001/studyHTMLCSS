// Toast function
function toast ({
    title = '', 
    message = '', 
    type = 'success', 
    duration = 3000
}) {
      const main= document.getElementById('toast');

    
       if(main) {
            const toast = document.createElement('div');
            
            // Auto remove toast
            const autoRemoveId = setTimeout(function (){
                    main.removeChild(toast);
                }, duration + 1000);

            //Remove toast when click
            toast.onclick = function (even) {
                if(even.target.closest('.toast__close')) {
                    main.removeChild(toast);
                    clearTimeout(autoRemoveId);
                }
            }

            const icons = {
                success: 'fas fa-check-circle',
                warning: 'fas fa-exclamation-triangle',
                error: 'fas fa-exclamation-circle'
            }
            const icon = icons[type];
            const delay = (duration / 1000).toFixed(2);

            toast.classList.add('toast', `toast--${type}`);
            toast.style.animation = `slideInLeft ease .3s, fadeout linear 1s ${delay}s forwards`;
            toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>

                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>

                    <div class="toast__close">
                        <i class="fas fa-times-circle"></i>
                    </div> 
                        `;
                main.appendChild(toast);

       }
}

function showSuccessToast() {
    toast({
    title: 'Thành công',
    message: 'Bạn đã đăng kí tài khoản thành công',
    type: 'success',
    duration: 5000
});      
}

function showErrorToast() {
    toast({
    title: 'Thất bại',
    message: 'Vui lòng điền đầy đủ thông tin',
    type: 'error',
    duration: 5000
    });
}   