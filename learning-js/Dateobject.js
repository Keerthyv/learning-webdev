/* jshint esversion:6 */

//Date Tasks
//Task 1

//let date = new Date();
// changedDate = new Date(date);
// changedDate.setMonth(4);

// console.log(date.toString());
// console.log(changedDate.toString());

function getWeekday(date) {

    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}

// console.log(date);

// console.log(getWeekday(date));

//Task 3 - Get day x days ago from a date

function getDateAgo(date, days) {
    let copyDate = new Date(date);
    copyDate.setDate(date.getDate() - days);
    return copyDate;
}

//answer = getDateAgo(date, 15);

//console.log(date.toString());
//console.log(answer.toString());

//Task 4 - Last day of month

function getLastDayOfMonth(year, month) {

    let date = new Date(year, month + 1, 0);

    let lastDay = date.getDate();

    return lastDay;
}

//lastDay = getLastDayOfMonth(2012, 1);

//console.log(lastDay);

//Task 5 - Seconds passed today

function getSecondsToday() {
    let dateStart = new Date();
    dateStart.setHours(0, 0, 0, 0);
    let dateNow = new Date();
    //console.log(dateNow.toString());
    return (dateNow.getTime() - dateStart.getTime()) / 1000;
}

//seconds = getSecondsToday();
//console.log(seconds);

//Task 6 - Seconds till tomorrow

function getSecondsTillTomo() {

    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now;

    return Math.round(diff / 1000);

}

console.log(getSecondsTillTomo());