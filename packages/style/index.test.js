/** @jsx jsx */
import { jsx, CacheProvider } from "@emotion/core";
import { renderToString } from "react-dom/server";
// import { renderStylesToString } from "emotion-server";
import EmotionProvider, { createChrisCache } from ".";

test("renders a string", () => {
  const newCache = createChrisCache();
  //   const { extractCritical } = createEmotionServer(cache);

  //   const html = renderStylesToString(
  console.log(
    renderToString(
      //   <CacheProvider value={newCache}>
      <div css={{ color: "red", backgroundColor: "blue" }}>
        something
      </div>
      //   </CacheProvider>
    )
  );
  //   );

  //   expect(
  //     renderToString(
  //       <CacheProvider value={newCache}>
  //         <div css={{ color: "red", backgroundColor: "blue" }}>something</div>
  //       </CacheProvider>
  //     )
  //   ).toEqual('<div class="chrisbiscardi-f96fst">something</div>');
  console.log(JSON.stringify(newCache));
  //   console.log(getRegisteredStyles());
});
