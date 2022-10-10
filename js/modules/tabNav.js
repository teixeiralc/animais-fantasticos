export default class TabNavMenu {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'active';
  }

  activeTab(i) {
    // i = index
    this.tabContent.forEach((content) => {
      content.classList.remove(
        this.activeClass,
        this.tabContent[i].dataset.anime
      );
    });

    const animeClass = this.tabContent[i].dataset.anime;
    this.tabContent[i].classList.add(this.activeClass, animeClass);
  }

  addEvent() {
    this.tabMenu.forEach((item, i) => {
      item.addEventListener('click', () => this.activeTab(i));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addEvent();
    }
  }
}
