// Библиотеки
// Выполни в консоли команду: npm install express
// Посмотри на содержимое созданного каталога node_modules, там все 
// установленные либы

var http = require('http'), // Стандартная либа для работы с HTTP
  express = require('express'); // Установленный только что web сервер

var app = express(), // Создание web сервера
  server = http.createServer(app); // Создание слушателя HTTP

// Роутинг web сервера
// Запрос GET на адрес / будет обрабатываться этой функцией
app.get('/', function(request, response){ 
  response.sendfile('index.html'); // Передача в ответ файла index.html
})

server.listen(8000); // Прослушивание порта 8000

// Запусти скрипт после установки библиотеки express и перейди в браузере на 
// адрес: http://localhost:8000

// Зайди в консоль браузера и посмотри в "Сеть", какие файлы скачались и с каким 
// содержимым
