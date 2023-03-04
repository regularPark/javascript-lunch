import { $ } from "../utils/Dom";

export default class Header {
  #template = `
    <header class="gnb">
      <h1 class="gnb__title text-title">점심 뭐 먹지</h1>
      <button type="button" class="gnb__button" aria-label="음식점 추가">
        <img src="./add-button.png" alt="음식점 추가" />
      </button>
    </header>
    `;

  constructor() {
    document.body.insertAdjacentHTML("afterbegin", this.#template);
    $(".gnb__button").addEventListener("click", this.openModal);
  }

  openModal() {
    $(".modal--open").style.display = "block";
    $("#category").focus();
  }
}
