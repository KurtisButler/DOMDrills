document.addEventListener("DOMContentLoaded", function () {
  let div = document.createElement("div");
  div.className = "header-container";

  let h1 = document.createElement("h1");
  let h1text = document.createTextNode("This is an h1");
  h1.appendChild(h1text);
  h1.className = "h1";
  div.appendChild(h1);
  document.body.appendChild(div);

  let h2 = document.createElement("h2");
  let h2text = document.createTextNode("This is an h2");
  h2.appendChild(h2text);
  div.appendChild(h2);
  h2.className = "h2";

  let h3 = document.createElement("h3");
  let h3text = document.createTextNode("This is an h3");
  h3.appendChild(h3text);
  div.appendChild(h3);
  h3.className = "h3";

  let h4 = document.createElement("h4");
  let h4text = document.createTextNode("This is an h4");
  h4.appendChild(h4text);
  div.appendChild(h4);
  h4.className = "h4";

  let h5 = document.createElement("h5");
  let h5text = document.createTextNode("This is an h5");
  h5.appendChild(h5text);
  div.appendChild(h5);
  h5.className = "h5";

  let h6 = document.createElement("h6");
  let h6text = document.createTextNode("This is an h6");
  h6.appendChild(h6text);
  div.appendChild(h6);
  h6.className = "h6";

  h1.addEventListener("click", function () {
    let myColors = setRandomColor();
    h1.style.color = myColors;
  });

  h2.addEventListener("click", function () {
    let myColors = setRandomColor();
    h2.style.color = myColors;
  });

  h3.addEventListener("click", function () {
    let myColors = setRandomColor();
    h3.style.color = myColors;
  });

  h4.addEventListener("click", function () {
    let myColors = setRandomColor();
    h4.style.color = myColors;
  });

  h5.addEventListener("click", function () {
    let myColors = setRandomColor();
    h5.style.color = myColors;
  });

  h6.addEventListener("click", function () {
    let myColors = setRandomColor();
    h6.style.color = myColors;
  });


  let myColors = [
    "red",
    "blue",
    "yellow",
    "pink",
    "green",
    "purple",
    "grey",
    "orange",
  ];

  function setRandomColor() {
    let randomColor = myColors[Math.floor(Math.random() * myColors.length)];
    return randomColor;
  }

  let button = document.createElement("button");
  let btntext = document.createTextNode("Click to add new list item");
  button.appendChild(btntext);
  button.className = "myButton";
  div.appendChild(button);
  button.addEventListener("click", createList);
  let x = 1;

  function createList() {
    let newList = document.createElement("ul");
    let newListItem = document.createElement("li");
    let liText = document.createTextNode(`This is list item ${x}`);
    x += 1;
    div.appendChild(newList);
    newList.appendChild(newListItem);
    newListItem.appendChild(liText);

    newListItem.addEventListener("click", function () {
      let randomColor = setRandomColor();
      newListItem.style.color = randomColor;
    });

    newListItem.addEventListener("dblclick", function () {
      this.remove();
    });
  }
});
