export default function initAnimateNumbers() {
  function animateNumbers() {
    const numbers = document.querySelectorAll("[data-number]");

    numbers.forEach((n) => {
      const total = +n.innerText;
      const increment = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start = start + increment;
        n.innerText = start;
        if (start > total) {
          clearInterval(timer);
          n.innerText = total;
        }
      }, 20 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("animate")) {
      observer.disconnect();
      animateNumbers();
    }
  }

  const observerTarget = document.querySelector(".numbers");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
