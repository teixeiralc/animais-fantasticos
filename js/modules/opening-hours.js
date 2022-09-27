export default function initOpeningHours() {
  // Get datasets into arrays
  const functioning = document.querySelector("[data-week]");
  const workHours = functioning.dataset.hours.split(",").map(Number);
  const weekDays = functioning.dataset.week.split(",").map(Number);

  // Get current date and time
  const dateNow = new Date();
  const curWeekDay = dateNow.getDay();
  const curHour = dateNow.getUTCHours() - 3;

  // Verify if current date matches the opening hours.
  const weekOpen = weekDays.indexOf(curWeekDay) !== -1;
  const openingHours = curHour >= workHours[0] && curHour < workHours[1];

  if (weekOpen && openingHours) functioning.classList.add("open");
  else functioning.classList.add("closed");
}
