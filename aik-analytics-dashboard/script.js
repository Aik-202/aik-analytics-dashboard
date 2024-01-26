// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
  
//   // Whenever the user explicitly chooses light mode
//   localStorage.theme = 'light'
  
//   // Whenever the user explicitly chooses dark mode
//   localStorage.theme = 'dark'
  
//   // Whenever the user explicitly chooses to respect the OS preference
//   localStorage.removeItem('theme')

  // variable for dark mode
let element = document.body;

//lightmode
const lightMode = () => {
    element.classList.remove("dark");
    //set theme
    var theme
    if (element.classList == "dark") {
      theme = "DARK"
    } else {
      theme = "LIGHT"
    }
    localStorage.setItem("pageTheme", JSON.stringify(theme));
}

//darkmode
const darkMode = () => {
  element.classList.toggle("dark");
  //set theme
  var theme
  if (element.classList == "dark") {
    theme = "DARK"
  } else {
    theme = "LIGHT"
  }
  localStorage.setItem("pageTheme", JSON.stringify(theme));
}

let getTheme = JSON.parse(localStorage.getItem("pageTheme"));

if (getTheme === "DARK") {
  element.classList.toggle("dark");
}