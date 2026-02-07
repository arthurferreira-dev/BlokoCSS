import "../style/bloko.css"; // BlokoCSS v0.3
import {
  ModalProps,
  ModalContentProps,
  ModalActionsProps,
} from "../types/components";

export const openModal = (elementID: string): void => {
  const element = document.getElementById(elementID) as HTMLDialogElement;
  if (element) {
    element.showModal();
  }
};

export const Modal = (props: ModalProps) => {
  const dialog = document.createElement("dialog");
  dialog.className = `modal ${props.className || ""}`;
  if (props.children) {
    if (typeof props.children === "string") {
      dialog.appendChild(document.createTextNode(props.children));
    } else {
      dialog.appendChild(props.children);
    }
  }
  Object.entries(props).forEach(([key, value]) => {
    if (key !== "children" && key !== "className" && value !== undefined) {
      dialog.setAttribute(key, String(value));
    }
  });
  return dialog;
};

export const ModalContent = (props: ModalContentProps) => {
  const div = document.createElement("div");
  div.className = `modal-content ${props.className || ""}`;
  if (props.children) {
    if (typeof props.children === "string") {
      div.appendChild(document.createTextNode(props.children));
    } else {
      div.appendChild(props.children);
    }
  }
  Object.entries(props).forEach(([key, value]) => {
    if (key !== "children" && key !== "className" && value !== undefined) {
      div.setAttribute(key, String(value));
    }
  });
  return div;
};

export const ModalActions = (props: ModalActionsProps) => {
  const div = document.createElement("div");
  div.className = `modal-actions ${props.className || ""}`;
  if (props.children) {
    if (typeof props.children === "string") {
      div.appendChild(document.createTextNode(props.children));
    } else {
      div.appendChild(props.children);
    }
  }
  Object.entries(props).forEach(([key, value]) => {
    if (key !== "children" && key !== "className" && value !== undefined) {
      div.setAttribute(key, String(value));
    }
  });
  return div;
};
