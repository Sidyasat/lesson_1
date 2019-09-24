'use strict';

let budget = prompt(`Ваш бюджет на месяц?`, `30000`);
let data = prompt(`Введите дату в формате YYYY-MM-DD`, `2019-05-17`);

let expenses = {
    expenseItem: prompt(`Введите обязательную статью расходов в 
                        этом месяце`, ``),
    costExpense: prompt(`Во сколько обойдется`, ``)
};

let appData = {
    budgetPerson: budget,
    timeData: data,

    expensesPerson: expenses,
    optionalExpenses: null,
    income: null,
    savings: false
};

let dailyBudget = (appData.budgetPerson - expenses.costExpense) / 30;

alert(dailyBudget);