//Создание функции для обозначения нового Листинга:
function listing(num, title) {
	document.write("<br>" + '<b>Листинг</b> ' + num + '.' + title + "<br>");
}
//Запуск функции:
listing(4.11, ' Использование прототипа');
// //Объект для использования в качестве прототипа:
// var X = {
// 	animal:'корова',
// 	color:'красный',
// 	age:12,
// 	show:function(arg) {
// 		document.write('<b>' + arg + '</b>:');
// 		for(var s in this) {
// 			if(s!='show') {
// 				document.write(s + '->' + this[s] + '|');
// 			}
// 		}
// 		document.write('<br>');
// 	}
// }//Окончание описания объекта-прототипа
// //Первый объект:
// var A = Object.create(X);
// //Второй объект:
// var B = Object.create(X);
// //Проверяем свойства объектов:
// showAll();
// //Присваиваем новые значения свойствам объектов:
// A.color = 'желтый';
// A.age = 3;
// B.color = 'зеленый';
// //Проверяем свойства объектов:
// showAll();
// //Добавление нового свойства в прототип:
// X.name = 'Ирина';
// //Добавляем свойство в первый объект:
// A.haveTail = true;
// //Проверяем свойства объектов:
// showAll();
// //Удаляем свойство age у объекта-прототипа:
// delete X.age;
// //Удаляем свойство color первого объекта:
// delete A.color;
// //Проверяем свойства объектов:
// showAll();
// //Функция для отображения свойств объектов:
// function showAll() {
// 	X.show('X');
// 	A.show('A');
// 	B.show('B');
// 	document.write('<hr>');
// }

listing(4.12, ' Добавление свойств в прототип верхнего уровня');
// //Вспомогательная тестовая переменная:
// var txt = '"name" in Math';
// //Проверка наличия свойства name у объекта Math:
// document.write(txt + '->' + eval(txt) + '<br>');
// //Первый объект:
// var A = {
// 	color:'красный',
// };
// //Второй объект:
// var B = new Object();
// //Добавление свойства number в объект B:
// B.age = 10;
// //Отображжаются свойства объектов: 
// showAll();
// //Добавляется свойство name в прототип Object.prototype:
// Object.prototype.name = 'Ирина Паукова';
// ////Проверка наличия свойства name у объекта Math:
// document.write(txt + '->' + eval(txt) + '<br>');
// //Отображжаются свойства объектов: 
// showAll();
// //Добавляется свойство name в объект B:
// B.name = 'Алина Паукова';
// //Отображение значения свойства name объекта Math:
// document.write('Math.name ->' + Math.name + '<br>');
// //Отображжаются свойства объектов: 
// showAll();
// //Удаление свойства name у прототипа Object.prototype:
// delete Object.prototype.name;
// //Проверка наличия свойства name у объекта Math:
// document.write(txt + '->' + eval(txt) + '<br>');
// //Отображжаются свойства объектов: 
// showAll();
// //Функция для отображения свойств объектов:
// function show(obj) {
// 	for(var s in obj) {
// 		document.write(s + '->' + obj[s] + '|');
// 	}
// 	document.write('<br>');
// }
// function showAll() {
// 	document.write('Объект А:');
// 	show(A);
// 	document.write('Объект B:');
// 	show(B);
// 	document.write('<br>');
// }

listing(4.13, ' Получение доступа к прототипу с помощью метода getPrototypeOf()');
// //Первый объект (создается на основе Math):
// var A = Object.create(Math);
// //Второй объект (создается на основе A):
// var B = Object.create(A);
// //Третий объект (создается на основе B):
// var C = Object.create(B);
// //Четвертый объект (создается на основе С):
// var D = Object.create(C);
// //Добавление метода f() в прототип A:
// Object.getPrototypeOf(A).f = function(x) {
// 	return 2 * x + 1;
// }
// //Переменная с целочисленным значением:
// var t = 2;
// //Вызов метода f() из объекта Math:
// document.write('Функция f ' + '(' + t + ')' + '=' + Math.f(t) + '<br>');
// //Новое значение переменной t:
// t = 3;
// //Вызов метода f() из объекта D:
// document.write('Функция f ' + '(' + t + ')' + '=' + D.f(t) + '<br>');
// //Ссылка на прототип прототипа объекта D:
// var obj = Object.getPrototypeOf(Object.getPrototypeOf(D));
// //Проверка равенства объектов:
// document.write('obj == B ->' + (obj == B) + '<br>');

listing(4.14, ' Создание объекта без прототипа');
// //Пустой объект с прототипом:
// var A = {};
// //Пустой объект без прототипа:
// var B = Object.create(null);
// //Пустой объект с явно указанным прототипом:
// var C = Object.create(B);
// //Добавление свойства name в объект B:
// B.name = "Irina Paukova";
// //Добавление свойства age в прототип верхнего уровня:
// Object.prototype.age = 22;
// //Отображение свойств объектов:
// show(A);
// show(B);
// show(C);
// //Функция для отображения свойств объекта:
// function show(obj) {
// 	for(var s in obj) {
// 		document.write(s + '->' + obj[s]);
// 	}
// 	document.write('<br>');
// }

listing(4.15, ' Конструкторы и прототипы');
// //Конструктор объектов:
// function MyObjekt(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.show = function() {
// 		for(var s in this) {
// 			if(s != 'show') {
// 				document.write(s + '->' + this[s] + '|');
// 			}
// 		}
// 		document.write('<br>');
// 	}
// }
// //Создание объектов на основе конструктора:
// var A = new MyObjekt('Ирина Паукова', 22);
// var B = new MyObjekt('Алина Паукова', 20);
// //Отображение свойств объектов:
// document.write('<b>Cвойства cозданных объектов: </b><br>');
// A.show();
// B.show();
// //Добавление свойства height в прототип объектов:
// MyObjekt.prototype.height = 163;
// //Отображение свойств объектов:
// document.write('<b>Cвойства cозданных объектов: </b><br>');
// A.show();
// B.show();
// //Добавление собственного свойства height в объект А:
// A.height = 163;
// //Удаление свойства height из прототипа объектов:
// delete MyObjekt.prototype.height;
// //Отображение свойств объектов:
// document.write('<b>Cвойства cозданных объектов: </b><br>');
// A.show();
// B.show();
// //Проверка прототипа объекта:
// document.write('<b>Проверка прототипа объекта: </b><br>');
// var txt = 'Object.getPrototypeOf(A) == MyObjekt.prototype';
// document.write(txt + '->' + eval(txt));

listing(4.16, ' Определение конструктора по объекту');
//Конструктор:
function MyObj() {
	this.name = 'Ирина Паукова';
}
//Объект:
var A = new MyObj();
//Определение конструктора через объект:
var F = A.constructor;
//Создание объекта:
var B = new F();
//Проверка значений свойства name объекта:
document.write('Cвойство B.name = ' + B.name + '<br>');
//Новый объект:
A = {};
//Определение конструктора:
F = A.constructor;
//Проверка объекта конструктора:
document.write('Конструктор объекта А = ' + F + '<br>');
//Создание объекта с помощью анонимного конструктора:
A = new function() {
	this.age = 22;
}();
//Определение конструктора:
F = A.constructor;
//Создание объекта:
B = new F();
//Проверка значения свойства age объекта:
document.write('Свойство B.age = ' + B.age);
