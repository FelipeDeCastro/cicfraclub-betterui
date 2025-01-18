window.addEventListener('load', () => {
  console.log('CifraClub Better UI plugin loaded!');

  // Remove "Cifra Club - " from the page title
  const originalTitle = document.title;
  const updatedTitle = originalTitle.replace(/^Cifra Club -\s*/, '');
  document.title = updatedTitle;

  // Inject custom CSS for horizontal layout and hide elements by default
  const style = document.createElement('style');
  style.innerHTML = `
    #side-menu {
      right: 32px;
    }
    .pages {
      display: flex;
      gap: 1rem;
      margin: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    .folha {
      margin: 0;
    }
    .cifra_acordes li {
      margin: 18px 20px;
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

    const observer = new MutationObserver((mutations, obs) => {
      const tablaturaExists = document.querySelector('.tablatura');
      if (tablaturaExists) {
        tablaturasCheckbox.dispatchEvent(new Event('change'));
        obs.disconnect();
      }
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
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
        <label for="exib_configCifra">tom e afinação</label>
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

  // Elements to hide or show
  const compositorElement0 = document.querySelector('.compositor');
  const configCifraElement0 = document.querySelector('.cifra_config');
  const logoElement0 = document.querySelector('.logo');

  if (compositorElement0) compositorElement0.style.display = 'none';
  if (configCifraElement0) configCifraElement0.style.display = 'none';
  if (logoElement0) logoElement0.style.display = 'none';

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