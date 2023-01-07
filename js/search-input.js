(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-search-input-open]"),
      closeModalBtn: document.querySelector("[data-search-input-close]"),
      backdrop: document.querySelector(".backdrop"),
      modal: document.querySelector("[search-input]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.modal.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target === refs.backdrop) {
        return toggleModal();
      }});
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();