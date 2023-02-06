const featuredSpeakers = document.querySelector('.card-speakers');
const speakerBtn = document.querySelector('.speakers-btn');
const mediaqueryList = window.matchMedia('(max-width: 768px)');

const speakersInfo = [
  {
    id: 0,
    url: './assets/speakers/angello-pro-ecH8mCm4nWk-unsplash.jpg',
    name: 'Yochai Benkler',
    position:
      'Beykman Professor of Enterpreanurial Legal Studies of Harvard Law School',
    description:
      'Benlder studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: 1,
    url: './assets/speakers/michael-mims-fWWiaDox0BU-unsplash.jpg',
    name: 'SohYeong Noh',
    position: 'Director of Art Centre Nabl and a board member of CC Korea',
    description:
      'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    id: 2,
    url: './assets/speakers/kelly-sikkema-JN0SUcTOig0-unsplash.jpg',
    name: 'Lila Tretikov',
    position: 'Executive Director of the Wikimedia Foundation',
    description:
      'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia Wikipedia is freely available in 290 languag es and used by nearly half a billion people around the world every month',
  },
  {
    id: 3,
    url: 'assets/speakers/ethan-hoover-0YHIlxeCuhg-unsplash.jpg',
    name: 'Kilnam Chon',
    position:
      'Beykman Professor of Enterpreanurial Legal Studies of Harvard Law School',
    description:
      "Kinam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital com mons. In 2012, he was inducted into the inaugural class of the Internet Society's (SOC) Internet Hall of Fame.",
  },
  {
    id: 4,
    url: './assets/speakers/mike-austin-jgSAuqMmJUE-unsplash.jpg',
    name: 'Julia Leda',
    position: 'President of Young Pirates of Europe',
    description:
      "European ingetration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July",
  },
  {
    id: 5,
    url: './assets/speakers/jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg',
    name: 'Ryan Merkley',
    position: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source move ment',
  },
];

const cardSpeakers = (index) => `
  <div class="speaker-card-img">
      <img src=${speakersInfo[index].url} alt="image of speaker ${speakersInfo[index].name}">
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
  for (let i = 0; i < 2; i++) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker-card');
    speaker.innerHTML = cardSpeakers(i);
    featuredSpeakers.appendChild(speaker);
  }
};

const displayAllSpeakers = () => {
  featuredSpeakers.innerHTML = ' ';
  for (let i = 0; i < speakersInfo.length; i++) {
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
