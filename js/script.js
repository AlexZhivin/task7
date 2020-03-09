'use strict';
let start = document.getElementById('start');
let value = document.querySelectorAll('.budget, .budget-value, .daybudget, .daybudget-value, .level, .level-value, .expenses, .expenses-value, .optionalexpenses, .optionalexpenses-value, .income, .income-value, .monthsavings, .monthsavings-value, .yearsavings, .yearsavings-value ');
let input = document.querySelectorAll('.expenses-item');
let button = document.getElementsByTagName('button');
let accept =button[0];
let calculate = button[2];
let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');
let chooseIncome = document.querySelector('.choose-income');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

