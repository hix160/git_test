const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const content2 = document.createElement("p"); //    a <p> with red text that says “Hey I’m red!”
content2.classList.add("content2");
content2.textContent = "Hey I'm red!";
content2.style.color = "red";

const content3 = document.createElement("h3"); //   an <h3> with blue text that says “I’m a blue h3!”
content3.classList.add("content3");
content3.textContent = "I'm a blue h3!";
content3.style.color = "blue";

const divContainer = document.createElement("div");
divContainer.style.border = "1px solid black";
divContainer.style.backgroundColor = "pink";

// Add <h1> and <p> to the divContainer
const innerH1 = document.createElement("h1");
innerH1.textContent = "I'm in a div";
const innerP = document.createElement("p");
innerP.textContent = "ME TOO!";

// Append the inner elements to the divContainer, then to the container
divContainer.appendChild(innerH1);
divContainer.appendChild(innerP);
container.appendChild(divContainer);





container.appendChild(content);
container.appendChild(content2);
container.appendChild(content3);



/*





another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.




*/