const navBar = document.querySelector('.navbar');

navBar.addEventListener('click', () => {
  navBar.classList.toggle('change');
});

const cards = [];
let idCount = 0;

function createCard(imageMobile, imageDesktop, title, titleDesktop, shortDescription,
  longDescription, tags, linkLive, linkSource) {
  idCount += 1;
  return {
    id: idCount,
    imageMobile,
    imageDesktop,
    title,
    titleDesktop,
    shortDescription,
    longDescription,
    tags,
    linkLive,
    linkSource,
  };
}

const postsDisplay = createCard('assets/images/Img_Placeholder1.png', 'assets/images/Img_Placeholder3.png', 'Multi-Post Stories',
  'Multi-Post Stories', `A daily selection of privately personalized reads; no accounts or sign-ups required. 
has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
took a standar dummy text.`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
but also the leap into electronic typesetting, remaining essent`, ['css', 'html', 'bootstrap', 'Ruby'],
  'https://oyelaking9.github.io/my_portfolio/', 'https://github.com/oyelakinG9/my_portfolio');
cards.push(postsDisplay);

const special = createCard('assets/images/Img_Placeholder1.png', 'assets/images/Img_Placeholder3.png', 'Profesional Art Printing Data',
  'Profesional Art Printing Data', `A daily selection of privately personalized reads; no accounts or sign-ups required. 
has been the industry's standard`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
but also the leap into electronic typesetting, remaining essent`, ['html', 'bootstrap', 'Ruby'],
  'https://oyelaking9.github.io/my_portfolio/', 'https://github.com/oyelakinG9/my_portfolio');
cards.push(special);

const titles = ['Data Dashboard Healthcare', 'Website Portfolio', 'Profesional Art Printing Data'];

let index = 2;

while (idCount <= 6) {
  if (index > 4) {
    index = 2;
  }
  const other = createCard('assets/images/Img_Placeholder1.png', `assets/images/Img_Placeholder3.png`, 'Profesional Art Printing Data',
    `${titles[index - 2]}`,
    `A daily selection of privately personalized reads; no accounts or sign-ups required. 
  has been the industry's standard`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
 took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
 but also the leap into electronic typesetting, remaining essent`, ['html', 'bootstrap', 'Ruby'],
    'https://oyelaking9.github.io/my_portfolio/', 'https://github.com/oyelakinG9/my_portfolio');
  cards.push(other);
  index += 1;
}

const workSection = document.querySelector('#work-section');

function render() {
  cards.forEach((cardObject) => {
    const cardArticle = document.createElement('article');
    cardArticle.classList.add('card-work');
    workSection.appendChild(cardArticle);

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('cards');

    if (cardObject.id === 1) {
      cardDiv.classList.add('d-flex-lg');
    } else {
      cardDiv.classList.add('card-background-image', `card-background-image-lg${cardObject.id - 1}`, 'pos-absolute-lg');
    }

    cardArticle.appendChild(cardDiv);
  });
}

render();