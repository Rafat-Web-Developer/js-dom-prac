
// //--Body secelctor--//
// document.body.style.background = 'salmon';
const body = document.body;
body.style.background = 'salmon';

// //--Tag secelctor--//
const allh1 = document.getElementsByTagName('h1');
for (const h1 of allh1) {
    h1.style.color = '#4f4f7a';
    h1.style.textAlign = 'center';
    h1.style.fontSize = '40px';
    h1.innerText = "Play with DOM using JS, HTML and CSS";  
}

// //--Id secelctor--//
const blogsId = document.getElementById('blogs');
blogsId.style.border = '5px solid black';
blogsId.style.margin = '10px';
blogsId.style.padding = '10px';
blogsId.style.borderRadius = '5px';


// //--Create new HTML element--//
const h2 = document.createElement('h2');
h2.innerText = 'Blog-4';
const p = document.createElement('p');
p.innerText = 'This is my custom create html element.';
const article = document.createElement('article');
article.append(h2);
article.setAttribute('class', 'blog');
article.append(p);
blogsId.append(article);

const allh2 = document.getElementsByTagName('h2');
for (const h2 of allh2) {
    h2.style.color = 'white';
}

// //--Class secelctor--//
const blogs = document.getElementsByClassName('blog');
for (const blog of blogs) {
    blog.style.border = '4px solid black';
    blog.style.margin = '10px';
    blog.style.padding = '10px';
    blog.style.borderRadius = '5px';
}

// //--Query secelctor--//
const allP = document.querySelectorAll('p');
for (const p of allP) {
    p.style.fontWeight = 'bold';
    p.style.fontSize = '20px';
}
