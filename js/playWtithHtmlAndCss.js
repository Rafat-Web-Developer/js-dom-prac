// //--common JS--//
document.body.style.backgroundColor = 'salmon';

// //--Create all elements--//
const header = document.createElement('header');
const h1 = document.createElement('h1');
const main = document.createElement('main');
const blogsSection = document.createElement('section');
const article = document.createElement('article');
const h2 = document.createElement('h2');

// //--Set Attribute--//
article.setAttribute('class', 'blog');

// //--Set all inner text--//
h1.innerText = 'Create this page one using JS';
h2.innerText = 'Blog -1 ';


// //--All appends--//
header.append(h1);
document.body.append(header);
main.append(blogsSection);
blogsSection.append(article);
article.append(h2);
document.body.append(main);

// //--All Selectors--//
const allBlog = document.getElementsByClassName('blog');



// //--Apply CSS--//
header.style.border = '3px solid black';
h1.style.textAlign = 'center';
blogsSection.style.border = '3px solid black';
blogsSection.style.margin = '10px';
blogsSection.style.padding = '10px';
blogsSection.style.borderRadius = '5px';
for (const blog of allBlog) {
    blog.style.border = '3px solid black';
    blog.style.margin = '10px';
    blog.style.padding = '10px';
    blog.style.borderRadius = '5px';
}