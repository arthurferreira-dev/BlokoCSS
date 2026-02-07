/**
 * Props do componente Button
 */
export interface ButtonProps {
  className?: string;
  children?: any;
  [key: string]: any;
}

/**
 * Props do componente SocialMediaButton
 */
export interface SocialMediaButtonProps {
  type: "email" | "github";
  className?: string;
  widthSvg?: string;
  heightSvg?: string;
  fillSvg?: string;
  strokeSvg?: string;
  strokeWidthSvg?: string;
  children?: any;
  [key: string]: any;
}

/**
 * Props do componente Modal
 */
export interface ModalProps {
  className?: string;
  children?: any;
  [key: string]: any;
}

/**
 * Props do componente ModalContent
 */
export interface ModalContentProps {
  className?: string;
  children?: any;
  [key: string]: any;
}

/**
 * Props do componente ModalActions
 */
export interface ModalActionsProps {
  className?: string;
  children?: any;
  [key: string]: any;
}
