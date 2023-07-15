// Sticky Navbar
const header = document.querySelector('header');

const sticky = header.offsetTop;

function makeSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

window.onscroll = function() {
  makeSticky();
};


// LogIn Validations and LogIn Page Controls
const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const closeLink = document.getElementById("close-link");
const loginLink = document.getElementById("login-link");
const loginContainer = document.querySelector(".login-container");

closeLink.addEventListener("click", function(e) {
e.preventDefault();
loginContainer.style.display = "none";
});

loginLink.addEventListener("click", function(e) {
e.preventDefault();
loginContainer.style.display = "flex";
});

// Closing only the login container when the page loads
window.onload = function() {
loginContainer.style.display = "none";
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("Please enter a username and password.");
  } else {
    // Validate login details here
    // Example:
    if (username.value === "admin" && password.value === "password") {
      alert("Logged in successfully!");
    } else {
      alert("Invalid username or password.");
    }
  }
});


// ToggleNavbar in Media
function toggleMenu() {
  var nav = document.querySelector("nav ul");
  var menuButton = document.querySelector(".menu-button i");
  nav.style.visibility = nav.style.visibility === "visible" ? "collapse" : "visible";
  if (menuButton.classList.contains("fa-bars")) {
    menuButton.classList.remove("fa-bars");
    menuButton.classList.add("fa-times");
  } else {
    menuButton.classList.remove("fa-times");
    menuButton.classList.add("fa-bars");
  }
}

// Subscribe Home Button
var subscribeButton = document.getElementById("subscribe-button");
var subscribePopup = document.getElementById("subscribe-popup");
var closeButton = document.getElementById("close-button");

subscribeButton.addEventListener("click", function() {
  subscribePopup.style.display = "block";
  subscribeOverlay.style.display = "block";
});

closeButton.addEventListener("click", function() {
  subscribePopup.style.display = "none";
  subscribeOverlay.style.display = "none";
});


// Hire Me Page Manager
const hireMeButton = document.getElementById("hire-me-button");

hireMeButton.addEventListener("click", function(){
  // When the button is clicked, open the user's email client with a pre-populated email
  window.location.href = "mailto:mungiria8@email.com?subject=Work on My Project";
});


// Smooth Scroll - Select all links with the .scroll class
const links = document.querySelectorAll('.scroll');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const id = event.target.getAttribute('href').slice(1);

    const target = document.getElementById(id);

    const start = window.scrollY;
    const to = target.getBoundingClientRect().top + start;

    const animateScroll = timestamp => {
      const elapsed = timestamp - startTime;
      const progress = elapsed / duration;

      const current = start + (to - start) * progress;

      window.scrollTo(0, current);

      if (elapsed < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    const duration = 1000;

    const startTime = performance.now();

    window.requestAnimationFrame(animateScroll);
  });
});



// View Project Demo
const ProjectDemoButtons = document.querySelectorAll("#ProjectDemoButton");
const ProjectDemoForms = document.querySelectorAll("#ProjectDemoForm");
const CloseFormBtn = document.querySelectorAll("#CloseFormBtn");

for (let i = 0; i < ProjectDemoButtons.length; i++) {
    ProjectDemoButtons[i].addEventListener("click", function() {
        ProjectDemoForms[i].style.display = "block";
    });
}

for (let i = 0; i < CloseFormBtn.length; i++) {
    CloseFormBtn[i].addEventListener("click", function() {
        ProjectDemoForms[i].style.display = "none";
    });
}

//To close the form when the user clicks outside of it
window.addEventListener("click", function(event) {
    for (let i = 0; i < ProjectDemoForms.length; i++) {
        if (event.target == ProjectDemoForms[i]) {
            ProjectDemoForms[i].style.display = "none";
        }
    }
});


// Multi-Step Cards
const skillLinks = document.querySelectorAll('.skill-link');
const cards = document.querySelectorAll('.card');
const projectLinks = document.querySelectorAll('.projects-link');
const projectcards = document.querySelectorAll('.projects-card');
const BlogLinks = document.querySelectorAll('.Blog-link');
const BlogCards = document.querySelectorAll('.BlogCard');

document.addEventListener('DOMContentLoaded', function() {
  skillLinks[0].classList.add('active');
});
document.addEventListener('DOMContentLoaded', function() {
  projectLinks[0].classList.add('active-project');
});
document.addEventListener('DOMContentLoaded', function() {
  BlogLinks[0].classList.add('ActiveBlog');
});

skillLinks.forEach(link => {
  link.addEventListener('click', e => {
    skillLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
    const skill = link.getAttribute('data-skill');
    cards.forEach(card => card.classList.remove('active'));
    document.getElementById(skill).classList.add('active');
  });
});
projectLinks.forEach(link => {
  link.addEventListener('click', e => {
    projectLinks.forEach(link => link.classList.remove('active-project'));
    link.classList.add('active-project');
    const skill = link.getAttribute('data-skill');
    projectcards.forEach(card => card.classList.remove('active-project'));
    document.getElementById(skill).classList.add('active-project');
  });
});
BlogLinks.forEach(link => {
  link.addEventListener('click', e => {
    BlogLinks.forEach(link => link.classList.remove('ActiveBlog'));
    link.classList.add('ActiveBlog');
    const skill = link.getAttribute('data-skill');
    BlogCards.forEach(card => card.classList.remove('ActiveBlog'));
    document.getElementById(skill).classList.add('ActiveBlog');
  });
});




// Read more
function showReadMore(event) {
  const target = event.target;
  
  if (!target.classList.contains('read-more-link')) {
    return;
  }
  
  event.preventDefault();
  
  const blogPost = target.parentElement;
  
  const readMore = blogPost.querySelector('.read-more');
  
  const modal = document.createElement('div');
  modal.classList.add('modal');
  
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  
  modalContent.innerHTML = readMore.innerHTML;
  
  const readLessLink = document.createElement('a');
  readLessLink.classList.add('read-less-link');
  readLessLink.innerText = 'Read Less';
  
  modalContent.appendChild(readLessLink);
  
  modal.appendChild(modalContent);
  
  document.body.appendChild(modal);
  
  readLessLink.addEventListener('click', function() {
    modal.remove();
  });
  
}
document.addEventListener('click', showReadMore);


//Retrieve and Display your Tweets using Node.js
const Twit = require('twit');

const T = new Twit({
  consumer_key: 'your consumer key',
  consumer_secret: 'your consumer secret',
  access_token: 'your access token',
  access_token_secret: 'your access token secret'
});

T.get('statuses/user_timeline', { screen_name: 'your screen name', count: 10 }, function(
  err,
  data,
  response
) {
  if (err) {
    console.log(err);
  } else {
    data.forEach(tweet => {
      const tweetElement = document.createElement('li');
      tweetElement.innerHTML = `<p>${tweet.text}</p><p>@${tweet.user.screen_name} - ${tweet.created_at}</p>`;
      document.querySelector('.tweet-list').appendChild(tweetElement);
    });
  }
});