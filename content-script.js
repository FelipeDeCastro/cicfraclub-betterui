window.addEventListener('load', () => {
  console.log('CifraClub Better UI plugin loaded!');
  const style = document.createElement('style');
  style.innerHTML = `
    .pages {
      display: flex !important;
      gap: 1rem;
      margin: 0 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    .folha {
      margin: 0;
    }
  `;
  document.head.appendChild(style);

  const duasColunasCheckbox = document.querySelector('#exib1');
  const tablaturasCheckbox = document.querySelector('#exib4');

  if (duasColunasCheckbox) {
    duasColunasCheckbox.checked = true;
    duasColunasCheckbox.dispatchEvent(new Event('change'));
  }
  if (tablaturasCheckbox) {
    tablaturasCheckbox.checked = false;
    tablaturasCheckbox.dispatchEvent(new Event('change'));
  }
});