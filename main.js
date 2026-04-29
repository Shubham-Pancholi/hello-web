const form = document.querySelector("#live-form");
const statusE1 = document.querySelector("#form-status");

if(form && statusE1) {
    form.addEventListener("submit", (event)=> {
        event.preventDefault();

        const data = new FormData(form);
        const email = (data.get("email") || "").toString().trim();
        const text = (data.get("text") || "").toString().trim();

        statusE1.textContent = `Mail = ${email ? ` ${email}` : ""}; Text = ${text}`;
        form.reset();
    });
}

const root = document.documentElement;
const toggleButton = document.querySelector("#display-mode-toggle");

function applyTheme(theme) {
    if(theme==="dark") {
        root.setAttribute("data-theme", "dark");
    }
    else {
        root.removeAttribute("data-theme");
    }
}

const saved = localStorage.getItem("theme");
applyTheme(saved);

if(toggleButton) {
    toggleButton.addEventListener("click", () => {
        const isDark = root.getAttribute("data-theme") === "dark";
        const next = isDark ? "light" : "dark";

        applyTheme(next === "dark" ? "dark" : "light");
        localStorage.setItem("theme", next=== "dark" ? "dark" : "light");
    })
}