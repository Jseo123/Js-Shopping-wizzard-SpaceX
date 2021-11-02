//const elements
var ImgFirst = document.querySelector(".ImgFirst");
var minitureImg = document.querySelector(".mySlides");

//get elements
const colorTitle = document.querySelector('.color .title');
const colorOptions = document.querySelectorAll('.color .option');

//bind listeners to these elements
colorTitle.addEventListener('click', toggleMenuDisplay);

colorOptions.forEach(option => option.addEventListener('click',handleOptionSelected));

document.querySelector('.color .title').addEventListener('change',handleTitleChange);

// chance img miniture to First img
minitureImg.addEventListener("click", change);


function change (e) {
  ImgFirst.src = e.target.src ;
}

function toggleClass(elem,className){
  if (elem.className.indexOf(className) !== -1){
    elem.className = elem.className.replace(className,'');
  }
  else{
    elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
  }

  return elem;
}

function toggleDisplay(elem){
  const curDisplayStyle = elem.style.display;

  if (curDisplayStyle === 'none' || curDisplayStyle === ''){
    elem.style.display = 'block';
  }
  else{
    elem.style.display = 'none';
  }

}

function toggleMenuDisplay(e){
  const color = e.currentTarget.parentNode;
  const menu = color.querySelector('.menu');
  const icon = color.querySelector('.fa-angle-right');

  toggleClass(menu,'hide');
  toggleClass(icon,'rotate-90');
}

function handleOptionSelected(e){
  toggleClass(e.target.parentNode, 'hide');			

  const id = e.target.id;
  const newValue = e.target.textContent + ' ';
  const titleElem = document.querySelector('.color .title');
  const icon = document.querySelector('.color .title .fa');


  titleElem.textContent = newValue;
  titleElem.appendChild(icon);

  //trigger custom event
  document.querySelector('.color .title').dispatchEvent(new Event('change'));
    //setTimeout is used so transition is properly shown
  setTimeout(() => toggleClass(icon,'rotate-90',0));
}

function handleTitleChange(e){
  const result = document.getElementById('result');

  result.innerHTML = 'The result is: ' + e.target.textContent;
}

