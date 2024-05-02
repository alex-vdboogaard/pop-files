function closePop(element) {
    element.parentNode.remove();
}

function closeAllPop() {
    document.querySelectorAll(".pop").forEach(pop => {pop.remove();});
}

//this makes the popup move up out of the screen then disappear
function delayedRemove() {
    const popElements = document.querySelectorAll(".pop");
    setTimeout(function() {
        popElements.forEach(pop => {
            pop.style.transition = "margin-top 0.5s ease-out";
            pop.style.marginTop = "-80px"; 
            pop.addEventListener("transitionend", function() {
                pop.remove();
            }, { once: true });
        });
    }, 3000);
}

function simplePop(type, message) {
    closeAllPop();
    if (type === "success") type = "pop-success";
    if (type === "error") type = "pop-error";
    const body = document.querySelector("body");
    const alert = document.createElement("div");
    alert.classList.add("pop-top", "pop", type);
    alert.innerHTML = `<p>${message}</p><p class="pop-close" onclick="closePop(this)">x</p>`;
    body.appendChild(alert);

    setTimeout(function() {
        alert.style.transition = "top 0.5s ease-out";
        alert.style.top = "10px";
    }, 100); 

    delayedRemove();
}

async function confirmPop(message) {
    closeAllPop();
    return new Promise((resolve, reject) => {
        const body = document.querySelector("body");
        const alert = document.createElement("div");
        alert.classList.add("pop","pop-confirm");
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

async function inputPop(message) {
    closeAllPop();
    return new Promise((resolve, reject) => {
        const body = document.querySelector("body");
        const alert = document.createElement("div");
        alert.classList.add("pop-confirm");
        alert.innerHTML = `<p>${message}</p><input class="pop-input" id="inputText" type="text"><div class="pop-buttonGroup"><button class="pop-btn pop-cancelButton">Cancel</button><button class="pop-btn pop-yesButton pop-submitButton">Submit</button></div>`;
        body.appendChild(alert);

        document.querySelector(".pop-cancelButton").addEventListener("click", () => {
            alert.remove();
            resolve(null);
        });

        document.querySelector(".pop-submitButton").addEventListener("click", () => {
            const input = document.querySelector("#inputText").value;
            if (input) {
                alert.remove();
                resolve(input);
            }
            else {
                const body = document.querySelector("body");
                const alert1 = document.createElement("div");
                alert1.classList.add("top-pop", "pop", "pop-error");
                alert1.innerHTML = `<p>Please fill in all the fields</p><p class="pop-close" onclick="closePop(this)">x</p>`;
                body.appendChild(alert1);

                setTimeout(function() {
                    alert1.style.transition = "top 0.5s ease-out";
                    alert1.style.top = "10px";
                }, 100); 
            
                delayedRemove();
            }
        });
    });
}