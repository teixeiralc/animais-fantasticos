export default class OpeningHours {
  constructor(functioning, activeClass, inactiveClass) {
    this.functioning = document.querySelector(functioning);
    this.activeClass = activeClass;
    this.inactiveClass = inactiveClass;
  }

  functioningDate() {
    // Get datasets into arrays
    this.workHours = this.functioning.dataset.hours.split(',').map(Number);
    this.weekDays = this.functioning.dataset.week.split(',').map(Number);
  }

  curDate() {
    // Get current date and time
    this.dateNow = new Date();
    this.curWeekDay = this.dateNow.getDay();
    this.curHour = this.dateNow.getUTCHours() - 3;
  }

  verifyDate() {
    // Verify if current date matches the opening hours.
    const weekOpen = this.weekDays.indexOf(this.curWeekDay) !== -1;
    const openingHours =
      this.curHour >= this.workHours[0] && this.curHour < this.workHours[1];

    return weekOpen && openingHours;
  }

  isOpen() {
    if (this.verifyDate()) this.functioning.classList.add(this.activeClass);
    else this.functioning.classList.add(this.inactiveClass);
  }

  init() {
    if (this.functioning) {
      this.functioningDate();
      this.curDate();
      this.isOpen();
    }
    return this;
  }
}
