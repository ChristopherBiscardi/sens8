import React from "react";
import { CacheProvider } from "@emotion/core";
import createCache from "@emotion/cache";

export const createChrisCache = opts =>
  createCache({
    key: "chrisbiscardi",
    stylisPlugins: [
      (
        context,
        content,
        selectors,
        parents,
        line,
        column,
        length,
        type
      ) => {
        if (context !== 1) return;

        console.log(
          context,
          content,
          selectors,
          parents,
          line,
          column,
          length,
          type
        );
        return content.replace("blue", "red");
      }
    ],
    ...opts
  });

export default function EmotionProvider(props) {
  return <CacheProvider value={myCache()} {...props} />;
}
