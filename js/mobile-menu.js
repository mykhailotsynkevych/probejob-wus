(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);

      mobileMenuRef.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target)
        if (e.target !== mobileMenuRef) {
          return mobileMenuRef.classList.toggle("is-open");
        }});
  
      mobileMenuRef.classList.toggle("is-open");
    });
  })();