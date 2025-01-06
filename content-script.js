window.addEventListener('load', () => {
  console.log('CifraClub Better UI plugin loaded!');

  // Inject custom CSS for horizontal layout and hide elements by default
  const style = document.createElement('style');
  style.innerHTML = `
    .pages {
      display: flex;
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

  // Set default checkbox states
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

  // Inject additional checkboxes
  const displayOptions = document.querySelector('#c-exibir ul');
  if (displayOptions) {
    // Compositor Checkbox
    const compositorLi = document.createElement('li');
    compositorLi.innerHTML = `
      <i class="exib_comp"></i>
      <span class="inp_opt small">
        <input type="checkbox" name="compositor" id="exib_compositor" />
        <label for="exib_compositor">compositor</label>
      </span>
    `;
    displayOptions.appendChild(compositorLi);

    // Configurações da cifra Checkbox
    const configCifraLi = document.createElement('li');
    configCifraLi.innerHTML = `
      <i class="exib_conf"></i>
      <span class="inp_opt small">
        <input type="checkbox" name="configCifra" id="exib_configCifra" />
        <label for="exib_configCifra">configurações da cifra</label>
      </span>
    `;
    displayOptions.appendChild(configCifraLi);

    // Logo Checkbox
    const logoLi = document.createElement('li');
    logoLi.innerHTML = `
      <i class="exib_logo"></i>
      <span class="inp_opt small">
        <input type="checkbox" name="logo" id="exib_logo" />
        <label for="exib_logo">logo</label>
      </span>
    `;
    displayOptions.appendChild(logoLi);
  }

  // Set additional checkbox states
  const compositorCheckbox = document.querySelector('#exib_compositor');
  const configCifraCheckbox = document.querySelector('#exib_configCifra');
  const logoCheckbox = document.querySelector('#exib_logo');

  const compositorElement0 = document.querySelector('.compositor');
  compositorElement0.style.display = 'none';

  const configCifraElement0 = document.querySelector('.cifra_config');
  configCifraElement0.style.display = 'none';

  const logoElement0 = document.querySelector('.logo');
  logoElement0.style.display = 'none';

  if (compositorCheckbox) {
    compositorCheckbox.checked = false;
    compositorCheckbox.addEventListener('change', () => {
      const compositorElement = document.querySelector('.compositor');
      if (compositorElement) {
        compositorElement.style.display = compositorCheckbox.checked ? 'block' : 'none';
      }
    });
  }

  if (configCifraCheckbox) {
    configCifraCheckbox.checked = false;
    configCifraCheckbox.addEventListener('change', () => {
      const configCifraElement = document.querySelector('.cifra_config');
      if (configCifraElement) {
        configCifraElement.style.display = configCifraCheckbox.checked ? 'block' : 'none';
      }
    });
  }

  if (logoCheckbox) {
    logoCheckbox.checked = false;
    logoCheckbox.addEventListener('change', () => {
      const logoElement = document.querySelector('.logo');
      if (logoElement) {
        logoElement.style.display = logoCheckbox.checked ? 'block' : 'none';
      }
    });
  }
});