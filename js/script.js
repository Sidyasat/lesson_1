'use strict';

let startBtn = document.getElementById(`start`);
let budgetValue = document.getElementsByClassName(`budget-value`)[0];
let dayBudgetValue = document.getElementsByClassName(`daybudget-value`)[0];
let levelValue = document.getElementsByClassName(`level-value`)[0];
let expensesValue = document.getElementsByClassName(`expenses-value`)[0];
let optionalExpensesValue = document.getElementsByClassName(`optionalexpenses-value`)[0];
let incomeValue = document.getElementsByClassName(`income-value`)[0];
let monthSavingsValue = document.getElementsByClassName(`monthsavings-value`)[0];
let yearSavingsValue = document.getElementsByClassName(`yearsavings-value`)[0];

let expensesItem = document.getElementsByClassName(`expenses-item`);
let expensesBtn = document.getElementsByTagName(`button`);
let optionalExpensesBtn = document.getElementsByTagName(`button`)[1];
let coutBtn = document.getElementsByTagName(`button`)[2];
let optionalExpensesItem = document.querySelectorAll(`.optionalexpenses-item`);
let incomeItem = document.querySelector(`.choose-income`);
let checkSavings = document.querySelector(`#savings`);
let sumValue = document.querySelector(`.choose-sum`);
let percentValue = document.querySelector(`.choose-percent`);
let yearValue = document.querySelector(`.year-value`);
let monthValue = document.querySelector(`.month-value`);
let dayValue = document.querySelector(`.day-value`);

let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

startBtn.addEventListener(`click`, function() {
    time = prompt(`Введите дату в формате YYYY-MM-DD`, `2019-10-8`);
    money = +prompt(`Ваш бюджет на месяц?`, `30000`);

    while(isNaN(money) || money == `` || money == null) {
        money = +prompt(`Ваш бюджет на месяц?`, `30000`);
    }

    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = appData.budget.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

for (let i = 0; i < expensesBtn.length; i++){
    expensesBtn[i].addEventListener(`click`, function() {
        let sum = 0;

        for(let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value;
            let b = expensesItem[++i].value;
        
            if ((typeof(a)) === `string` && (typeof(a)) != null && (typeof(b)) != null && a != `` && b != `` && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i--;
            }
        }
        expensesValue.textContent = sum;
    });
}

optionalExpensesBtn.addEventListener(`click`, function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ` `;
    }
});

coutBtn.addEventListener(`click`, function(){
    if (appData.budget != undefined) {
        appData.dailyBudget = (appData.budget/ 30).toFixed();
        dayBudgetValue.textContent = appData.dailyBudget;

        if (appData.dailyBudget < 100) {
            levelValue.textContent = `Минимальный уровень достатка`;
        } else if (appData.dailyBudget > 100 && appData.dailyBudget < 2000) {
            levelValue.textContent = `Средний уровень достатка`;
        } else if (appData.dailyBudget > 2000) {
            levelValue.textContent = `Высокий уровень достатка`;
        } else {
            levelValue.textContent = `Произошла ошибка`;
        }
    } else {
        dayBudgetValue.textContent = `Произошла ошибка`;
    }
});

incomeItem.addEventListener(`input`, function() {
    let items = incomeItem.value;
    appData.income = items.split(`, `);
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener(`click`, function() {
    if (appData.savings == false) {
        appData.savings = true;
    } else {
        appData.savings = false;
    }
});

sumValue.addEventListener(`input`, function() {
    if (appData.savings == true) {
        let sum = sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener(`input`, function() {
    if (appData.savings == true) {
        let sum = sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});