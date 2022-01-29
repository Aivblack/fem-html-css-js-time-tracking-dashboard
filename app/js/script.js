// Selectors
const hoursWork = document.querySelector('#hours-work');
const hoursPlay = document.querySelector('#hours-play');
const hoursStudy = document.querySelector('#hours-study');
const hoursExercise = document.querySelector('#hours-exercise');
const hoursSocial = document.querySelector('#hours-social');
const hoursSelfCare = document.querySelector('#hours-self-care');
const previousWork = document.querySelector('#previous-work');
const previousPlay = document.querySelector('#previous-play');
const previousStudy = document.querySelector('#previous-study');
const previousExercise = document.querySelector('#previous-exercise');
const previousSocial = document.querySelector('#previous-social');
const previousSelfCare = document.querySelector('#previous-self-care');

// Event Listeners
document.querySelector("#daily").addEventListener('click', loadDaily);
document.querySelector("#weekly").addEventListener('click', loadWeekly);
document.querySelector("#monthly").addEventListener('click', loadMonthly);

function loadDaily() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.json', true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.responseText);
      hoursWork.innerHTML = data[0].timeframes.daily.current + "hrs";
      hoursPlay.innerHTML = data[1].timeframes.daily.current + "hrs";
      hoursStudy.innerHTML = data[2].timeframes.daily.current + "hrs";
      hoursExercise.innerHTML = data[3].timeframes.daily.current + "hrs";
      hoursSocial.innerHTML = data[4].timeframes.daily.current + "hrs";
      hoursSelfCare.innerHTML = data[5].timeframes.daily.current + "hrs";
      previousWork.innerHTML = "Last Day - "+ data[0].timeframes.daily.previous + "hrs";
      previousPlay.innerHTML = "Last Day - "+ data[1].timeframes.daily.previous + "hrs";
      previousStudy.innerHTML = "Last Day - "+ data[2].timeframes.daily.previous + "hrs";
      previousExercise.innerHTML = "Last Day - "+ data[3].timeframes.daily.previous + "hrs";
      previousSocial.innerHTML = "Last Day - "+ data[4].timeframes.daily.previous + "hrs";
      previousSelfCare.innerHTML = "Last Day - "+ data[5].timeframes.daily.previous + "hrs";
    }
  }

  xhr.send();
  }

function loadWeekly() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.json', true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.responseText);
      hoursWork.innerHTML = data[0].timeframes.weekly.current + "hrs";
      hoursPlay.innerHTML = data[1].timeframes.weekly.current + "hrs";
      hoursStudy.innerHTML = data[2].timeframes.weekly.current + "hrs";
      hoursExercise.innerHTML = data[3].timeframes.weekly.current + "hrs";
      hoursSocial.innerHTML = data[4].timeframes.weekly.current + "hrs";
      hoursSelfCare.innerHTML = data[5].timeframes.weekly.current + "hrs";
      previousWork.innerHTML = "Last Week - " + data[0].timeframes.weekly.previous + "hrs";
      previousPlay.innerHTML = "Last Week - " + data[1].timeframes.weekly.previous + "hrs";
      previousStudy.innerHTML = "Last Week - " + data[2].timeframes.weekly.previous + "hrs";
      previousExercise.innerHTML = "Last Week - " + data[3].timeframes.weekly.previous + "hrs";
      previousSocial.innerHTML = "Last Week - " + data[4].timeframes.weekly.previous + "hrs";
      previousSelfCare.innerHTML = "Last Week - " + data[5].timeframes.weekly.previous + "hrs";
    }
  }

  xhr.send();
  }

function loadMonthly() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.json', true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.responseText);
      hoursWork.innerHTML = data[0].timeframes.monthly.current + "hrs";
      hoursPlay.innerHTML = data[1].timeframes.monthly.current + "hrs";
      hoursStudy.innerHTML = data[2].timeframes.monthly.current + "hrs";
      hoursExercise.innerHTML = data[3].timeframes.monthly.current + "hrs";
      hoursSocial.innerHTML = data[4].timeframes.monthly.current + "hrs";
      hoursSelfCare.innerHTML = data[5].timeframes.monthly.current + "hrs";
      previousWork.innerHTML = "Last Month - " + data[0].timeframes.monthly.previous + "hrs";
      previousPlay.innerHTML = "Last Month - " + data[1].timeframes.monthly.previous + "hrs";
      previousStudy.innerHTML = "Last Month - " + data[2].timeframes.monthly.previous + "hrs";
      previousExercise.innerHTML = "Last Month - " + data[3].timeframes.monthly.previous + "hrs";
      previousSocial.innerHTML = "Last Month - " + data[4].timeframes.monthly.previous + "hrs";
      previousSelfCare.innerHTML = "Last Month - " + data[5].timeframes.monthly.previous + "hrs";
    }
  }

  xhr.send();
  }
