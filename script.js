"use strict";

// ***************** 1 *********


// function getData(url) {
//   let result = fetch(url);
//   let titles = [];

//   result
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       for (let item of data)
//         if (item.title[0] === "a") {
//           titles.push(item);
//         }
//     });

//   console.log(titles);
// }  

//  getData('https://jsonplaceholder.typicode.com/todos/');

//**************** 2 ***********
// async function getData(url) {
//   let result = await fetch(url);
//   let data = await result.json();
//   let titles = [];

//   for (let item of data)
//     if (item.title[0] === "a") {
//       titles.push(item);
//     }
//   console.log(titles);
// }
// getData('https://jsonplaceholder.typicode.com/todos/');


// *******************  3  ****************
// const userA = document.querySelector('.user-a');
// const userAB = document.querySelector('.user-ab');
// const url = 'https://jsonplaceholder.typicode.com/todos/';

// async function getData(url) {
//   try {
//     let result = await fetch(url);
//     if (result.ok) {
//       let response = await result.json();
//       let filteredA = response.filter((item) => item.title[0] === 'a');
//       filteredA.forEach((element) => {
//         const el = document.createElement('p');
//         el.textContent = JSON.stringify(element);
//         userA.append(el);
//       });
//       let filteredAB = filteredA.filter((item) => item.title.startsWith('ab'));
//       filteredAB.forEach((element) => {
//         const el = document.createElement('p');
//         el.textContent = JSON.stringify(element);
//         userAB.append(el);
//       });
//     }
//   } catch (err) {
//     console.log(err, err.message);
//   }
// }

// getData(url);


//***********************  4  ***************
// const userA = document.querySelector('.user-a');
// const userAB = document.querySelector('.user-ab');
// const buttonA = document.querySelector('.add-a');
// const buttonAB = document.querySelector('.add-ab');
// const buttonAll = document.querySelector('.add-all');
// const url = 'https://jsonplaceholder.typicode.com/todos/';

async function getAsyncData2(url) {
  try {
    let result = await fetch(url);
    if (result.ok) {
      let response = await result.json();
      let filteredA = response.filter((item) => item.title[0] === 'a');

      buttonA.addEventListener('click', addA);

      function addA() {
        filteredA.forEach((element) => {
          const el = document.createElement('p');
          el.textContent = JSON.stringify(element);
          userA.append(el);
        });
      }

      buttonAB.addEventListener('click', addAB);

      let filteredAB = filteredA.filter((item) => item.title.startsWith('ab'));

      function addAB() {
        filteredAB.forEach((element) => {
          const el = document.createElement('p');
          el.textContent = JSON.stringify(element);
          userAB.append(el);
        });
      }

      buttonAll.addEventListener('click', ()=>{
        addA();
        addAB()
      })
    }
  } catch (err) {
    console.log(err, err.message);
  }
}

getAsyncData2(url);

//