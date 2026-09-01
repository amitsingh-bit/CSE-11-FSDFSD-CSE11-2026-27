const bookdata=[
    {
        name:"Book1",
        price:4.99,
    }, 
    {
        name:"Book2",
        price:5.99,
        
    },
    {
        name:"Book3",
        price:6.99,
    },
]
const div=document.createElement('div');
div.setAttribute('class','card');
const image=document.createElement('img');
image.setAttribute('src'," ");
image.setAttribute("width","100px");
image.setAttribute("height","100px");
const h2=document.createElement('h2');
h2.innerText="Price:$4.99";
const bt=document.createElement("button");
bt.innerText="AddtoCart";
div.appendChild(image);
div.appendChild(h2);
div.appendChild(bt);
const parent=document.getElementById("root");
parent.appendChild(div);