const sort = document.querySelector('.b1');
const list = document.querySelector('ul');
let sorted = false;


const a = document.querySelector(".a1");

a.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    const todo = d.get('a3');
    addListItem(todo);
});

function addListItem(todo) {
    const li = document.createElement('li');
    li.classList.add('b333');
    const span = document.createElement('span');
    span.innerText = todo;

    const del = document.createElement('button');
    del.type = 'button';
    del.classList.add('a3-btn');
    del.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });

    li.append(span, del);
    list.append(li);
}

sort.addEventListener('click', (event) => {
    const arr = new Array ();
    const siyahi = document.querySelectorAll('li');
    siyahi.forEach(li => {
        arr.push(li.firstElementChild.innerText);

    });
    if(!sorted) {
        arr.sort((a,b) => {
            if(a > b) return 1;
            if(a < b) return -1;
        });
        sorted = true;
        event.target.classList.remove('b1');
        event.target.classList.add('b1-2');
    } else {
        arr.sort((a,b) => {
            if(a < b) return 1;
            if(a > b) return -1;
            return 0;
        });
        sorted = false;
        event.target.classList.remove('b1-2');
        event.target.classList.add('b1');
    }
    list.innerHTML = '';
    arr.forEach(item =>{
        addListItem(item);
    });
});


















