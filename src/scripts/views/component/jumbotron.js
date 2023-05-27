class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
      <div class="container">
        <h1>Welcome to Findaurant</h1>
        <p>Find the best restaurant for you</p>
        <a href="#title" class="btn btn-primary">Explore Now</a>
      </div>
    </div>`;
  }
}

customElements.define('jumbotron-section', Jumbotron);
