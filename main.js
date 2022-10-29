let elements = document.getElementsByName('cssProperty');
let box = document.getElementById('modify');

function set(){
    

    for( let i=0; i < elements.length; i++){
        
        let cssProperty = elements [i].getAttribute('id');
        let cssValue = elements [i].value;

        box.style[ cssProperty ] = cssValue;
    }
}

document.getElementById('btn').addEventListener('click', set);