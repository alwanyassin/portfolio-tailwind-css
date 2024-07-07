document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1 // Adjust as needed
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(`Element ${entry.target.id} is intersecting`);
        entry.target.classList.add('animate-fade');
        observer.unobserve(entry.target);
      } else {
        console.log(`Element ${entry.target.id} is not intersecting`);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  document.querySelectorAll('#animate1').forEach(element => {
    observer.observe(element);
    console.log(`Observing element ${element.id}`);
  });
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// modal
const images = [
  { src: 'dist/img/cluster1detail.jpeg', title: 'Avarra' },
  { src: 'dist/img/cluster2detail.jpeg', title: 'Avista' },
  { src: 'dist/img/cluster3detail.jpeg', title: 'Avante' },
  { src: 'dist/img/cluster4detail.jpeg', title: 'Avetra' }
];

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  document.getElementById('modalImage').src = images[currentIndex].src;
  document.getElementById('modalTitle').innerText = images[currentIndex].title;
  document.getElementById('modal').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

function prevImage() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  document.getElementById('modalImage').src = images[currentIndex].src;
  document.getElementById('modalTitle').innerText = images[currentIndex].title;
}

function nextImage() {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  document.getElementById('modalImage').src = images[currentIndex].src;
  document.getElementById('modalTitle').innerText = images[currentIndex].title;
}