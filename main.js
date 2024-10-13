// THIS IS THE WEATHER APP IN CLASS EXAMPLE
// console.log("This is main.js")
//// const apiKey = '&key=a42277c072fd4c54a4b214312240306'
//// const baseURL = 'https://api.weatherapi.com/v1';
// const path = '/current.json'
// async function getData(city, apiKey) {    
//     let finalURL = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${apiKey}`
//     let result = await fetch(finalURL)
//     let jsonRes = await result.json();
//     console.log(jsonRes);
// }
// getData('scarborough', 'a42277c072fd4c54a4b214312240306');





// START OF ASSIGNMENT
// const path = '/current.json'
let today = new Date();

// FUNCTION TO AUTOMATICALLY CHANGE TO CURRENT DATE
async function getAPOD(apiKey, date) {
    let formatdate = date.toLocaleDateString('en-CA'); 
    let finalURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formatdate}`;
    
    let result = await fetch(finalURL);
    let jsonRes = await result.json();

    let dateString = jsonRes.date;
    let text = jsonRes.explanation;
    let image = jsonRes.hdurl 
    let title = jsonRes.title;
    let copyright = jsonRes.copyright || 'No copyright';

// TO SHOW UPDATED CONTENT ON THE PAGE
    const content = document.querySelector('#main-container');
    content.innerHTML = `
        <p>${dateString}</p>
        <p><img src="${image}" alt="${text}" style="max-width:100%;"/></p>
        <p>${title}</p>
        <p>Image Credit & Copyright: ${copyright}</p>
        <p>Explanation: ${text}</p>
    `;

    console.log(jsonRes);
}

// THIS IS FOR THE BUTTONS- MAKING IT INTERACTIVE- ALLOWING USERS TO GO TO THE PREVIOUS DAY AND FORWARD
document.getElementById('prev-button').addEventListener('click', () => {
    today.setDate(today.getDate() - 1); 
    getAPOD('AVveXTCvswaMOniFuqB46EUcYPjeFUb7INfoSyhT', today);
});

document.getElementById('next-button').addEventListener('click', () => {
    today.setDate(today.getDate() + 1); 
    getAPOD('AVveXTCvswaMOniFuqB46EUcYPjeFUb7INfoSyhT', today);
});


getAPOD('AVveXTCvswaMOniFuqB46EUcYPjeFUb7INfoSyhT',today);





