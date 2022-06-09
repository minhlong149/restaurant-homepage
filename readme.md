# Webpack Concepts

## Entry
An entry point indicates which module webpack should use to begin building out its internal dependency graph. Webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

By default, its value is `./src/index.js`.

**webpack.config.js**
```
module.exports = {
  entry: './path/to/my/entry/file.js',
};
```

## Output
The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to `./dist/main.js` for the main output file and to the `./dist` folder for any other generated file.

**webpack.config.js**
```
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};
```

## Loaders
Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

## Plugins
While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

## Mode
By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment.

# Getting Started w/ Webpack

## Basic Setup
Initialize `npm`, install `webpack` locally, and install the `webpack-cli` (the tool used to run webpack on the command line) to the `node_modules` directory

```
npm init -y
npm install webpack webpack-cli --save-dev
```
## Creating a Bundle
Run `npx webpack`, which will take our script at `src/index.js` as the entry point, and will generate `dist/main.js` as the output.

```
npx webpack
```

## Using a Configuration
Given it's not particularly fun to run a local copy of webpack from the CLI, we can set up a little shortcut. Let's adjust our `package.json` by adding an npm script:

**package.json**
```
{
  "scripts": {
    "build": "webpack"
  }
}
 ```
 
Now the `npm run build` command can be used in place of the npx command we used earlier.

```
npm run build
```

# Asset Management
## Loading CSS

In order to import a CSS file from within a JavaScript module, you need to install and add the `style-loader` and `css-loader` to your module configuration. This enables you to import `./style.css` into the file that depends on that styling. When that module is run, a `<style>` tag with the stringified CSS will be inserted into the `<head>` of your html file.

```
npm install --save-dev style-loader css-loader
```
 ### sass-loader
 
 ```
 npm install sass-loader sass --save-dev
```

> Since Sass implementations don't provide url rewriting, all linked assets must be relative to the output. [Thankfully there are a two solutions to this problem.](https://webpack.js.org/loaders/sass-loader/#problems-with-url)

## Loading Images
When you import MyImage from `./my-image.png`, that image will be processed and added to your output directory and the MyImage variable will contain the final url of that image after processing. When using the `css-loader`, as shown above, a similar process will occur for `url('./my-image.png')` within your CSS. The loader will recognize this is a local file, and replace the `./my-image.png` path with the final path to the image in your output directory.

## Loading Fonts
With the loader configured and fonts in place, you can incorporate them via an @font-face declaration. The local `url(...)` directive will be picked up by webpack, as it was with the image.

**webpack.config.js**
```
 module.exports = {
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     ],
   },
 };
```

# Output Management

## Setting up HtmlWebpackPlugin

Install the plugin and adjust the `webpack.config.js` file:

```
npm install --save-dev html-webpack-plugin
```

**webpack.config.js**
```
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
 };
 ```

`HtmlWebpackPlugin` by default will generate its own index.html file, even though we already have one in the dist/ folder. This means that it will replace our index.html file with a newly generated one.

## Cleaning up the /dist folder

Webpack doesn't keep track of which files are actually in use by your project. In general it's good practice to clean the /dist folder before each build, so that only used files will be generated. 

```
module.exports = {
  output: {
    clean: true,
  },
};
```

# Development

## Using source maps
If you bundle three source files (a.js, b.js, and c.js) into one bundle (bundle.js) and one of the source files contains an error, the stack trace will point to bundle.js. In order to make it easier to track down errors and warnings, JavaScript offers source maps, which map your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.

**webpack.config.js**
```
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      title: 'Development',
    }),
  ],
 };
```

## Using Watch Mode
You can instruct webpack to "watch" all files within your dependency graph for changes. If one of these files is updated, the code will be recompiled so you don't have to run the full build manually.

**package.json**
```
{
  "scripts": {
    "watch": "webpack --watch",
  }
}
```

```
npm run watch
```

# Setup TypeScript

Install the TypeScript compiler and loader.
```
npm install --save-dev typescript ts-loader
```

Then, let's configure webpack to handle TypeScript:

**webpack.config.js**
```
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

This will direct webpack to enter through `./index.ts`, load all `.ts` and `.tsx` files through the `ts-loader`, and output a `bundle.js` file in our current directory.