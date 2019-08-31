// Book class to represent book
class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}
// UI class to handle UI tasks
class UI {
    static displaybooks(){
        const books =[ 
            {
                title:'Ramayan',
                author:'Valmiki',
                isbn:'1234'
            }
        ];
        UI.clearFields();
        books.forEach(book=>UI.addBookToList(book))
    }
    static addBookToList(book){
        const list = document.getElementById('book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><button class="btn btn-danger btn-sm px-3 delete">X</button></td>
        `
        //<td><button class="btn btn-warning px-3 btn-sm edit">Edit</button></td>
        list.appendChild(row);
    }
    static clearFields(){
        document.getElementById('title').value ='';
        document.getElementById('author').value ='';
        document.getElementById('isbn').value ='';
    }
    static deleteBook(el){
        el.parentElement.parentElement.remove();
    }
    static showAlert(message,classname){
        const section = document.createElement('section');
        section.className = `alert alert-${classname}`;
        section.appendChild(document.createTextNode(message));
        const Appcontainer = document.querySelector('.app');
        const FormContainer = document.querySelector('.form');
        Appcontainer.insertBefore(section,FormContainer);
        setTimeout(()=>document.querySelector('.alert').remove(),3000);
        clearTimeout(4000);
    }
    // static editBook(el){
    //     const books =[ 
    //         {
    //             title:'Ramayan',
    //             author:'Valmiki',
    //             isbn:'1234'
    //         }
    //     ];
    //     const id = el.parentElement.parentElement.children[2].innerText;
    //     const book = books.filter(book=>book.isbn ===id);
    //     const b_title = book[0]['title'];
    //     const b_author = book[0]['author'];
    //     const b_isbn = book[0]['isbn'];
    //     document.getElementById('title').value =b_title;
    //     document.getElementById('author').value =b_author ;
    //     document.getElementById('isbn').value =b_isbn ;
    //     const title = document.getElementById('title').value;
    //     const author = document.getElementById('author').value;
    //     const isbn = document.getElementById('isbn').value;
    //     if(title ===''|| author ===''||isbn ===''){
    //         UI.showAlert('Provide valid inputs for all fields','danger');
    //     }else if(title !==b_title || author !==b_author || isbn !== b_isbn){
    //         document.querySelector('.submit').disabled = false;
    //         const book = new Book(title,author,isbn);
    //         UI.addBookToList(book);
    //         UI.showAlert('Book Added to the list','success')
    //         UI.clearFields();
    //     }else{
    //         document.querySelector('.submit').disabled = true;
    //     }
    // }
}
//Store class to handle storage
// Events to display,add and delete books
document.addEventListener('DOMContentLoaded',UI.displaybooks);
document.getElementById('book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    if(title ===''|| author ===''||isbn ===''){
        UI.showAlert('Provide valid inputs for all fields','danger');
    }else{
        const book = new Book(title,author,isbn);
        UI.addBookToList(book);
        UI.showAlert('Book Added to the list','success')
        UI.clearFields();
    }
});
document.getElementById('book-list').addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        UI.deleteBook(e.target);
        UI.showAlert('Book deleted successfully','success');
    }
    //else if(e.target.classList.contains('edit')){
    //     document.querySelector('.submit').textContent ='Update Book';
    //     UI.editBook(e.target);
    // }
});

