'use strict';

let money = prompt("Ваш бюжет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

console.log(money);
console.log(time);


let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется?");

console.log(answer1);

let appData = {
    budget: money,
    timeData: time,
    expenses: {
       answer1: answer2
    },
    optionalExpenses: null,
    income:null,
    savings: false
};

console.log(appData.expenses);

alert(appData.expenses[answer1] = answer2);
alert( 'daily consumption' + ':' + answer2/30 + 'RUB');


