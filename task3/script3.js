// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const array = [];
for (let index = 0; index < 5; index++) {
    array.push(Math.round(Math.random() * 10));
}
console.log(array);

// 1. Рассчитать сумму элементов этого массива
let sum = 0;
for (let index = 0; index < array.length; index++) {
    sum += array[index];
}
console.log(`сумма ${sum}`);

// 2. Найти минимальное число
let min = array[0];
for (let index = 1; index < array.length; index++) {
    if (array[index] < min) {
        min = array[index];
    } 
}
console.log(`минимальное значение ${min}`);

// 3. Найти есть ли в этом массиве число 3
for (let index = 0; index < array.length; index++) {
    if (array[index] == 3) {
        console.log(`число 3 есть в массиве под индексом ${index}`);
    }
}





