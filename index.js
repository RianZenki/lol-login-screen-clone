const inputs = document.querySelectorAll(".text-input")

console.log(inputs)

inputs.forEach(element => {
    element.addEventListener("focus", ({ target }) => {
        const span = target.previousElementSibling
    
        span.classList.add("selected")
    })
    
    element.addEventListener("focusout", ({ target }) => {
        
        if (target.value === "") {
            const span = target.previousElementSibling
            span.classList.remove("selected")
        }
    })
});

