class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
    <div class="menu">
      <button id="hamburgerButton">☰</button>
    </div>
    <div class="brand">
      <img data-src="./logo/restaurant.png" alt="Logo" class="logo lazyload">
      <h1 class="brand-title">Findaurant</h1>
    </div>
    <nav id="navigationDrawer" class="navigation">
      <ul>
        <li><a class="page" href="#/">Home</a></li>
        <li><a class="page" href="#/favorites">Favorites</a></li>
        <li><a class="page" href="https://www.linkedin.com/in/dhaifullah-hilmy/" target="_blank" rel="noreferrer">About Us</a></li>
      </ul>
    </nav>
  </header>`;
  }
}

customElements.define('header-section', Header);
