// // Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1"); //添加引用
// // Update the text content of the <h1>
// myHeading.textContent = "hello"; //改变属性Hello world!

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// function setUserName() {
//   const myName = prompt("Please enter your name.");
//   localStorage.setItem("name", myName);
//   myHeading.textContent = `Mozilla is cool, ${myName}`;
// }


function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}



if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
