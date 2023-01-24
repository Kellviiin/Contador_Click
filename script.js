const button = document.querySelector('#button');
const p = document.querySelector('.escrita');
let conClick = 0
button.addEventListener('click', contar);

function contar (){
    conClick += 1
    console.log(conClick)
    p.innerText = conClick
    switch(conClick){
        case 1:
            document.body.style.backgroundColor = "red"
            break;
        case 2:
            document.body.style.backgroundColor = "blue"
            break;
        case 3:
            document.body.style.backgroundColor = "gray"
            break;
        case 4:
            document.body.style.backgroundColor = "green"
            break;
        case 5:
            document.body.style.backgroundColor = "yellow"
            conClick = 0
            break;    
    }
       

}















