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



function simplePop(message) {
    closeAllPop();
    const body = document.querySelector("body");
    const alert = document.createElement("div");
    alert.classList.add("top-pop", "pop", "success-div");
    alert.innerHTML = `<p>${message}</p><p class="close" onclick="closePop(this)">x</p>`;
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
        alert.classList.add("pop","confirm");
        alert.innerHTML = `<p>${message}</p><div class="buttonGroup"><button class="btn cancelButton">Cancel</button><button class="btn yesButton">Yes</button></div>`;
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
