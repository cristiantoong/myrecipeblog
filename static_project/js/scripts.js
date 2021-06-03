const catModal = document.querySelector('.categories-modal')
const catBtn = document.querySelector('.categories-btn')




catBtn.addEventListener('click', function(){
  catModal.classList.toggle("slide-modal");
})





// mobile nav
const mobileBtn = document.querySelector('.mobile-menu');
const navbarMobile = document.querySelector('.navbar-mobile');

function showSideNavbar() {
    navbarMobile.classList.toggle('show-navbar-mobile');
}

mobileBtn.addEventListener('click', showSideNavbar)

// REGISTER FORM
// const firstname = document.getElementById('firstname');
// const lastname = document.getElementById('lastname');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password1 = document.getElementById('password1');
// const password2 = document.getElementById('password2');
// const registerForm = document.getElementById('register-main-form');
// const error = document.getElementById('error');
// const errors = document.querySelectorAll('#error')




// function processFormData(e){

//     let errorMessages = [];
    
//     //Validate Form
//     if(firstname.value == "" || firstname.value == null){
//         errorMessages.push('first name is required');
//         firstname.style.border = "2px solid tomato";
//     } else {
//       firstname.style.border = "2px solid #ffffff";
//       errorMessages.push('');
//     }

//     if (lastname.value == "" || lastname.value == null) {
//       errorMessages.push('last name is required');
//       lastname.style.border = "2px solid tomato";
//     } else {
//       lastname.style.border = "2px solid #ffffff";
//       errorMessages.push('');
//     }

//     if (username.value == "" || username.value == null) {
//       errorMessages.push('username is required');
//       username.style.border = "2px solid tomato";
//     } else {
//       username.style.border = "2px solid #ffffff";
//       errorMessages.push('');
//     }

//     if (email.value == "" || email.value == null) {
//       errorMessages.push('email is required');
//       email.style.border = "2px solid tomato";
//     } else {
//       email.style.border = "2px solid #ffffff";
//       errorMessages.push('');
//     }

//     if (password1.value == "" || password1.value == null) {
//       errorMessages.push('password is required');
//       password1.style.border = "2px solid tomato";
//     } else {
//       password1.style.border = "2px solid #ffffff";
//       errorMessages.push('');
//     }

//     if (password2.value == "" || password2.value == null) {
//       errorMessages.push('confirm password is required');
//       password2.style.border = "2px solid tomato";
//     } else {
//       password2.style.border = "2px solid #ffffff";
//       errorMessages.push('');
//     }

  

//     // if messages array length has an item
//     if(errorMessages.length > 0) {
//         e.preventDefault();
//         // error.innerText = errorMessages.join('\n')
//         // inputs.forEach(function(input){
//         //   if (input.value !== "" || input.value == null) {
            
//         //   }
//         // });
      
//         errors.forEach(function(item, index){
//           item.innerText = errorMessages[index];
//         })
      
//     }

// }

// // Event Listener
// registerForm.addEventListener('submit', processFormData);



