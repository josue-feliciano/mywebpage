const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
  body.classList.toggle('dark-mode');

  const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode' 
    : "Light Mode"

  modeStatus.innerText = "Currently in " + modeMessage;
}

modeToggle.addEventListener('click', toggleMode);

const items = document.querySelectorAll('.item:not(:first-child)');

const options = {
  threshold: 0.5
}

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    } else { // this else part is not compulsory
      entry.target.classList.remove('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options)

items.forEach(item => {
  observer.observe(item);
})