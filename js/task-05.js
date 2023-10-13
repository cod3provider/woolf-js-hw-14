const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const handleInput = e => {
    const {currentTarget} = e;
    output.textContent= currentTarget.value;

    if (currentTarget.value === "") {
        output.textContent = "Anonymous";
    }
}

input.addEventListener('input', handleInput);