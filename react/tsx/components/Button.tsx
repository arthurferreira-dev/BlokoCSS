import "../style/bloko.css";
import { ButtonProps, SocialMediaButtonProps } from "../types/components";

export const Button = (props: ButtonProps) => {
  const element = document.createElement("button");
  element.className = `btn ${props.className || ""}`;
  if (props.children) {
    element.appendChild(
      typeof props.children === "string"
        ? document.createTextNode(props.children)
        : props.children,
    );
  }
  Object.entries(props).forEach(([key, value]) => {
    if (key !== "children" && key !== "className" && value !== undefined) {
      element.setAttribute(key, String(value));
    }
  });
  return element;
};

export const SocialMediaButton = (props: SocialMediaButtonProps) => {
  const button = document.createElement("button");
  button.className = `btn bg-white text-black ${props.className || ""}`;

  const createSvgElement = (svgString: string) => {
    const div = document.createElement("div");
    div.innerHTML = svgString;
    return div.firstChild;
  };

  const width = props.widthSvg || "24";
  const height = props.heightSvg || "24";
  const fill = props.fillSvg || "none";
  const stroke = props.strokeSvg || "currentColor";
  const strokeWidth = props.strokeWidthSvg || "2";

  switch (props.type) {
    case "email":
      const emailSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>`;
      const emailElement = createSvgElement(emailSvg);
      if (emailElement) button.appendChild(emailElement);
      break;
    case "github":
      const githubSvg = `<svg aria-label="GitHub logo" width="${width}" height="${height}" viewBox="0 0 24 24" fill="${fill}" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>`;
      const githubElement = createSvgElement(githubSvg);
      if (githubElement) button.appendChild(githubElement);
      break;
  }

  if (props.children) {
    if (typeof props.children === "string") {
      button.appendChild(document.createTextNode(props.children));
    } else {
      button.appendChild(props.children);
    }
  }

  Object.entries(props).forEach(([key, value]) => {
    if (
      key !== "children" &&
      key !== "className" &&
      key !== "type" &&
      key !== "widthSvg" &&
      key !== "heightSvg" &&
      key !== "fillSvg" &&
      key !== "strokeSvg" &&
      key !== "strokeWidthSvg" &&
      value !== undefined
    ) {
      button.setAttribute(key, String(value));
    }
  });

  return button;
};
