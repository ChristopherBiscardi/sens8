/* @jsx jsx */
import { jsx, CacheProvider } from "@emotion/core";
import TestRenderer from "react-test-renderer";

import { createChrisCache } from ".";
import { matchers } from "jest-emotion";
expect.extend(matchers);

test("renders a string", () => {
  const newCache = createChrisCache();
  const tree = TestRenderer.create(
    <CacheProvider value={newCache}>
      <div css={{ backgroundColor: "blue" }}>something</div>
    </CacheProvider>
  ).toJSON();

  expect(tree).toHaveStyleRule("background-color", "blue");
});
