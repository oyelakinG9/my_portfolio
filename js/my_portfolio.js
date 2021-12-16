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
  const other = createCard('assets/images/Img_Placeholder1.png', 'assets/images/Img_Placeholder3.png', 'Profesional Art Printing Data',
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

function generateSkills(arr) {
  let skills = '';
  arr.forEach((tag) => {
    skills += `<li class="skill">${tag}</li>`;
  });
  return skills;
}

function popUpWindow(cardObject) {
  const parentModal = document.createElement('article');
  parentModal.id = 'parentModal';
  parentModal.classList.add('parentModal');

  const parentModalContent = ` 
  <div class="modal">
  <div class="modal-header">
    <div>
      <div class="modal-header">
        <div class="modal-headline">
          <h2 class="d-none-lg">${cardObject.title}</h2>
          <h2 class="d-none d-block-lg">${cardObject.titleDesktop}</h2>
        </div>
        <div>
          <button id="closeButton" class="closeButton"><p>X<p></button>
        </div>
      </div>
      <div class="card-skills">
        <ul class="skills d-flex list-style-none modal-skill">
          ${generateSkills(cardObject.tags)}
        </ul>
      </div>
    </div>
  </div>
  <div class="modal-story d-flex-lg">
    <div class="modal-img">
      <img src=${cardObject.imageMobile} alt="modal1" class="d-none-lg" width="91%">
      <img src=${cardObject.imageDesktop} alt="modal2" class="d-none d-block-lg" width="90%">
    </div>
    <div class="modaltext">
      <p>${cardObject.longDescription}</p>
      <div class="modalbtn">
        <a rel="noopener noreferrer" href= ${cardObject.linkLive} aria-label="See Live" target="_blank" class="card-button">See Live <img src="assets/images/seelive1.png" alt="seelive"></a>
        <a rel="noopener noreferrer" href= ${cardObject.linkSource} aria-label="See Source" target="_blank" class="card-button">See Source <img src="assets/images/seesource.png" alt="seesource"></a>
      </div>
    </div>
  </div>
</div>`;

  parentModal.innerHTML = parentModalContent;
  workSection.appendChild(parentModal);

  const closeButton = document.querySelector('#closeButton');
  closeButton.addEventListener('click', () => {
    workSection.removeChild(parentModal);
  });
}

function render() {
  cards.forEach((cardObject) => {
    const cardArticle = document.createElement('article');
    cardArticle.classList.add('card-work');
    workSection.appendChild(cardArticle);

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('cards');

    const cardName = document.createElement('div');
    cardName.classList.add('card-name');

    const title = document.createElement('h2');
    title.textContent = cardObject.title;
    cardName.appendChild(title);

    const desktopTitle = document.createElement('h2');

    const cardText = document.createElement('div');
    cardText.classList.add('card-text');

    const cardDescription = document.createElement('p');
    cardText.appendChild(cardDescription);
    cardDescription.textContent = cardObject.shortDescription;

    const cardSkills = document.createElement('div');
    cardSkills.classList.add('card-skills');

    const listSkills = document.createElement('ul');
    listSkills.classList.add('skills', 'd-flex', 'list-style-none');
    cardSkills.appendChild(listSkills);

    const tagArray = [];
    cardObject.tags.forEach((tag) => {
      const listItem = document.createElement('li');
      listItem.classList.add('skill');
      listItem.textContent = tag;
      listSkills.appendChild(listItem);
      tagArray.push(listItem);
    });

    const cardButton = document.createElement('button');
    cardButton.classList.add('card-button');
    cardButton.textContent = 'See Project';
    cardSkills.appendChild(cardButton);
    cardButton.addEventListener('click', () => {
      popUpWindow(cardObject);
    });

    if (cardObject.id === 1) {
      cardDiv.classList.add('d-flex-lg');
      const cardImg = document.createElement('div');
      cardImg.classList.add('card-img');
      const cardImgContent = `
      <img src=${cardObject.imageMobile} alt="fantastic-card-image" width="290" class="d-none-lg" />
      <img src=${cardObject.imageDesktop} alt="fantastic-card-image2" class="d-none d-block-lg width-93">`;
      cardImg.innerHTML = cardImgContent;
      cardDiv.appendChild(cardImg);

      const story = document.createElement('div');
      story.classList.add('story');
      story.appendChild(cardName);
      cardDiv.appendChild(story);

      title.classList.add('margin-right-23-lg');
      story.appendChild(cardText);

      story.appendChild(cardSkills);
    } else {
      cardDiv.classList.add('card-background-image', `card-background-image-lg${cardObject.id - 1}`, 'pos-absolute-lg');
      cardDiv.appendChild(cardName);

      title.classList.add('card-headline', 'd-none-lg');
      desktopTitle.classList.add('card-headline', 'd-none', 'd-block-lg');
      desktopTitle.textContent = cardObject.titleDesktop;
      cardName.appendChild(desktopTitle);
      cardDescription.classList.add('card-headline-text');
      cardDiv.appendChild(cardText);
      cardDiv.appendChild(cardSkills);

      tagArray.forEach((tag) => {
        tag.classList.add('skillcard');
      });

      cardButton.classList.add('btn-cards', 'd-none-lg');
    }

    if (cardObject.id === 2) {
      cardName.classList.add('d-none-lg');
      title.classList.remove('d-none-lg');
      cardName.removeChild(desktopTitle);
      cardText.classList.add('d-none-lg');
      listSkills.classList.add('d-none-lg');
      cardButton.classList.add('btn-card-lg');
      cardButton.classList.remove('d-none-lg');
    }

    cardArticle.appendChild(cardDiv);
  });
}

const form = document.querySelector('form');

const errorMessage = document.querySelector('.error');

const email = document.querySelector('#email');
const emailContainer = document.querySelector('#emailContainer');

function showError(msg) {
  errorMessage.textContent = msg;
  errorMessage.classList.remove('d-none', 'd-none-lg');
  emailContainer.classList.add('error-icon');
}

function checkemail() {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    showError('Email should not be blank');
    return false;
  }

  const emailRegex = /[A-Z]/g;

  if (emailValue.match(emailRegex)) {
    showError(`Email field doesn't allow capital letters. It should be ${emailValue.toLowerCase()}`);
    return false;
  }

  return true;
}

email.addEventListener('input', () => {
  errorMessage.textContent = '';
  errorMessage.classList.add('d-none', 'd-none-lg');
  emailContainer.classList.remove('error-icon');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (checkemail()) {
    form.submit();
  }
});

render();
