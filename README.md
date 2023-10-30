This is a [Next.js](https://nextjs.org/) minimal repo bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:

```shell
yarn
```

To start the **Nextjs** dev server:

```shell
yarn dev
```

then open [http://localhost:3000](http://localhost:3000).

And to start **Storybook**:

```shell
yarn storybook
```

then open [http://localhost:6007](http://localhost:6007).

## Demo `babel-plugin-styled-components` bug

This repo uses styled-components for styling, with some styles applied via the CSS prop provided by [babel-plugin-styled-components](https://styled-components.com/docs/tooling). The babel plugin included automatically in Nextjs with this option:

```js
  compiler: {
    styledComponents: true,
  },
```

You can verify that this works by observing the button on the homepage of the Nextjs build, which has a red `background-color` applied via the CSS prop.

In Storybook, the babel plugin must be provided directly via a custom babel config, which is added as a `.babelrc` within the `.storybook` directory. However, observing the same Button component in Storybook, you should see that the `background-color` is **not** applied. The value of CSS is added as an HTML attribute, but no CSS class is created and applied as should occur if the babel plugin were functioning correctly.

```html
<button css="background-color: #ff0000;">Button</button>
```

Running the following command, you can verify that the custom babel config is being used by the Storybook preview:

```shell
BABEL_SHOW_CONFIG_FOR=.storybook/preview.ts yarn storybook
```
