const today = new Date()

console.log(Date())

// day
const dayProgress = Math.round( ( ( today.getHours() * 60 + today.getMinutes() ) / 1440 ) * 100 )
console.log(dayProgress)

let dayEl = document.getElementById("day-el")
dayEl.innerText = dayProgress + "%"

let dayPb = document.getElementById("day-pb")
dayPb.style.width = dayProgress + "%"

// week
const weekProgress = Math.round( ( ( today.getDay() * 1440 + today.getHours() * 60 + today.getMinutes() ) / 10080 ) * 100 )
console.log(weekProgress)

let weekEl = document.getElementById("week-el")
weekEl.innerText = weekProgress + "%"

let weekPb = document.getElementById("week-pb")
weekPb.style.width = weekProgress + "%"

// month
const monthProgress = Math.round( ( today.getDate() / new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() ) * 100 )
console.log(monthProgress)

let monthEl = document.getElementById("month-el")
monthEl.innerText = monthProgress + "%"

let monthPb = document.getElementById("month-pb")
monthPb.style.width = monthProgress + "%"

// year
// today - new Date(today.getFullYear(),0,1) returns milliseconds passed from start of the year
// 86400000 converts milliseconds to days
const yearProgress = Math.round( ( Math.ceil( ( today - new Date(today.getFullYear(),0,1) ) / 86400000 ) / 365 ) * 100 )
console.log(yearProgress)

let yearEl = document.getElementById("year-el")
yearEl.innerText = yearProgress + "%"

let yearPb = document.getElementById("year-pb")
yearPb.style.width = yearProgress + "%"