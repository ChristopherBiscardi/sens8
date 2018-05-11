import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Text, Heading } from ".";

import styled from "react-emotion";
const Divider = styled.hr`
  color: black;
`;

storiesOf("Typography", module)
  .add("headings", () => (
    <Fragment>
      <Heading level="1">Levels</Heading>
      <Divider />
      <Heading level="1">Level 1</Heading>
      <Heading level="2">Level 2</Heading>
      <Heading level="3">Level 3</Heading>
      <Heading level="4">Level 4</Heading>
      <Heading level="5">Level 5</Heading>
      <Heading level="6">Level 6</Heading>
    </Fragment>
  ))
  .add("Text", () => (
    <Fragment>
      <Text>some paragraph content</Text>
    </Fragment>
  ));
