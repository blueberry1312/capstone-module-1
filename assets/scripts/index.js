const featuredSpeakers = document.querySelector('.card-speakers');
const speakerBtn = document.querySelector('.speakers-btn');
const mediaqueryList = window.matchMedia('(max-width: 768px)');
const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkAbout = document.querySelector('.link-about');
const linkProgram = document.querySelector('.link-program');
const linkJoin = document.querySelector('.link-join');
const linkSponsor = document.querySelector('.link-sponsor');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('hidden');
  headerNavMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  menuBtn.classList.remove('hidden');
  headerNavMobile.classList.add('hidden');
});

linkAbout.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkProgram.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkJoin.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkSponsor.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

const speakersInfo = [
  {
    id: 0,
    url: 'assets/images/gabe-newell.jpg',
    name: 'Gabe Newell',
    position:
      'Co-founder and president of the video game company Valve',
    description:
      'Newell spent 13 years at Microsoft as the lead developer of the first three releases of the Windows operating systems, making him a millionaire.',
  },
  {
    id: 1,
    url: 'assets/images/pedro-pascal.jpg',
    name: 'Pedro Pascal',
    position: 'Chilean-born American actor',
    description:
      'Since 2019, he has starred as the title character in the Disney+ Star Wars series The Mandalorian and since 2023, he has played Joel in the HBO drama series The Last of Us.',
  },
  {
    id: 2,
    url: 'assets/images/elon-musk.jpg',
    name: 'Elon Musk',
    position: 'CEO of SpaceX, Tesla and Twitter',
    description:
      'Elon Reeve Musk is a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; owner and CEO of Twitter, Inc.; founder of The Boring Company; co-founder of Neuralink and OpenAI; and president of the philanthropic Musk Foundation.',
  },
  {
    id: 3,
    url: 'assets/images/gabe-newell.jpg',
    name: 'Gabe Newell',
    position:
      'Co-founder and president of the video game company Valve',
    description:
      'Newell spent 13 years at Microsoft as the lead developer of the first three releases of the Windows operating systems, making him a millionaire.',
  },
  {
    id: 4,
    url: 'assets/images/pedro-pascal.jpg',
    name: 'Pedro Pascal',
    position: 'Chilean-born American actor',
    description:
      'Since 2019, he has starred as the title character in the Disney+ Star Wars series The Mandalorian and since 2023, he has played Joel in the HBO drama series The Last of Us.',
  },
  {
    id: 5,
    url: 'assets/images/elon-musk.jpg',
    name: 'Elon Musk',
    position: 'CEO of SpaceX, Tesla and Twitter',
    description:
      'Elon Reeve Musk is a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; owner and CEO of Twitter, Inc.; founder of The Boring Company; co-founder of Neuralink and OpenAI; and president of the philanthropic Musk Foundation.',
  },
];

const cardSpeakers = (index) => `
  <div class="speaker-card-img">
      <img src=${speakersInfo[index].url} alt="image of speaker ${speakersInfo[index].name}" class="speaker-card-image">
  </div>
  <div class="speaker-card-content">
      <div class="speaker-card-name">
          <p>
              ${speakersInfo[index].name}
          </p>
      </div>
      <div class="speaker-card-position">
          <p>
              ${speakersInfo[index].position}
          </p>
      </div>
      <div class="speaker-card-description">
          <p>${speakersInfo[index].description}</p>
      </div>
  </div>
  `;

const displayTwoSpeakers = () => {
  featuredSpeakers.innerHTML = ' ';
  for (let i = 0; i < 2; i += 1) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker-card');
    speaker.innerHTML = cardSpeakers(i);
    featuredSpeakers.appendChild(speaker);
  }
};

const displayAllSpeakers = () => {
  featuredSpeakers.innerHTML = ' ';
  for (let i = 0; i < speakersInfo.length; i += 1) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker-card');
    speaker.innerHTML = cardSpeakers(i);
    featuredSpeakers.appendChild(speaker);
  }
};

speakerBtn.addEventListener('click', () => {
  const regex = /MORE/;
  const flag = regex.test(speakerBtn.textContent);
  if (flag) {
    speakerBtn.innerHTML = 'LESS <img src="assets/images/arrow-up.png" alt="arrow up" id="arrow-up">';
    displayAllSpeakers();
  } else {
    speakerBtn.innerHTML = 'MORE <img src="assets/images/arrow-down.png" alt="arrow down" id="arrow-down">';
    displayTwoSpeakers();
  }
});

const screenTest = (e) => {
  if (e.matches) {
    displayTwoSpeakers();
  } else {
    displayAllSpeakers();
  }
};

screenTest(mediaqueryList);

mediaqueryList.addEventListener('change', screenTest);
