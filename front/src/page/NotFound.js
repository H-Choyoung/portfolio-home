export default class {
  constructor() {
    document.title = "404";
  }
  async getHtml() {
    return `<h1>404 Not found</h1>`;
  }
}