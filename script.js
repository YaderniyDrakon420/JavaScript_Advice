
async function displayAdvice() {
    const container = document.getElementById("advice-container");

    try {
        const response = await fetch("https://api.adviceslip.com/advice");

        if (!response.ok) {
            throw new Error("Помилка отримання поради");
        }

        const data = await response.json();

        container.textContent = data.slip.advice;
    } catch (error) {
        container.textContent = "Не вдалося отримати пораду.";
    }
}

displayAdvice();
