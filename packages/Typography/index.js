import React, { Component } from "react";
import styled, { injectGlobal, css } from "react-emotion";
import { fontSize } from "styled-system";

injectGlobal`
@font-face {
  font-family: 'Inter UI';
  font-style:  normal;
  font-weight: 400;
  src: url("font-files/Inter-UI-Regular.woff2?v=2.5") format("woff2"),
       url("font-files/Inter-UI-Regular.woff?v=2.5") format("woff");
}
@font-face {
  font-family: 'Inter UI';
  font-style:  italic;
  font-weight: 400;
  src: url("font-files/Inter-UI-Italic.woff2?v=2.5") format("woff2"),
       url("font-files/Inter-UI-Italic.woff?v=2.5") format("woff");
}

@font-face {
  font-family: 'Inter UI';
  font-style:  normal;
  font-weight: 500;
  src: url("font-files/Inter-UI-Medium.woff2?v=2.5") format("woff2"),
       url("font-files/Inter-UI-Medium.woff?v=2.5") format("woff");
}
@font-face {
  font-family: 'Inter UI';
  font-style:  italic;
  font-weight: 500;
  src: url("font-files/Inter-UI-MediumItalic.woff2?v=2.5") format("woff2"),
       url("font-files/Inter-UI-MediumItalic.woff?v=2.5") format("woff");
}

@font-face {
  font-family: 'Inter UI';
  font-style:  normal;
  font-weight: 700;
  src: url("font-files/Inter-UI-Bold.woff2?v=2.5") format("woff2"),
       url("font-files/Inter-UI-Bold.woff?v=2.5") format("woff");
}
@font-face {
  font-family: 'Inter UI';
  font-style:  italic;
  font-weight: 700;
  src: url("font-files/Inter-UI-BoldItalic.woff2?v=2.5") format("woff2"),
       url("font-files/Inter-UI-BoldItalic.woff?v=2.5") format("woff");
}

@font-face {
  font-family: 'Inter UI';
  font-style:  normal;
  font-weight: 900;
  src: url("font-files/Inter-UI-Black.woff2?v=2.5") format("woff2"),
       url("font-files/Inter-UI-Black.woff?v=2.5") format("woff");
}
@font-face {
  font-family: 'Inter UI';
  font-style:  italic;
  font-weight: 900;
  src: url("font-files/Inter-UI-BlackItalic.woff2?v=2.5") format("woff2"),
       url("font-files/Inter-UI-BlackItalic.woff?v=2.5") format("woff");
}
`;

const Span = styled.span`
  fontfamily: ${({ theme, fontFamily }) => theme[fontFamily] || "Comic Sans"};
`;
export class Text extends Component {
  render() {
    const {
      children,
      fontFamily,
      inline,
      bold,
      underline,
      italic
    } = this.props;
    const C = inline ? BaseText : BaseTextParagraph;
    return <C>{children}</C>;
  }
}

const isStates = {
  danger: css`
    color: red;
  `,
  default: css`
    color: black;
  `
};
const isProp = ({ is }) => isStates[is] || isStates["default"];
export const isKeys = Object.keys(isStates);

const BaseText = styled.span`
  font-family: "Inter UI", sans-serif;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${isProp};
`;

const BaseTextParagraph = BaseText.withComponent("p");

export { Heading } from "./Heading";
