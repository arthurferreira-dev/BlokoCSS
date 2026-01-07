const titleTest = document.getElementById("title-test");
const pTest = document.getElementById("p-test");

const BlokoUtils = () => {
  /**
   *
   * @param {string} elementID give the id or class or tag of the element html (method: querySelector).
   * @param {string} classes add the class you prefer.
   * @returns add a class to one element.
   * @author arthurferreira-dev (BlokoCSS)
   *
   */
  const addClass = (elementID, classes) => {
    if (typeof elementID === "string" && typeof classes === "string") {
      const element = document.querySelector(elementID);
      element.classList.add(...classes.trim().split(/\s+/));
    } else {
      console.error("Please but the argument in string!");
      throw new Error("Please but the argument in string!");
    }
  };
  /**
   *
   * @param {string} elementID give the id or class or tag of the element html (method: querySelector).
   * @param {string} classes remove the class you prefer.
   * @returns remove a class to one element.
   * @author arthurferreira-dev (BlokoCSS)
   *
   */
  const removeClass = (elementID, classes) => {
    if (typeof elementID === "string" && typeof classes === "string") {
      const element = document.querySelector(elementID);
      element.classList.remove(...classes.trim().split(/\s+/));
    } else {
      console.error("Please but the argument in string!");
      throw new Error("Please but the argument in string!");
    }
  };

  return { addClass, removeClass };
};

export const utils = BlokoUtils();