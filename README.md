# Sens8

A personal system.

[Read the Docs](https://sens8.netlify.com/)

# Installing

Install the meta-package.

```
yarn add sens8
```

# Usage

Sens8 is built on [emotion][emotion] so you will not have to handle any
additional sass/css/postcss files.

## Theming

```js
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, themeDefault, Avatar } from @sens8/react'

render(
	<ThemeProvider theme={themeDefault}>
		<Avatar src={logoUrl} />
	</ThemeProvider>
)
```

# Credits

- [emotion][emotion-github]
- [styled-system][styled-system]

[emotion]: https://emotion.sh/
[styled-system]: https://github.com/jxnblk/styled-system
[emotion-github]: https://github.com/emotion-js/emotion
