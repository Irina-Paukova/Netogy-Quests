//Создание функции для обозначения нового Листинга:
function listing(num, title) {
	document.write("<br>" + '<b>Листинг</b> ' + num + '.' + title + "<br>");
}
// Создание объекта obj со свойствами name и age:
var obj = {
	name: "Ирина Паукова",
	age: 22,
}
//Запуск функции:
listing(4.1, ' Создание объекта с помощью литерала объекта');
//Отображение значений свойств объекта:
document.write("<b>Имя</b>:" + obj.name + "<br>");
document.write("<b>Возраст</b>:" + obj.age + "<br>");
//Новые значения свойств объкта:
obj.name = "Алина Паукова";
obj.age = 20;

//Отображение новых значений свойств объекта:
document.write("<b>Имя</b>:" + obj.name + "<br>");
document.write("<b>Возраст</b>:" + obj.age + "<br>");

listing(4.2, ' Использование функции для отображения свойств объекта');
//Создание объекта obj со свойствами name и age:
var obj = {
	name:'Ирина Паукова',
	age:22,
}
//Отображение значений свойств объекта: 
show(obj);
//Новые значения свойств объкта:
obj.name = "Паукова Алина";
obj.age = 20;
//Отображение новых значений свойств объекта:
show(obj);
//Функция для отображения свойств объекта: 
function show(a) {
  document.write("<b>Имя</b>:" + a.name + "<br>");
  document.write("<b>Возраст</b>:" + a.age + "<br>");
}

listing(4.3, ' Создание объекта с методом');
//Создание объекта obj со свойствами name и age:
var obj = {
	name:'Ирина Паукова',
	age:22,
	show:function() {
		document.write("<b>Имя</b>:" + this.name + "<br>");
        document.write("<b>Возраст</b>:" + this.age + "<br>");
	}
}
//Отображение значений свойств объекта: 
obj.show();
//Новые значения свойств объкта:
obj.name = "Паукова Алина";
obj.age = 20;
//Отображение новых значений свойств объекта:
obj.show();

listing(4.4, ' Присваивание объекта значением переменной');
//Создание объекта:
var objA = {
	name:'Ирина Паукова',
	age:22,
	show: function() {
		document.write("<u>Имя</u>:" + this.name + "<br>");
        document.write("<u>Возраст</u>:" + this.age + "<br>");
	}
} 
//Отображение значнний свойств объекта objA:
document.write('<b>Объект objA:</b><br>');
objA.show();
//Присваивание объекта значением переменной:
var objB = objA;
//Отображение значений свойств объекта objB:
document.write('<b>Объект objB:</b><br>');
objB.show();
//Новые значения свойств объекта objA:
objA.name = 'Алина Паукова';
objA.age = 20;
//Отображение новых значений свойств объекта objA:
document.write('<b>Объект objA:</b><br>');
objA.show();
//Отображение новых значений свойств объекта objB:
document.write('<b>Объект objB:</b><br>');
objB.show();

listing(4.5, ' Создание пустого объекта с последующим добавлением свойств и метода');
//Создание пустого объекта:
var obj = {};
//Добавление свойства name:
obj.name = 'Ирина Паукова';
//Добавление свойства age:
obj.age = 22;
//Добавление метода show():
obj.show = function() {
	document.write('<b>Имя</b>:' + this.name + '<br>');
    document.write('<b>Возраст</b>:' + this.age + '<br>');
}
//Отображение значений свойств объекта:
obj.show();
listing(4.6, ' Использование функции-конструктор для создания объектов');
//Функция-конструктор объектов:
function Fellow(name, age) {
	//Значение свойтсва name:
	this.name = name;
	//Значение свойства age:
	this.age = age;
	//Метод show():
	this.show = function() {
		document.write('<b>Имя</b>:' + this.name + '<br>');
		document.write('<b>Возраст</b>:' + this.age + '<br>');
	}
}
//Создание объектов с помощью конструктора:
var objA = new Fellow('Ирина Паукова', 22);
var objB = new Fellow('Алина Паукова', 20);
//Проверка значений объектов:
objA.show();
objB.show();

listing(4.7, ' Использование оператора with');
with(document) {
	write('<b>Знакомимся с котиком:</b>' + '<br>');
	var cats = {
		name:'Муся',
		breed:'Сфинкс', 
		age:8,
	}
	with(cats) {
		write('Кличка: ' + name + '<br>');
		write('Порода: ' + breed + '<br>');
		write('Возраст: ' + age + '<br>');
	}
}

listing(4.8, ' Использование оператора for-in');
document.write('<b>Цвета:</b>' + '<br>');
var colors = {
	red:'красный', yellow:'желтый', green:'зеленый'
}
for(var s in colors) {
	document.write(s + '-' + colors[s] + '<br>');
}

listing(4.9, ' Использование оператора in');
document.write('<b>Проверка свойств объекта:</b>' + '<br>');
var colors = {
	red:'красный', yellow:'желтый', green:'зеленый'
}
var a = 'red' in colors;
var b = 'blue' in colors;
document.write('Наличие свойства red: ' + a + '<br>');
document.write('Наличие свойства blue: ' + b + '<br>');

listing(4.10, ' Использование оператора delete');
document.write('<b>Удаление свойств и методов:</b>' + '<br>');
//Создание объекта:
var colors = {
	red:'красный',
	yellow:'желтый',
	green:'зеленый',
	show:function() {
		with(document) {
			write('свойства и методы объекта:<br>');
			for(var s in this) {
				write(s + '|');
			}
			write('<hr>');
		}
	}
}//Окончание описания объекта
//Отображение списка свойств:
colors.show();
//Удаление свойства red:
delete colors.red;
//Отображение списка свойств:
colors.show();
//Удаление свойства yellow:
delete colors.yellow;
//Отображение списка свойств:
colors.show();
//Удаление метода show():
delete colors.show;
//Проверка наличия у объекта свойства green:
tst = '"green" in colors';
document.write(tst + '->' + eval(tst));