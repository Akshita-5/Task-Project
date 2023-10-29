//1) Timer
var countDownDate = new Date("Nov 5, 2023 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

//2) animate
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

//3) carousel
var carousel = document.querySelector('.image-carousel .slider img');
var images = ['img.jpg', 'img1.jpeg', 'img2.jpeg', 'img3.jpg'];
var num = 0;

function next() {
  num++;
  if (num >= images.length) {
    num = 0;
    carousel.src = images[num];
  } else {
    carousel.src = images[num];
  }
}

function prev() {
  num--;
  if (num < 0) {
    num = images.length - 1;
    carousel.src = images[num];
  } else {
    carousel.src = images[num];
  }
}
//4) password validation
document.addEventListener('DOMContentLoaded', function() {
  var usernameInput = document.querySelector('.user-box input[type="text"]');
  var passwordInput = document.querySelector('.user-box input[type="password"]');
  var passwordErrorMessage = document.querySelector('.password-error-message');
  var usernameErrorMessage = document.querySelector('.username-error-message');

  usernameInput.addEventListener('input', function() {
      var username = this.value;
      if (/^[a-zA-Z0-9_]+$/.test(username)) {
          this.style.borderBottom = '1px solid aqua';
          usernameErrorMessage.style.display = 'none';
      } else {
          this.style.borderBottom = '1px solid red';
          usernameErrorMessage.style.display = 'block';
      }
  });

  passwordInput.addEventListener('input', function() {
      var password = this.value;
      var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{1,15}$/;

      if (password.match(passwordRegex)) {
          // Password meets the criteria
          this.style.borderBottom = '1px solid aqua';
          passwordErrorMessage.style.display = 'none';
      } else {
          // Password does not meet the criteria
          this.style.borderBottom = '1px solid red';
          passwordErrorMessage.style.display = 'block';
      }
  });
});
//5) reset submit button
document.addEventListener('DOMContentLoaded', function() {
  var submitButton = document.getElementById('submitButton');
  var myForm = document.getElementById('myForm');
  submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      myForm.submit();
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var searchForm = document.forms['search'];
  var searchInput = searchForm.elements['txt'];
  var resultNotFoundMessage = document.querySelector('.result-not-found');

  searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var searchTerm = searchInput.value.toLowerCase();
      var elementsWithSearchTerm = document.querySelectorAll('*:not(script):not(style)');

      var searchTermFound = false;
      elementsWithSearchTerm.forEach(function(element) {
          if (element.textContent.toLowerCase().includes(searchTerm)) {
              searchTermFound = true;
              element.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
              });
              return;
          }
      });

      if (!searchTermFound) {
          resultNotFoundMessage.style.display = 'block';
      } else {
          resultNotFoundMessage.style.display = 'none';
      }
  });
});
// 6) toggle button
document.addEventListener('DOMContentLoaded', function() {
  var toggleButtons = document.querySelectorAll('.toggle-button');
  var moreInfoSections = document.querySelectorAll('.more-info');
  toggleButtons.forEach(function(button, index) {
      button.addEventListener('click', function() {
          if (moreInfoSections[index].style.display === 'none' || moreInfoSections[index].style.display === '') {
              moreInfoSections[index].style.display = 'block';
          } else {
              moreInfoSections[index].style.display = 'none';
          }
      });
  });
});
//7) back to top button
var scrollToTopButton = document.querySelector(".scroll-to-top");
function toggleScrollButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}
toggleScrollButton();

window.onscroll = function() {
    toggleScrollButton();
};
scrollToTopButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
// 8) text typing effect
var typed = new Typed('#text', {
      strings: ["boasts Powerful Performance","offers Professional Pen Input","ensures Personalized User Experience","showcases Premium Build Quality"],
      typeSpeed: 50,
      loop:true
    });



