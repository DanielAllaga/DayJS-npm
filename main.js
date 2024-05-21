const dayjs = require('dayjs') 
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') 
dayjs.extend(utc)
dayjs.extend(timezone)

const dateToday = new Date(); 


// DOM Manipulation 
const getTimeZone = document.querySelector('.timezone');
const getCurrentTime = document.querySelector('.time');
const getDate = document.querySelector('.date');
const timeZoneSelection = document.querySelector('.dropdown');
const btnApplyChanges = document.querySelector('.btn-primary');



// Passing the values to html 
getCurrentTime.innerText = dayjs(dateToday).format('h:mm A');
getDate.innerText = dayjs(dateToday).format('ddd, MMM D, YYYY');
getTimeZone.innerHTML = dayjs.tz.guess();



timeZoneSelection.addEventListener('change', function() {
    // Get the selected value
    const selectedValue = timeZoneSelection.value;

    // Log the selected value to the console
    console.log('Selected option:', selectedValue);
});

//Get all available timezone 
const timeZones =  Intl.supportedValuesOf("timeZone");

timeZones.forEach( timezone => {
    const option = document.createElement('option'); 
    option.value = timezone; 
    option.textContent = timezone; 
    timeZoneSelection.appendChild(option); 
});




// Change display based on the selected tiemzone 
btnApplyChanges.addEventListener('click', function() {

    const selectedValue = timeZoneSelection.value;
    getCurrentTime.innerText = dayjs(dateToday).tz(selectedValue).format('h:mm A');
    getDate.innerText = dayjs(dateToday).tz(selectedValue).format('ddd, MMM D, YYYY');
    getTimeZone.innerHTML = selectedValue;

}); 