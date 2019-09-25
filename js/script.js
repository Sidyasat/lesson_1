'use strict';

let money = +prompt(`Ваш бюджет на месяц?`, `30000`);
let time = prompt(`Введите дату в формате YYYY-MM-DD`, `2019-05-17`);

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for(let i = 0; i < 2; i++) {
    let a = prompt(`Введите обязательную статью расходов в этом месяце`, ``);
    let b = prompt(`Во сколько обойдется?`, ``);

    if ((typeof(a)) === `string` && (typeof(a)) != null && (typeof(b)) != null && a != `` && b != `` && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        i--;
    }
}

appData.dailyBudget = appData.budget/ 30;

alert(`Ежедневный бюджет: ` + appData.dailyBudget);