const section = document.querySelector('section');
const close = document.querySelector('#cross');
const adding = document.querySelector('.add-a-book');
const submit = document.querySelector('.button');
const edit = document.querySelector('#edit');
const form = document.querySelector('.bg-form');

adding.addEventListener('click',()=>{
    resetForm();
    form.style.display = 'flex';
})

submit.addEventListener('click',()=>{
    showNewBook(submitNewBook());
    form.style.display = 'none';
});

close.addEventListener('click',()=> form.style.display = 'none');


/*Segun The Odin Project*/

function Book(title,author,pages,description,read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.description = description,
    this.read = read
};

const submitNewBook = ()=>{
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let description = document.getElementById('description').value;
    let read = document.getElementById('read').checked;

    let book = new Book(title,author,pages,description,read)

    return book;
};

const resetForm = ()=>{
    title.value = '';
    author.value = '';
    pages.value = undefined;
    description.value = '';
    read.checked = false;
};

const showNewBook = (book)=>{

    let trash = document.createElement('img');
    trash.setAttribute('src',"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im00MjQgNjRoLTg4di0xNmMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4aC02NGMtMjYuNTEgMC00OCAyMS40OS00OCA0OHYxNmgtODhjLTIyLjA5MSAwLTQwIDE3LjkwOS00MCA0MHYzMmMwIDguODM3IDcuMTYzIDE2IDE2IDE2aDM4NGM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2di0zMmMwLTIyLjA5MS0xNy45MDktNDAtNDAtNDB6bS0yMTYtMTZjMC04LjgyIDcuMTgtMTYgMTYtMTZoNjRjOC44MiAwIDE2IDcuMTggMTYgMTZ2MTZoLTk2eiIvPjxwYXRoIGQ9Im03OC4zNjQgMTg0Yy0yLjg1NSAwLTUuMTMgMi4zODYtNC45OTQgNS4yMzhsMTMuMiAyNzcuMDQyYzEuMjIgMjUuNjQgMjIuMjggNDUuNzIgNDcuOTQgNDUuNzJoMjQyLjk4YzI1LjY2IDAgNDYuNzItMjAuMDggNDcuOTQtNDUuNzJsMTMuMi0yNzcuMDQyYy4xMzYtMi44NTItMi4xMzktNS4yMzgtNC45OTQtNS4yMzh6bTI0MS42MzYgNDBjMC04Ljg0IDcuMTYtMTYgMTYtMTZzMTYgNy4xNiAxNiAxNnYyMDhjMCA4Ljg0LTcuMTYgMTYtMTYgMTZzLTE2LTcuMTYtMTYtMTZ6bS04MCAwYzAtOC44NCA3LjE2LTE2IDE2LTE2czE2IDcuMTYgMTYgMTZ2MjA4YzAgOC44NC03LjE2IDE2LTE2IDE2cy0xNi03LjE2LTE2LTE2em0tODAgMGMwLTguODQgNy4xNi0xNiAxNi0xNnMxNiA3LjE2IDE2IDE2djIwOGMwIDguODQtNy4xNiAxNi0xNiAxNnMtMTYtNy4xNi0xNi0xNnoiLz48L2c+PC9zdmc+");
    trash.setAttribute('id','trash');

    let showing = createDiv(book.title,book.author,book.read);

    trash.addEventListener('click',(e)=>{
        let bgDeleter = document.querySelector('.bg-deleter');
        let deleteTitle = document.querySelector('#book-delete');
        deleteTitle.textContent = showing.title;
        bgDeleter.style.cssText = 'display: flex;';
        e.stopPropagation();

        question(showing,bgDeleter);
    });

    const question = (actualBook,questionBox)=>{
        let answers = document.querySelectorAll('.y-o-n');

        answers.forEach(answer => {
            answer.addEventListener('click',(e)=>{
                if (answer.id === 'no') {
                    questionBox.style.cssText = 'display: none;';
                }else {
                    section.removeChild(actualBook);
                    questionBox.style.cssText = 'display: none;';
                }
                e.stopPropagation();
            })
        });
    }

    showing.appendChild(trash);
    section.insertBefore(showing, adding);
    
    showing.addEventListener('click',()=>{
        editForm(book);
        form.style.display = 'flex';
    });
};

const createDiv = (title,author,read)=>{
    const div = document.createElement('div');
    div.classList.add('book');

    const h1 = document.createElement('h1');
    h1.textContent = title;
    const h2 = document.createElement('h2');
    h2.textContent = author;
    const readOrNot = document.createElement('p');

    if (read) {
        readOrNot.textContent = `(Already read)`;
    }else{
        readOrNot.textContent = `(Unread)`;
    };

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(readOrNot);
    div.setAttribute('title',title);

    return div;
}


/*Show Specifics*/

const editForm = (book)=>{
    let description = [
        document.querySelector('#title'),
        document.querySelector('#author'),
        document.querySelector('#pages'),
        document.querySelector('#description')
    ];

    description.forEach(div => {
        div.value = book[div.id];
    });

    let itsRead = document.querySelector('#read');
    if (book.read) {
        itsRead.checked = true;
    }else {
        itsRead.checked = false;
    }

    /*edit.classList.remove('button');
    edit.addEventListener('click',()=>{

    })*/
};