//const list = document.querySelectorAll('li');
const toggler = document.querySelectorAll('.caret');
const ulGroup = document.querySelectorAll('ul');
const liGroup = document.querySelectorAll('li');
const parentUl = document.querySelector('#myUL');

// ulGroup.forEach((data) => {
//     console.log(data.id);
//     data.classList.add("list-group-flush", "mx-auto");
// });

//function for adding bootstrap classes to html tags
parentUl.classList.add("list-group-flush", "mx-auto");


liGroup.forEach((data) => {
data.classList.add("list-group-item");

if (!data.children.length > 0){
          data.classList.add("root");
}
});

//function for toggling dropdown
toggler.forEach(toggle => {
          toggle.addEventListener('click', () => {
                    //toggle.parentElement.classList.toggle("active");
                    toggle.nextElementSibling.classList.toggle("active");
                    toggle.classList.toggle("active");

          });
});


//console.log(listlist);
