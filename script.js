
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('WILL YOU BE MY GIRLFRIEND?').split('')
    const titleElement = document.getElementById('title').onclick = funktion() {
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 150); 
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
