// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


function topics(tabs){
    const tab=document.createElement('div');
    tab.classList.add('tab');
    tab.innerHTML=tabs;
    return tab;
}
const title=document.querySelector('.title');
axios
.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then((res) => {

  console.log("Here is the res: ", res);
  res.data.topics.forEach((element) => {
    title.append(topics(element));
  });
 // cards.append(github_card(res.data));
})
.catch((err) => {
  console.log("There was an error: ", err);
});

