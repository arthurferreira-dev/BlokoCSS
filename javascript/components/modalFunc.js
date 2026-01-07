function ModalBloko() {
  /**
   *
   * @param {string} elementID give the id of the element html (method: getElementId).
   * @returns execute one function called showModal()
   * @author arthurferreira-dev (BlokoCSS)
   *
   */

  const showModalById = (elementID) => {
    if (typeof elementID === "string") {
      const modal = document.getElementById(elementID);
      modal.showModal();
    } else {
      console.error("Please but one string!");
      throw new Error("Please but one string!");
    }
  };

  /**
   *
   * @param {string} elementID give the id of the element html (method: getElementId).
   * @returns execute one function called close()
   * @author arthurferreira-dev (BlokoCSS)
   *
   */

  const closeModalById = (elementID) => {
    if (typeof elementID === "string") {
      const modal = document.getElementById(elementID);
      modal.close();
    } else {
      console.error("Please but one string!");
      throw new Error("Please but one string!");
    }
  };

  return { showModalById, closeModalById };
}

export const modalBloko = ModalBloko();
