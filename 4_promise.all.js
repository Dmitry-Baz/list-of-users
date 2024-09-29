const dataContainer = document.getElementById('data-container');
const loader = document.getElementById('loader');

// Функция для получения пользователей
async function fetchUsers() {
    // Показываем элемент загрузки
    loader.hidden = false;

    try {
        // Загружаем данные с помощью fetch
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // Проверяем, если ответ успешный
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Получаем данные в формате JSON
        const users = await response.json();

        // Добавляем пользователей в контейнер
        users.forEach(user => {
            const listItem = document.createElement('li');
            const userLink = document.createElement('a');
            userLink.href = '#';
            userLink.textContent = user.name;
            listItem.appendChild(userLink);
            dataContainer.appendChild(listItem);
        });
    } catch (error) {
        // Выводим ошибку в консоль
        console.error('Ошибка при получении данных:', error);
    } finally {
        // Скрываем элемент загрузки
        loader.hidden = true;
    }
}

// Вызываем функцию для получения пользователей
fetchUsers();