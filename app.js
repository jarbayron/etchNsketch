let user_input = 60;

let div=document.querySelector('.grid_area')

let button = document.querySelector('button')

function attrStringGen(string){
    let el_width = 960/string;
    return "display: grid; grid-template-columns: repeat("+string+","+el_width+"px);grid-auto-rows:"+el_width+"px"+";align-items: center; justify-content: center;";
}

function clearEtch () {
    let divs = document.querySelectorAll('.key');
    Array.from(divs).forEach(td=>td.style.background = 'black');
}

function prompter() {
    let num = window.prompt('How many columns do you want?');
    while (num>100) {
        num = window.prompt('How many columns do you want?');
    } 
    return num;
}

function createDIVs(x) {
    let count= x *x;
    let el_width = 960/x;
    for (i=0; i<count;i++) {
        let div_x = document.createElement('div');
        div_x.classList.add('key');
        div_x.setAttribute("style","height:"+el_width+"px; background-color: black");
        div_x.addEventListener('mouseover', function () {div_x.style.background= 'white';});
        div.appendChild(div_x);
    }
}

createDIVs(user_input);
div.setAttribute("style",attrStringGen(user_input)); 

button.addEventListener('click', function() {
    clearEtch();
    let cols = prompter();
    let area = document.querySelectorAll('.key');
    area.forEach(n => n.remove());
    createDIVs(cols);
    div.setAttribute("style", attrStringGen(cols));
    });

//create grid basis with 4x4

//create grid with any # of columns till max 100

//add eventlistenetrs for hover: changing background color of squar to random color. 

//add an actual user input UI



/*for (i=0; i<count-1; i++) {
    let child_div = document.createElement("div");
    div.appendChild(child_div);
    console.log(i);
}*/