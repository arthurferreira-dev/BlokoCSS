import "../style/bloko.css"; // BlokoCSS v0.3

/**
 * 
 * @param {string} elementID
 * @returns Open the modal with your elementID (You can use useRef)
 */
export const openModal = (elementID) => {
  document.getElementById(elementID).showModal();
};

export const Modal = (props) => {
  return (
    <dialog className={`modal ${props.className || ""}`} {...props}>
      {props.children}
    </dialog>
  );
};

export const ModalContent = (props) => {
  return (
    <div className={`modal-content ${props.className || ""}`} {...props}>
      {props.children}
    </div>
  );
};

export const ModalActions = (props) => {
  return (
    <div className={`modal-actions ${props.className || ""}`} {...props}>
      {props.children}
    </div>
  );
};
