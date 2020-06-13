// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function article_cards(article){
    //creating
    const card=document.createElement('div');
    const headline=document.createElement('div');
    const author=document.createElement('div');
    const img_container=document.createElement('div');
    const author_img=document.createElement('img');
    const author_name=document.createElement('span');

    //styling 
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    img_container.classList.add('img-container');

    //appending 
    
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(img_container);
    img_container.appendChild(author_img);
    img_container.appendChild(author_name);
    
    //content update
   
    headline.innerHTML=article.headline;
    author_img.src=article.authorPhoto;
    author_name.innerHTML=article.authorName;


    const cards_container=document.querySelector('.cards-container');
    cards_container.append(card);

    return card;

}


axios
.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then((res) => {
  console.log(res);
 
  for(let i=0;i<res.data.articles.bootstrap.length;i++){
    article_cards(res.data.articles.bootstrap[i]);
  }
  for(let i=0;i<res.data.articles.javascript.length;i++){
    article_cards(res.data.articles.javascript[i]);
  }
  for(let i=0;i<res.data.articles.technology.length;i++){
    article_cards(res.data.articles.technology[i]);
  }
  for(let i=0;i<res.data.articles.jquery.length;i++){
    article_cards(res.data.articles.jquery[i]);
  }
  for(let i=0;i<res.data.articles.node.length;i++){
    article_cards(res.data.articles.node[i]);
  }
 // cards.append(github_card(res.data));
})
.catch((err) => {
  console.log("There was an error: ", err);
});
