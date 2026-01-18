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
    let id = sec. getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links. classList.remove('active');
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
    reset: false,
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
    btn.classList. toggle('active', btn.dataset. tab === tabId);
  });

  tabContents.forEach(content=>{
    if(content.id === tabId){
      content.classList.add('active');
      content.style.display = 'block';
      void content.offsetWidth;
      content. querySelectorAll('img').forEach(img=>{const s=img.src; img.src=''; img.src=s;});
    } else {
      content. classList.remove('active');
      content.style.display = 'none';
    }
  });
}

// init default tab
document.addEventListener('DOMContentLoaded', ()=>{
  showTab('data-science');
});

const form = document.querySelector("form");

// Initialize EmailJS
(function(){
  emailjs.init("PowZCRWTE6N-17mhH");
})();

function sendEmail(event) {
  // Prevent default form submission
  if (event) {
    event.preventDefault();
  }

  // Get form values
  var fullName = document.getElementById("name").value.trim();
  var email = document. getElementById("email").value.trim();
  var phone = document. getElementById("phone").value.trim();
  var subject = document.getElementById("subject").value.trim();
  var msg = document.getElementById("message").value.trim();

  // Validate form fields
  if (!fullName || !email || ! phone || !subject || !msg) {
    alert("Please fill in all fields before sending.");
    return false;
  }

  // Validate email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Check if EmailJS is loaded
  if (typeof emailjs === "undefined") {
    alert("Email service is unavailable. Please try again later.");
    console.error("EmailJS library not loaded");
    return false;
  }

  // Prepare template parameters
  var templateParams = {
    from_name: fullName,
    from_email: email,
    phone: phone,
    subject: subject,
    message: msg
  };

  // Get submit button and show loading state
  var submitButton = event.target.querySelector('button[type="submit"]');
  var originalButtonText = submitButton. textContent;
  submitButton. textContent = 'Sending... ';
  submitButton.disabled = true;

  // Send email using EmailJS
  emailjs.send('service_cuomgv4', 'template_ykws3rb', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response. text);
      alert("Message sent successfully!  I'll get back to you soon.");
      form.reset();
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    }, function(error) {
      console.error('FAILED...', error);
      alert("Failed to send message.  Please try again or contact me directly at dataanalyst6606@gmail. com");
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    });

  return false;
}
