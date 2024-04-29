function simpleAlert(type, message) {
    const body = document.querySelector("body");
    const alert = document.createElement("div");
    alert.classList.add("success-div");
    alert.innerHTML = `<p>${message}</p><p class="close" onclick="return this.parentNode.remove();">x</p>`;
    body.appendChild(alert);
}

async function confirm(message) {
    const body = document.querySelector("body");
    const alert = document.createElement("div");
    alert.classList.add("confirm");
    alert.innerHTML = `<p>${message}</p><p>Cancel</p><p>Yes</p>`;
    body.appendChild(alert);
}