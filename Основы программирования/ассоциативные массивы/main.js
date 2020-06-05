//Создание ассоциативного массив user:

let user = {
name: 'Лев Толстой',
login: 'leo_tolstoy',
reputation: 97,
total: 900
}
console.log(user.name + ", репутация " + user.reputation + ", сообщений " + user.total);

//Создание объекта с помощью перебора имеющегося массива:

let messages = [
  [ "zloy-zloy", "Мы с Алешей сегодня на иксбоксе рубились, потом в маке поели, потом ему новый телефон купили, и два часа с горок в Нескучном саду катались."],
  ["zloy-zloy", "У Алеши завтра день рождения."],
  ["zloy-zloy", "Он мой дед. Ему будет 81 год."],
  ["Вы", "LOL"]
]; 

let replica = {}

for (let i = 0; i < messages.length; i++) {
  replica = {name: messages[i][0], text: messages[i][1]} 
  messages[i] = replica 
  console.log(replica.name + ": " + replica.text)
}

//Добавление нового свойства в объект и присваивание ему не тривиального значения.  

chats = {};

user.chats = {
  mama: [ { author: "mama", text: "Ты покушал?" },
  { author: "mama", text: "Почему не отвечаешь?" },
  { author: "Вы", text: "Покушал, мам" } ], 
  wife: [ {author: "вы", text: "Устал и загрустил"},
  {author: "вы", text: "Ленюсь"},
  {author: "wife", text: "zzz"} ]
}

for (let e = 0; e < user.chats.wife.length; e++) {
let chat = user.chats.wife[e];
console.log(chat.author + ": " + chat.text)
}

console.log(user)