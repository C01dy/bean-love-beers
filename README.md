### О проекте
***
В проекте реализован функционал интернет-магазина, в котором можно просматривать товары, с возможностью открыть отдельный товар и увидеть его описание. В приложении реализованая поисковая строка, которая рабоатет через отдельный запрос к API. Каждый товар можно добавлять во вкладку "Избранное" (открывается с помощью react-router-dom). Также на странице присутствует пагинация (постраничный вывод).  Управление глобальным состоянием приложения реализовано при помощи redux, локальное - при помощи внутреннего state и методов жизненного цикла классовых компонентов.
Для запросов к серверу используется встроенный в js fetch-api. Стоит отметить, что логика всех запросов на сервер и преобразования данных для удобства вынесена в отдельный класс. Сперва в проекте для прокидывания инстанса класса для работы с запросами был реализован HOC, в который оборачивались те компоненты, которые нуждались в получении данных, позже после добавления в проект redux-thunk и асинхронных экшенов данный HOC был удалён.
Для написания стилей использовался чистый CSS с flexbox вёрсткой.

### Стек технологий
* React
* React router
* Redux

* punkapi.com

### Как запустить проект?
1. Установите npm, выполнив команду ```npm install ```
2. Введите команду ```npm start``` для запуска приложения


