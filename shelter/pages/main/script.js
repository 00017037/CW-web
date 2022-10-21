// burger menu
const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const navLink = document.querySelectorAll('.nav-link')

const darken = document.querySelector('.darken');
const carousel = document.querySelector('.carousel');
navLink[0].classList.add('active')

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
//  pop Up
const cards = document.querySelector('.pets-cont'); 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const modals = document.querySelectorAll('[data-modal]');
const modalImg = document.querySelector('.modal-img');

carousel.addEventListener('click', openModal)
function openModal(event) {
  console.log('open')
   let pet = event.target.closest('.pet')
  
    modals.forEach(el => {
       el.textContent = info[pet.dataset.name][el.dataset.modal]
    })
    modal.classList.add('active');
    overlay.classList.add('active');
    modalImg.src = info[pet.dataset.name]["img"];
    body.classList.add('active');
  
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


// carousel

const btnLeft = document.querySelector('.previos');
const btnRight = document.querySelector('.next');
const itemLeft = document.querySelector('#item-left');
const itemRight = document.querySelector('#item-right');
const itemActive = document.querySelector('#item-active')


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

const moveLeft = () => {
  carousel.classList.add('transition-left')
  console.log('move-left')
}
const moveRight = () => {
  carousel.classList.add('transition-right');
  
  console.log('move-right')
}

btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight)


carousel.addEventListener('animationend', (animation) => {
  let changedItem;
  
  console.log(changedItem)
  let petNames = [ 'Katrine',"Jennifer", "Woody", "Scarlett" ,"Sophia", 'Timmy', 'Freddie', 'Charly'];
  let numberOfCards = Math.floor(carousel.offsetWidth / 270);


  function deleteNames(item) {
    for (let i = 0; i < numberOfCards; i++){
      console.log(item.children[i].dataset.name)
    petNames.splice(petNames.indexOf(item.children[i].dataset.name), 1);
  }
  }
  

  
  if (animation.animationName === 'move-left') {
    changedItem = itemLeft;
    itemRight.innerHTML = itemActive.innerHTML;
    document.querySelector('#item-active').innerHTML = itemLeft.innerHTML;
    deleteNames(itemLeft)

    
  }
  else {
    changedItem = itemRight;
    itemLeft.innerHTML = itemActive.innerHTML;
    document.querySelector('#item-active').innerHTML = itemRight.innerHTML;
    deleteNames(itemRight);
  }

  changedItem.innerHTML = "";

  


  
  for (let i = 0; i < numberOfCards; i++){

     const card = createCard(petNames);
     petNames.splice(petNames.indexOf(card.dataset.name),1)
    changedItem.append(card);
    
  }

  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);
  carousel.classList.remove('transition-left');
  carousel.classList.remove('transition-right')

})
