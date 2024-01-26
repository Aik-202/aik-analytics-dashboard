const getTheme = () => {
    let theme = JSON.parse(localStorage.getItem("pageTheme"));
    let element = document.body;
    if (theme === "DARK") {
      element.classList.toggle("dark");
    } else {
        element.classList.remove("dark");
    }
}


