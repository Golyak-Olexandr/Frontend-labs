document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // ЗАВДАННЯ 1: Валідація форми
    // ==========================================
    const form = document.getElementById("val-form");
    const resultBox = document.getElementById("result-box");

    // Регулярні вирази для Варіанта 4 (рядки 1, 5, 6, 7, 8)
    const patterns = {
        fullname: /^[А-ЯІЇЄҐA-Z][а-яіїєґa-z]+\s+[А-ЯІЇЄҐA-Z](\.|\s+[А-ЯІЇЄҐA-Z][а-яіїєґa-z]+)(\.|\s+[А-ЯІЇЄҐA-Z][а-яіїєґa-z]+)?$/u,
        idcard: /^[А-ЯІЇЄҐa-zA-Z]{2}\s*№\s*\d{6}$/u,
        faculty: /^[А-ЯІЇЄҐa-zA-Z]{2,10}$/u,
        birthdate: /^\d{2}\.\d{2}\.\d{4}$/,
        address: /^м\.\s*[А-ЯІЇЄҐа-яіїєґa-zA-Z\s\-]+$/u
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let isValid = true;

        for (const key in patterns) {
            const input = document.getElementById(key);
            const parent = input.parentElement;

            if (!patterns[key].test(input.value.trim())) {
                parent.classList.add("invalid");
                isValid = false;
            } else {
                parent.classList.remove("invalid");
            }
        }

        if (isValid) {
            document.getElementById("res-fullname").textContent = document.getElementById("fullname").value;
            document.getElementById("res-idcard").textContent = document.getElementById("idcard").value;
            document.getElementById("res-faculty").textContent = document.getElementById("faculty").value;
            document.getElementById("res-birthdate").textContent = document.getElementById("birthdate").value;
            document.getElementById("res-address").textContent = document.getElementById("address").value;

            resultBox.classList.remove("hidden");
        } else {
            resultBox.classList.add("hidden");
        }
    });

    // ==========================================
    // ЗАВДАННЯ 2: Інтерактивна таблиця 6х6
    // Варіант 4: Клітинка №4
    // ==========================================
    const table = document.getElementById("interactive-table");
    const colorPicker = document.getElementById("color-picker");
    const variantCellNumber = 4; // Номер варіанта

    let clickTimer = null; // Таймер для розрізнення click та dblclick

    let cellCounter = 1;
    for (let r = 0; r < 6; r++) {
        const row = document.createElement("tr");
        for (let c = 0; c < 6; c++) {
            const cell = document.createElement("td");
            cell.textContent = cellCounter;
            cell.dataset.number = cellCounter;

            // Взаємодія для варіанта №4
            if (cellCounter === variantCellNumber) {
                // 1. Mouseover -> випадковий колір
                cell.addEventListener("mouseover", () => {
                    cell.style.backgroundColor = getRandomColor();
                });

                // 2. Single Click -> зафарбування однієї клітинки із затримкою
                cell.addEventListener("click", () => {
                    clearTimeout(clickTimer);
                    clickTimer = setTimeout(() => {
                        cell.style.backgroundColor = colorPicker.value;
                    }, 250);
                });

                // 3. Double Click -> скасовує одиничний клік і зафарбовує побічну діагональ
                cell.addEventListener("dblclick", () => {
                    clearTimeout(clickTimer);
                    colorAntiDiagonal(colorPicker.value);
                });
            }

            row.appendChild(cell);
            cellCounter++;
        }
        table.appendChild(row);
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function colorAntiDiagonal(color) {
        const cells = table.querySelectorAll("td");
        // Побічна діагональ 6x6: клітинки 6, 11, 16, 21, 26, 31
        const antiDiagNumbers = [6, 11, 16, 21, 26, 31];

        cells.forEach(c => {
            if (antiDiagNumbers.includes(Number(c.dataset.number))) {
                c.style.backgroundColor = color;
            }
        });
    }
});