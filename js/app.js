// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  {
    id: 5,
    name: 'maximillian donahue',
    job: 'the shephard',
    img: 'img/max.png',
    text: 'Super Shephard, vice President and chief of staff. From the Shephard family name Maximilianus, derived from the latin maximus, "the greatest". intelligence, obedience, stamina, and strength; not aggression.',
  },
  {
    id: 6,
    name: 'patrick donahue',
    job: 'the smuck',
    img: 'img/Donahue_Patrick_Passport_frt.jpg',
    text: 'Sergeant at Arms. Basically useless - one notch down from a sociopath. Highly objectionable and offensive; annoying or objectionable due to being a show-off or attracting undue attention to himself.',
  },
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item  // this is a global item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
  showPerson();  
});

// show person based on item
function showPerson() {
  const item = reviews [currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function() {
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person
prevBtn.addEventListener('click', function() {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length -1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener('click', function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
})
