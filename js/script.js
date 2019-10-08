'use strict';

let money, time;

function start() {
    money = +prompt(`Ваш бюджет на месяц?`, `30000`);

    while(isNaN(money) || money == `` || money == null) {
        money = +prompt(`Ваш бюджет на месяц?`, `30000`);
    }

    time = prompt(`Введите дату в формате YYYY-MM-DD`, `2019-05-17`);
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
            let a = prompt(`Введите обязательную статью расходов в этом месяце`, ``);
            let b = prompt(`Во сколько обойдется?`, ``);
        
            if ((typeof(a)) === `string` && (typeof(a)) != null && (typeof(b)) != null && a != `` && b != `` && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.dailyBudget = (appData.budget/ 30).toFixed(2);
    
        alert(`Ежедневный бюджет: ` + appData.dailyBudget);
    },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt(`Какова сумма накоплений?`, ``);
            let percent = +prompt(`Под какой процент?`, ``);
    
            appData.monthIncome = save / 100 / 12 * percent;
    
            alert(`Доход в месяц с вашего депозита: ` + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let opt = prompt(`Введите статью необязательных расходов`, ``);
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt(`Что принесет дополнительный доход? (Перечислите через запятую)`, ``);
        this.income = items.split(`, `);
        this.income.push(prompt(`Может что-то еще?`, ``));
        this.income.sort();
    },
    detectLevel: function() {
        
    }
};
