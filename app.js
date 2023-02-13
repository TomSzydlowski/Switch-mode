const switchButton = document.querySelector("header button");
let theme = localStorage.getItem("theme");

switchButton.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
  if (theme === "dark") {
    theme = "light";
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");
  } else {
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
    theme = "dark"
  }
  localStorage.setItem("theme", theme);
});



if (theme === "dark") {
    document.querySelector("body").classList.add("dark");
}

if (theme === "light") {
    document.querySelector("body").classList.add("light");
}


