(() => {
    const quesBtnRef = document.querySelector("[quest-button]");
    const answerRef = document.querySelector("[data-answer]");

    quesBtnRef.addEventListener("click", () => {
        const expanded =
            quesBtnRef.getAttribute("area-expanded") === "true" || "false";
        
        quesBtnRef.classList.toggle("is-open");
        quesBtnRef.getAttribute("area-expanded", !expanded);

        answerRef.classList.toggle("is-open");
    });
})();