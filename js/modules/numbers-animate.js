export default function initAnimateNumbers() {
  function animateNumbers() {
    const numbers = document.querySelectorAll("[data-number]");

    numbers.forEach((n) => {
      const total = +n.innerText;
      const increment = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += increment;
        n.innerText = start;
        if (start > total) {
          clearInterval(timer);
          n.innerText = total;
        }
      }, 20 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("animate")) {
      observer.disconnect();
      animateNumbers();
    }
  }
  
  observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector(".numbers");

  observer.observe(observerTarget, { attributes: true });
}
