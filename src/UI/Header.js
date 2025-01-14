import { $ } from "../utils/Dom";

export default class Header {
  #template = `
      <h1 class="gnb__title text-title">점심 뭐 먹지</h1>
      <button type="button" class="gnb__button" aria-label="음식점 추가">
        <img src="./add-button.png" alt="음식점 추가" />
      </button>
    `;

  constructor() {
    const header = $(".gnb");
    header.insertAdjacentHTML("beforeend", this.#template);
    const openModalButton = $(".gnb__button");
    openModalButton.addEventListener("click", this.openModal);
  }

  openModal() {
    const modal = $(".modal--open");
    const category = $("#category");
    modal.style.display = "block";
    category.focus();
  }
}
