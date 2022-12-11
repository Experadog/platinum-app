
// const containerNav = document.querySelector(".navbar_list")
// const links = document.querySelector(".links")

// const dataBurger = [
//   {
//     id:1,
//     title: "О нас",
//   },
//   {
//     id:1,
//     title: "Проекты",
//   },
//   {
//     id:1,
//     title: "Новости",
//   },
//   {
//     id:1,
//     title: "Инвестируй",
//   },
//   {
//     id:1,
//     title: "Контакты",
//   }

// ]


// window.addEventListener("load", () => {

//   getTitle(dataBurger)
// })

// function getTitle(base){
//   const template = base.map(item => {
//     return `
//       <li>
//         ${item.title}
//       </li>
//     `
//   }).join(" ")

//   containerNav.innerHTML = template;
// }


const hamburger = document.querySelector(".hamburger")
const listMenu = document.querySelector(".navbar_list")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  listMenu.classList.toggle("active")
})

