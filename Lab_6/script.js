document.addEventListener("DOMContentLoaded", () => {
    const btnDownload = document.getElementById("btn-download");
    const statusMsg = document.getElementById("status-msg");
    const usersContainer = document.getElementById("users-container");

    btnDownload.addEventListener("click", () => {
        statusMsg.textContent = "Завантаження...";
        statusMsg.className = "status";
        usersContainer.innerHTML = "";

        // Використання fetch та Promises за вимогами методички
        fetch("https://randomuser.me/api/?results=5")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Помилка завантаження даних");
                }
                return response.json(); // Перетворення у формат JSON
            })
            .then((data) => {
                statusMsg.textContent = "success!";
                statusMsg.className = "status success";

                // Обробка отриманого масиву користувачів
                data.results.forEach((user) => {
                    // Витягуємо дані відповідно до Варіанта 4:
                    // 1. picture
                    // 2. name
                    // 3. city
                    // 4. postcode
                    // 5. phone
                    const picture = user.picture.large;
                    const name = `${user.name.first} ${user.name.last}`;
                    const city = user.location.city;
                    const postcode = user.location.postcode;
                    const phone = user.phone;

                    // Створення картки
                    const card = document.createElement("div");
                    card.className = "user-card";

                    card.innerHTML = `
                        <img src="${picture}" alt="${name}">
                        <h3>${name}</h3>
                        <p><strong>City:</strong> ${city}</p>
                        <p><strong>Postcode:</strong> ${postcode}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                    `;

                    usersContainer.appendChild(card);
                });
            })
            .catch((error) => {
                console.error("Error:", error);
                statusMsg.textContent = "Помилка при отриманні даних!";
                statusMsg.className = "status error";
            });
    });
});