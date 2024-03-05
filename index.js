// EXAMPLE 1 - Get a UTC/GMT timestamp using JavaScript

// ✅ get UTC/GMT timestamp
const utcTimestamp = new Date().getTime();
console.log(utcTimestamp); // 👉️ 16422369....

// ✅ get UTC/GMT date and time
const gmtDateTime = new Date().toUTCString();
console.log(gmtDateTime); // 👉️ "Tue, 25 Jul 2023 17:21:46 GMT"

// ------------------------------------------------------------------

// // EXAMPLE 2 - GMT and UTC share the same current time

// const date = new Date();

// // 👇️ returns UTC/GMT Hour of the date
// console.log(date.getUTCHours()); // 👉️ 17

// // 👇️ returns UTC/GMT Minutes of the date
// console.log(date.getUTCMinutes()); // 👉️ 23

// // 👇️ returns UTC/GMT Seconds of the date
// console.log(date.getUTCSeconds()); // 👉️ 8

// // 👇️ returns UTC/GMT year of the date
// console.log(date.getUTCFullYear()); // 👉️ 2023

// // 👇️ returns UTC month (0-11)
// //    0 is January, 11 is December
// console.log(date.getUTCMonth()); // 👉️ 6

// // 👇️ returns UTC/GMT day of the month (1-31)
// console.log(date.getUTCDate()); // 👉️ 25
