let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  let header = document.querySelector('header');

  header.classList.toggle('sticky',window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal({
    reset:false,
    distance:'80px',
    duration:1200,
    delay:150
  });

  ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
  ScrollReveal().reveal('.home-img, .skills-container, .contact form',{origin:'bottom'});
  ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
  ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});
}

// Project Tabs Functionality (robust)
function showTab(tabId){
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  tabContents.forEach(content=>{
    if(content.id === tabId){
      content.classList.add('active');
      content.style.display = 'block';
      void content.offsetWidth;
      content.querySelectorAll('img').forEach(img=>{const s=img.src; img.src=''; img.src=s;});
    } else {
      content.classList.remove('active');
      content.style.display = 'none';
    }
  });
}

// init default tab
document.addEventListener('DOMContentLoaded', ()=>{
  showTab('data-science');
});

const form = document.querySelector("form");

function sendEmail(event) {
  // Prevent default form submission
  if (event) {
    event.preventDefault();
  }

  // Get form values
  var fullName = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var subject = document.getElementById("subject").value.trim();
  var msg = document.getElementById("message").value.trim();

  // Validate form fields
  if (!fullName || !email || !phone || !subject || !msg) {
    alert("Please fill in all fields before sending.");
    return false;
  }

  // Validate email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  var bodyMessage = "Full Name: "+ fullName +
   "<br/> Email: "+ email + 
   "<br/> Mobile Number: "+ phone+
    "<br/> Message: "+ msg;

  if (typeof Email === "undefined" || typeof Email.send !== "function") {
    alert("Email service is unavailable. Please try again later.");
    return false;
  }

  // Send email using SMTP.js
  Email.send({
    SecureToken: "06c92d3b-6562-4abe-b071-1fe43474dbb3",
    To : 'dataanalyst6606@gmail.com',
    From : "dataanalyst6606@gmail.com",
    Subject : subject,
    Body : bodyMessage
  }).then(
    function(message) {
      if (message === "OK") {
        alert("Message sent successfully!");
        // Reset form after successful send
        if (form) form.reset();
      } else {
        alert("Error sending message: " + message);
      }
    }
  ).catch(
    function(error) {
      alert("Failed to send message. Please try again later.");
      console.error("Email send error:", error);
    }
  );

  return false;
}



