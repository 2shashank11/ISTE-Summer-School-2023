//search
const searchBar = document.forms["search-books"].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = document.getElementsByClassName("books");
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display="flex";
        }
        else {
            book.style.display="none";
        }
    })
})

//delete
var deleteButton= document.querySelectorAll("#delete");

for(var i=0; i<deleteButton.length; i++){
        deleteButton[i].addEventListener("click", function(){
            this.parentElement.parentElement.remove();
        })
}

//filter
var select= document.getElementById("filter-selection");
var fiction= document.querySelectorAll('#fiction');
var nonFiction= document.querySelectorAll('#non-fiction');

select.addEventListener('change', function(event){
    if (event.target.value=="fiction"){
        for (var i=0; i<nonFiction.length; i++){
            nonFiction[i].style.display="none";
        }
        for (var i=0; i<fiction.length; i++){
            fiction[i].style.display="flex";
        }
    }

    else if (event.target.value=="non-fiction"){
        for (var i=0; i<fiction.length; i++){
            fiction[i].style.display="none";
        }
        for (var i=0; i<nonFiction.length; i++){
            nonFiction[i].style.display="flex";
        }
    }

    else{
        for (var i=0; i<fiction.length; i++){
            fiction[i].style.display="flex";
        }
        for (var i=0; i<nonFiction.length; i++){
            nonFiction[i].style.display="flex";
        }
    }
});

//rating

var books = document.querySelectorAll("#book-description");
var stars = document.querySelectorAll("#book-description div:nth-child(2) i");
var bookLength = books.length;
var order = ["one", "two", "three", "four", "five"];
// console.log(books[0].children[1].children);

// for (var i=0; i<bookLength; i++){
//     for(var j=0; j<5; j++){
//         books[i].children[1].children[j].addEventListener("click", function(){

//         })
//     }
// } 

for (var i=0; i<bookLength; i++ ){
    var stars = document.querySelectorAll("#book-description div:nth-child(2) i");
    console.log(stars);
    stars.forEach((star, index1) => {
        star.addEventListener("click", () => {
            console.log(index1);
            stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});
}
