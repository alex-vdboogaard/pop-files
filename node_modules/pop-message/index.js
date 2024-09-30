function closeAllPop() {
    document.querySelectorAll(".pop").forEach(pop => { pop.remove(); });
}

//this makes the popup move up out of the screen then disappear
function delayedRemove() {
    const popElements = document.querySelectorAll(".pop");
    setTimeout(function () {
        popElements.forEach(pop => {
            pop.style.transition = "margin-top 0.5s ease-out";
            pop.style.marginTop = "-80px";
            pop.addEventListener("transitionend", function () {
                pop.remove();
            }, { once: true });
        });
    }, 3000);
}

export function simplePop(type, message, position = "top") {
    closeAllPop();
    if (type === "success") type = "pop-success";
    if (type === "error") type = "pop-error";
    const body = document.querySelector("body");
    const alert = document.createElement("div");
    alert.classList.add("pop-top", "pop", type);

    if (type === "pop-success") {
        alert.innerHTML = `<svg class="pop-svg" style="margin-right:15px" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7L10 17L5 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>${message}</p>`;
    }
    else {
        alert.innerHTML = `<svg style="margin-right:15px" class="pop-svg" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2287_12)">
        <path d="M45 0C20.1445 0 0 20.1445 0 45C0 69.8555 20.1445 90 45 90C69.8555 90 90 69.8555 90 45C90 20.1445 69.8555 0 45 0ZM11.25 45C11.25 26.3496 26.3672 11.25 45 11.25C52.4004 11.25 59.2383 13.6582 64.793 17.7012L17.7012 64.793C13.6582 59.2383 11.25 52.4004 11.25 45ZM45 78.75C37.5996 78.75 30.7617 76.3418 25.207 72.2988L72.2988 25.207C76.3418 30.7793 78.75 37.5996 78.75 45C78.75 63.6504 63.6328 78.75 45 78.75Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_2287_12">
        <rect width="90" height="90" fill="white"/>
        </clipPath>
        </defs>
        </svg><p>${message}</p>`;
    }

    body.appendChild(alert);

    setTimeout(function () {
        alert.style.transition = "top 0.5s ease-out";
        alert.style.top = "10px";
    }, 100);

    delayedRemove();
}

export async function confirmPop(message) {
    closeAllPop();
    return new Promise((resolve, reject) => {
        const body = document.querySelector("body");
        const alert = document.createElement("div");
        alert.classList.add("pop", "pop-confirm");
        alert.innerHTML = `<p>${message}</p><div class="pop-buttonGroup"><button class="pop-btn pop-cancelButton">Cancel</button><button class="pop-btn pop-yesButton">Yes</button></div>`;
        body.appendChild(alert);

        document.querySelector(".pop-cancelButton").addEventListener("click", () => {
            alert.remove();
            resolve(false);
        });

        document.querySelector(".pop-yesButton").addEventListener("click", () => {
            alert.remove();
            resolve(true);
        });
    });
}

export async function inputPop(message) {
    closeAllPop();
    return new Promise((resolve, reject) => {
        const body = document.querySelector("body");
        const alert = document.createElement("form");
        alert.classList.add("pop-confirm");
        alert.innerHTML = `<p>${message}</p><input required class="pop-input" id="inputText" type="text"><div class="pop-buttonGroup"><button class="pop-btn pop-cancelButton">Cancel</button><button type="submit" class="pop-btn pop-yesButton pop-submitButton">Submit</button></div>`;
        body.appendChild(alert);

        document.querySelector(".pop-cancelButton").addEventListener("click", () => {
            alert.remove();
            resolve(null);
        });

        alert.addEventListener("submit", function (event) {
            event.preventDefault();
            if (this.checkValidity()) {
                const input = document.querySelector("#inputText").value;
                alert.remove();
                resolve(input);
            }
        });
    });
}

export async function inputPops(vals) {
    closeAllPop();
    return new Promise((resolve, reject) => {
        const body = document.querySelector("body");
        const alert = document.createElement("form");
        alert.classList.add("pop-confirm");
        vals.forEach(val => {
            const key = Object.keys(val)[0];
            const message = val[key];
            const inputDiv = document.createElement("div");
            inputDiv.classList.add("inputDiv");
            inputDiv.innerHTML = `<p class="inputPopsText">${message}</p><input required class="pop-input" id="${key}" type="text">`;
            alert.appendChild(inputDiv);
        });
        alert.innerHTML += `<div class="pop-buttonGroup inputPopsButtons"><button class="pop-btn pop-cancelButton">Cancel</button><button type="submit" class="pop-btn pop-yesButton pop-submitButton">Submit</button></div>`;
        body.appendChild(alert);

        document.querySelector(".pop-cancelButton").addEventListener("click", () => {
            alert.remove();
            resolve(null);
        });

        alert.addEventListener("submit", function (event) {
            event.preventDefault();
            if (this.checkValidity()) {
                const inputs = document.querySelectorAll(".pop-input");
                const response = [];
                inputs.forEach(input => {
                    const val = input.value;
                    const key = input.id;
                    response.push({ [key]: val });
                });
                alert.remove();
                resolve(response);
            }
        });
    });
}