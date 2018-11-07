import React from "react";
import theme from "@sens8/tokens";
import { Heading, Text } from "sens8";

export default () => (
  <div
    css={`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      grid-gap: 2rem;
    `}
  >
    {Object.entries(theme.colors.raw).map(([k, v]) => (
      <MultiColorBox title={k} colors={v} />
    ))}
  </div>
);

const MultiColorBox = ({ title, colors }) => (
  <div>
    <Heading>{title}</Heading>
    <div>
      {Object.entries(colors).map(([name, color]) => (
        <div
          css={`
            height: 3rem;
            background-color: ${color};
            display: flex;
            align-items: center;
            justify-content: space-around;
          `}
        >
          <span>{name}</span>
          <span>{color}</span>
        </div>
      ))}
    </div>
  </div>
);
