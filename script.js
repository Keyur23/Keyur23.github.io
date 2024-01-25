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

ScrollReveal({
  reset:true,
  distance:'80px',
  duration:2000,
  delay:200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .skills-container, .mywork-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

const form = documnet.querySelector("form");


function sendEmail() {
  var fullName = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var msg = document.getElementById("message").value;

  var bodyMessage = "Full Name: "+ fullName +
   "<br/> Email: "+ email + 
   "<br/> Mobile Number: "+ phone+
    "<br/> Message: "+ msg;

  Email.send({
    SecureToken: "06c92d3b-6562-4abe-b071-1fe43474dbb3",
    To : 'dataanalyst6606@gmail.com',
    From : "dataanalyst6606@gmail.com",
    Subject : subject,
    Body : bodyMessage
}).then(
  message => alert(message)
);
}



