let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lixin.jpg') {
         myImage.setAttribute('src','images/doma.png');
         myImage.setAttribute('width','900');
    } else {
          myImage.setAttribute('src','images/lixin.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = '李信酷毙了，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '李信酷毙了，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}