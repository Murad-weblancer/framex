const getBtn = document.querySelectorAll('button')

for(let i = 0; i<=getBtn.length; i++){
    getBtn[i].addEventListener('click',()=>{
        alert(123)
    })
}