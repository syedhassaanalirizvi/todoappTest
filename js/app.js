window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form.add');
    const addButton = document.querySelector('#addButton');
    const itemToAdd = document.querySelector('#itemToAdd');
    const ul = document.querySelector('.todo');
    const body = document.querySelector('body');
    const app = document.querySelector(".app");


    app.addEventListener('click', function(event){
        event.stopPropagation();
    })



    body.addEventListener('click', function(event){
        ul.innerHTML = "";
    })


    form.addEventListener('submit',function (){
        event.preventDefault();
        if(itemToAdd.value){
            const newItem = createItem(itemToAdd.value);
            ul.appendChild(newItem);
            itemToAdd.value = '';
            itemToAdd.focus();
        }

    })
//listener2/hkfs
    function createItem(val){
        const item = document.createElement('li');
        const span = document.createElement('span');
        const delBtn = document.createElement('button');

        span.textContent = val;
        delBtn.textContent = 'Delete';
        delBtn.classList.add('btn-link');

        item.appendChild(span);
        item.appendChild(delBtn);

        delBtn.addEventListener('click',function (){
            item.parentNode.removeChild(item);
        })

        return item;
    }

});

