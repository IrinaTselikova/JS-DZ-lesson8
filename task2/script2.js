// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
const arr1 = array.slice(0, 3);
const arr2 = array.slice(5, 7);
const resArr = arr1 +","+ arr2;
console.log(resArr);
