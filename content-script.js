window.addEventListener('load', () => {
  console.log('CifraClub Better UI plugin loaded!');
  const style = document.createElement('style');
  style.innerHTML = `
    .pages {
      display: flex !important;
      gap: 1rem;
      margin: 0 1rem;
      flex-wrap: wrap;
    }
    .folha {
        margin: 0;
    }
  `;
  document.head.appendChild(style);
});