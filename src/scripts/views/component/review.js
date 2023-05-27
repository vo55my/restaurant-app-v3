class Review extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="add-review">
      <h2 class="title-add">Add Review</h2>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Masukkan Nama Anda" autocomplete="off" />
      <label for="review">Review</label>
      <textarea id="text" name="review" rows="4" placeholder="Masukkan Review"></textarea>
      <button class="submit btn btn-primary" id="submit" aria-label="Submit">Submit</button>
    </div>
  `;
  }
}

customElements.define('review-section', Review);
