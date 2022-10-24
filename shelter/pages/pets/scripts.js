// burger menu
const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const darken = document.querySelector('.darken');
const navLink = document.querySelectorAll('.nav-link')
let isActiveBurger = false;
burger.addEventListener('click', () => {
  if (!isActiveBurger) {
     burger.classList.add('burger-active')
    nav.classList.add('nav-active')
     body.classList.add('active')
    darken.classList.add('active')
    isActiveBurger=true
  }
  else {
    burger.classList.remove('burger-active');
    nav.classList.remove('nav-active');
    body.classList.remove('active');
    darken.classList.remove('active');
    isActiveBurger = false;
  }
})
navLink.forEach(n => {
  n.addEventListener('click', () => {
      navLink.forEach(n=>n.classList.remove('active'))
    burger.classList.remove('burger-active');
    nav.classList.remove('nav-active');
    body.classList.remove('active');
    darken.classList.remove('active');
    isActiveBurger = false;
    n.classList.add('active')
    })
})
  
darken.addEventListener('click', () => {
  burger.classList.remove("burger-active");
  nav.classList.remove('nav-active');
  darken.classList.remove('active');
  body.classList.remove('active');
  isActiveBurger = false;

})


const info = {
  Jennifer:{
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },

  Sophia:{
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  Woody:{
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  Scarlett:{
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },

  Katrine:{
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  Timmy:{
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  Freddie:{
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  Charly:{
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
}


// pagination
const createCard = (array) => {

  const card = document.createElement('div');
  card.classList.add('pet')
  console.log(array)
  card.dataset.name = array[Math.floor(Math.random() * array.length)];
  console.log(card.dataset.name)
  

  const image = document.createElement('img');
  image.classList.add('pet-img')
  image.src = info[card.dataset.name]['img']
  card.append(image);

  const name = document.createElement('p');
  name.classList.add('pet-name');
  name.textContent = card.dataset.name;
  card.append(name);

  const button = document.createElement('button');
  button.classList.add('learn-more')
  button.textContent = "Learn more"
  card.append(button);

  return card;
}



let array = ['Katrine', "Jennifer", "Woody", "Scarlett", "Sophia", 'Timmy', 'Freddie', 'Charly'];
let petNames=[]
for(let i =0;i<6;i++){
   for(let j=0;j<8;j++){
       petNames.push(array[j])
   }
}

const shuffleArray = [];


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// shuffle elements in each page
function shufflePages(numberOfELements, numberOfPages) {
  for (let i = 0; i < numberOfPages; i++){
    let sliced = petNames.splice(0, numberOfELements);
    shuffleArray.push(sliced);
        
  }
  shuffleArray.forEach(n=>shuffle(n))
}
  

// choosing the right wifht of the screen
const carousel = document.querySelector('.carousel')
let numberOfPages;
let difference

if (carousel.clientWidth >= 1280) {
  shufflePages(8, 6);
  numberOfPages = 6;
  difference=930


}
else if (carousel.clientWidth <= 1279 && carousel.clientWidth >= 768) {
  shufflePages(6, 8);
  numberOfPages = 8;
  difference=1365
}
else  {
  shufflePages(3, 16)
  numberOfPages = 16;
  difference=1365

}

// construnctin card-container with cards inside
for (let i = 0; i < shuffleArray.length; i++){
  const cards = document.createElement('div');
  cards.classList.add('pets-container')
  for (let j = 0; j < shuffleArray[0].length; j++){
    const card = document.createElement('div');
    card.classList.add('pet')

    card.dataset.name = shuffleArray[i][j];
    const image = document.createElement('img');
    image.classList.add('pet-img')
    image.src = info[card.dataset.name]['img']
    card.append(image);

    const name = document.createElement('p');
    name.classList.add('pet-name');
    name.textContent = card.dataset.name;
    card.append(name);

    const button = document.createElement('button');
    button.classList.add('learn-more')
    button.textContent = "Learn more"
    card.append(button);
    cards.append(card)
  };
  carousel.append(cards)
}


// pagination
let currentPage = 1;
const page = document.querySelector('.page');
const firsPageBtn = document.querySelector('.first-page');
const lastPageBtn = document.querySelector('.last-page')
const nextBtn= document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
let carouselPositon = 0;
console.log(carouselPositon)

function checkPages() {
  if (currentPage == numberOfPages) {
    nextBtn.classList.remove('active');
    nextBtn.classList.add('disabled');
    lastPageBtn.classList.remove('active');
    lastPageBtn.classList.add('disabled');
    nextBtn.removeEventListener('click',addPage)

  }
  else if (currentPage == 1) {
    previousBtn.classList.remove('active');
    previousBtn.classList.add('disabled');
    firsPageBtn.classList.remove('active');
    firsPageBtn.classList.add('disabled');
    previousBtn.removeEventListener('click',substractPage)
  }
}

//incremanting number of pages
function addPage() {
  moveRight();
  currentPage++;
  if (previousBtn.classList.contains('disabled')) {
    previousBtn.classList.remove('disabled');
    previousBtn.classList.add('active');
    firsPageBtn.classList.remove('disabled');
    firsPageBtn.classList.add('active');
  }
  checkPages()
  previousBtn.addEventListener('click',substractPage)
  page.textContent = currentPage;
}
// substract page
function substractPage() {
   moveLeft();
  currentPage--;
  if (nextBtn.classList.contains('disabled')) {
    nextBtn.classList.remove('disabled');
    nextBtn.classList.add('active');
    lastPageBtn.classList.remove('disabled');
    lastPageBtn.classList.add('active');
  }
  checkPages();
  nextBtn.addEventListener('click',addPage)

  page.textContent = currentPage;
}
// to the first
function toFirst() {
  toTheFirstPage();
  currentPage = 1;
   if (nextBtn.classList.contains('disabled')) {
    nextBtn.classList.remove('disabled');
    nextBtn.classList.add('active');
    lastPageBtn.classList.remove('disabled');
    lastPageBtn.classList.add('active');
  }
  checkPages();
  previousBtn.removeEventListener('click', substractPage)
  nextBtn.addEventListener('click',addPage)


  

  page.textContent = currentPage;
}
// to the last 
function toLast() {
  toTheLastPage();
  currentPage = numberOfPages;
  if (previousBtn.classList.contains('disabled')) {
    previousBtn.classList.remove('disabled');
    previousBtn.classList.add('active');
    firsPageBtn.classList.remove('disabled');
    firsPageBtn.classList.add('active');
  }
  checkPages();
  nextBtn.removeEventListener('click', addPage)
  previousBtn.addEventListener('click',substractPage)

  page.textContent = currentPage;
}
// clicking forward
 moveRight = () => {
   carouselPositon -= difference;
   carousel.style.top=`${carouselPositon}px`
   console.log(carouselPositon)
}
// previous page
moveLeft = () => {
   carouselPositon += difference
   carousel.style.top=`${carouselPositon}px`
  console.log(carouselPositon)
}
// returns to the first page
toTheFirstPage = () => {
  carouselPositon = 0;
  carousel.style.top=`${carouselPositon}px`
}
// returns to the last page
toTheLastPage = () => {
  carouselPositon =-(numberOfPages-1) * difference;
  carousel.style.top=`${carouselPositon}px`
}



nextBtn.addEventListener('click', addPage)
previousBtn.addEventListener('click', substractPage)
firsPageBtn.addEventListener('click', toFirst)
lastPageBtn.addEventListener('click',toLast)


//  pop Up
// const cards = document.querySelector('.pets-container'); s
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const modals = document.querySelectorAll('[data-modal]');
const modalImg = document.querySelector('.modal-img');

const containers = document.querySelectorAll('.pets-container')

containers.forEach(n=>n.addEventListener('click',openModal))
function openModal(event) {
   let pet = event.target.closest('div')
  if (pet.classList.contains('pet')) {
    modals.forEach(el => {
       el.textContent = info[pet.dataset.name][el.dataset.modal]
    })
    modal.classList.add('active');
    overlay.classList.add('active');
    modalImg.src = info[pet.dataset.name]["img"];
    body.classList.add('active');
  }
}
overlay.addEventListener('mouseover', () => {
  closeButton.classList.add('hovered');
})
overlay.addEventListener('mouseleave', () => {
  closeButton.classList.remove('hovered');
})


function close() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('active');
}
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', close);
overlay.addEventListener('click', close);

