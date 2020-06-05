//Создание функции, которая выводит на печать информацию о текущей версии:

function about() {
  let version = "1.0";
  console.log("Forum Netology," + version + ".");
};
about();

//Создание функции, которая печатает список сообщений для пользователя:

let user = {
    name: "Иван Иванов",
    login: "killer504",
    reputation: 97,
    messages: [
      {from: "administrator", text: "Вы получили предупреждение за публикацию рекламы на форуме"},
      {from: "Петр", text: "Собираем встречу в субботу в 19:00. Придёшь?"},
      {from: "administrator", text: "Ваш рейтинг был повышен пользователем DonkeyKong"},
      {from: "administrator", text: "Ваш рейтинг был повышен пользователем Netologist"},
      {from: "Brian Kerninghan", text: "hello, world"}
    ]
};

function printMessages() {
  let n = user.messages.length;

  console.log("Всего сообщений: " + n);

  for (let i = 0; i < n; i++) {
    console.log(user.messages[i].from + "| " + user.messages[i].text);
  }
}

printMessages();
