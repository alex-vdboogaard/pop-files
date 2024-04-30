function closePop(element) {
    element.parentNode.remove();
}

function simplePop(message) {
    const body = document.querySelector("body");
    const alert = document.createElement("div");
    alert.classList.add("success-div");
    alert.innerHTML = `<p>${message}</p><p class="close" onclick="closePop(this)">x</p>`;
    body.appendChild(alert);
}

async function confirmPop(message) {
    return new Promise((resolve, reject) => {
        const body = document.querySelector("body");
        const alert = document.createElement("div");
        alert.classList.add("confirm");
        alert.innerHTML = `<p>${message}</p><div class="buttonGroup"></div><button class="cancelButton">Cancel</button><button class="yesButton">Yes</button>`;
        body.appendChild(alert);

        document.querySelector(".cancelButton").addEventListener("click", () => {
            alert.remove();
            resolve(false);
        });

        document.querySelector(".yesButton").addEventListener("click", () => {
            alert.remove();
            resolve(true);
        });
    });
}
