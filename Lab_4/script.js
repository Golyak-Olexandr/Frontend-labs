document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // ЗАВДАННЯ 1: Зміна кольору фону та тексту
    // Варіант 4: (4 mod 10) + 1 = 5
    // ==========================================

    // Елемент №5 — доступ через getElementById
    const element5 = document.getElementById("elem-5");
    let isElem5Toggled = false;

    if (element5) {
        element5.addEventListener("click", () => {
            if (!isElem5Toggled) {
                element5.style.backgroundColor = "#2c3e50";
                element5.style.color = "#ffffff";
            } else {
                element5.style.backgroundColor = "";
                element5.style.color = "";
            }
            isElem5Toggled = !isElem5Toggled;
        });
    }

    // Елемент №6 (наступний елемент) — доступ через querySelector
    const element6 = document.querySelector(".element-6-target");
    let isElem6Toggled = false;

    if (element6) {
        element6.addEventListener("click", () => {
            if (!isElem6Toggled) {
                element6.style.backgroundColor = "#e74c3c";
                element6.style.color = "#ffffff";
            } else {
                element6.style.backgroundColor = "";
                element6.style.color = "";
            }
            isElem6Toggled = !isElem6Toggled;
        });
    }

    // ==========================================
    // ЗАВДАННЯ 2: Керування зображенням (4 кнопки)
    // ==========================================

    const imgWrapper = document.getElementById("image-paragraph");

    const btnAdd = document.getElementById("btn-add");
    const btnIncrease = document.getElementById("btn-increase");
    const btnDecrease = document.getElementById("btn-decrease");
    const btnDelete = document.getElementById("btn-delete");

    const imageSrc = "zhytomyr.jpg";
    const imageAlt = "Підвісний міст у Житомирі";
    const imageHref = "https://zt-rada.gov.ua";
    let currentWidth = 600;

    // 1. Додати зображення
    btnAdd.addEventListener("click", () => {
        let img = document.getElementById("city-image");
        if (!img) {
            const newLink = document.createElement("a");
            newLink.href = imageHref;
            newLink.target = "_blank";
            newLink.rel = "noopener noreferrer";
            newLink.id = "img-link";

            const newImg = document.createElement("img");
            newImg.src = imageSrc;
            newImg.alt = imageAlt;
            newImg.id = "city-image";
            newImg.width = currentWidth;

            newLink.appendChild(newImg);
            imgWrapper.appendChild(newLink);
        } else {
            alert("Зображення вже присутнє на сторінці!");
        }
    });

    // 2. Збільшити зображення
    btnIncrease.addEventListener("click", () => {
        const img = document.getElementById("city-image");
        if (img) {
            currentWidth += 50;
            img.width = currentWidth;
        } else {
            alert("Спочатку додайте зображення!");
        }
    });

    // 3. Зменшити зображення
    btnDecrease.addEventListener("click", () => {
        const img = document.getElementById("city-image");
        if (img) {
            if (currentWidth > 100) {
                currentWidth -= 50;
                img.width = currentWidth;
            } else {
                alert("Досягнуто мінімального розміру зображення!");
            }
        } else {
            alert("Спочатку додайте зображення!");
        }
    });

    // 4. Видалити зображення
    btnDelete.addEventListener("click", () => {
        const img = document.getElementById("city-image");
        if (img) {
            const link = document.getElementById("img-link");
            if (link) {
                link.remove();
            } else {
                img.remove();
            }
        } else {
            alert("Зображення вже видалено!");
        }
    });
});