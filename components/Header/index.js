// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //creating
    const header1=document.createElement('div');
    const date1=document.createElement('span');
    const Title=document.createElement('h1');
    const temp=document.createElement('span');

    //styling 
    header1.classList.add('header');
    date1.classList.add('date');
    temp.classList.add('temp');

    //appending 
    header1.appendChild(date1);
    header1.appendChild(Title);
    header1.appendChild(temp);

    //updating 
    date1.textContent="SMARCH 28, 2019";
    Title.textContent="Lambda Times";
    temp.textContent="98°";



    return header1;

}

const header_container=document.querySelector('.header-container');
header_container.append(Header());