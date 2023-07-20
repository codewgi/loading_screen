// loading screen
const loadingScreen = document.querySelector(".loading-screen")

window.addEventListener("load", () => {
    loadingScreen.style.opacity = "0";

    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 1000)
})