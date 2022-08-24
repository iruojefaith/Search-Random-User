
 //HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');
const closeBtn = document.querySelector('button');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
  hamburger.classList.toggle('hide');
  closeBtn.classList.remove('hide');

});

closeBtn.addEventListener('click', function () {
  closeBtn.classList.add('hide');
  hamburger.classList.remove('hide');
  navLink.classList.toggle('hide');
})




const result = document.getElementById('result')
 const filter = document.getElementById('filter')
 const listItems = []
 getData()
 filter.addEventListener('input', (e) => filterData(e.target.value))
 async function getData() {




//    const menu = document.querySelector('#mobile-menu');
//  const menuLinks = document.querySelector('.navbar__menu');
//  // Display mobile menu
//  const mobileMenu = () =>{
//  menu.classList.toggle('is-active')
//  menuLinks.classList.toggle('active')
//  }
//  menu.addEventListener('click', mobileMenu)
//  function myFunction() {
//    document.getElementById("demo").innerHTML = "Hello World";
//   }


    const res = await fetch('https://randomuser.me/api?results=50')
   const { results } = await res.json()
   // Clear result
   result.innerHTML = ''
   results.forEach(user => {
     const li = document.createElement('li')
     listItems.push(li)
     li.innerHTML = `
       <img src="${user.picture.large}" alt="${user.name.first}">
       <div class="user-info">
         <h4>${user.name.first} ${user.name.last}</h4>
         <p>${user.location.city}, ${user.location.country}</p>
       </div>
     `
     result.appendChild(li)
   })
 }
 function filterData(searchTerm) {
   listItems.forEach(item => {
     if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
       item.classList.remove('hide')
     } else {
       item.classList.add('hide')
     }
   })
 }