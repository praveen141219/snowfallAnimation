const createSnow = () => {
  const snowFlake = document.createElement("i");
  snowFlake.classList.add("far");
  snowFlake.classList.add("fa-snowflake");
  document.body.appendChild(snowFlake);
  snowFlake.style.left = `${Math.trunc(Math.random() * window.innerWidth)}px`;
  snowFlake.style.animationDuration = `${Math.trunc(Math.random() * 5 + 2)}s`;
  snowFlake.style.opacity = Math.random();
  snowFlake.style.fontSize = `${Math.random() * 20 + 10}px`;

  setTimeout(() => {
    snowFlake.remove();
  }, 5000);
};
setInterval(createSnow, 100);
