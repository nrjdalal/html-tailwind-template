# html-tailwind-template

```sh
git init

cat >./.gitignore <<.gitignore
.DS_Store

/node_modules
.gitignore

cat >./index.html <<index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>tailwind project</title>
    <link rel="stylesheet" href="./dist/tailwind.css" />
    <!--
    Dev Resources -
    1) svg icons - https://heroicons.com/
    2) tailwind blocks - https://tailblocks.cc/
    -->
  </head>
  <body class="h-screen">
    <!-- Remove this div -->
    <div class="container mx-auto px-1.5 py-7 prose-sm bg-red-300 text-center">
      <h3>if the background is red, tailwindcss is working fine!</h3>
      <p>please remove this div before continuing.</p>
    </div>
    <!-- Remove this div -->
  </body>
</html>
index.html

cat >./tailwind.config.js <<tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./**/*.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio')],
}
tailwind.config.js

npm i -D @tailwindcss/typography @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/aspect-ratio

mkdir -p ./src/css && mkdir -p ./public/css

cat >./src/css/styles.css <<styles.css
@tailwind base;
@tailwind components;
@tailwind utilities;
styles.css

npx tailwindcss -i ./src/css/styles.css -o ./public/css/tailwind.css -wm
```
