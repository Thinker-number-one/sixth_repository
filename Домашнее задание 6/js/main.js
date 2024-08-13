alert('Сейчас будет решение ПЕРВОГО задания!');

// Задание первое

let num1 = 5;
console.log(num1);

let num2 = prompt('Введите цифру от 0 до 9');
console.log(+num2);

switch(+num2) {
    case num1:
        console.log('Да, верно');
        break;
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log('Нет, не верно');
        break;
    default:
        console.log('Не сработало');
}

alert('Сейчас будет решение ВТОРОГО задания!');

// Задание второе

let a = prompt('Введите число от 1 до 12');
console.log(+a);

switch(+a) {
    case 1: // Декабрь
    case 2: // Январь
    case 3: // Февраль
        alert('Зима');
        break;
    case 4: // Март
    case 5: // Апрель
    case 6: // Май
        alert('Весна');
        break;
    case 7: // Июнь
    case 8: // Июль
    case 9: // Август
        alert('Лето');
        break;
    case 10: // Сентябрь
    case 11: // Октябрь
    case 12: // Ноябрь
        alert('Осень');
        break;
    default:
        alert('Нет такого времени года');
}

alert('Сейчас будет решение ТРЕТЬЕГО задания!');

// Задание третье

let firstName = null;
let secondName = undefined;
let nickName = 'Denis';

console.log(firstName ?? secondName ?? nickName);