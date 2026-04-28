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