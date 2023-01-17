const passInput = document.querySelectorAll('.js-pass'),
showHidePass = document.querySelectorAll('.show-hide-pass');


showHidePass.forEach(e => {
    e.addEventListener('click', (e) => {
        index = e.target.dataset.index;

        if(passInput[index].type == "password"){
            passInput[index].type = "text";
            e.target.src = "assets/hidePass.svg"
        }else{
            passInput[index].type = "password";
            e.target.src = "assets/showPass.svg"
        }
    })
})