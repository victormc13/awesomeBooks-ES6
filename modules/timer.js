import { DateTime } from './luxon.js';

const updateTimer = () => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.querySelector('.date').textContent = date;
};

setInterval(updateTimer, 1000);