# React + TypeScript + Vite

```js
npx create-react-app tulip --template typescript
```
* 动画
```js
https://css-loaders.com/spinner/
```

* 项目初始化之后会出现一个错误安装以下的依赖解决
```js
npm install --save-dev @babel/plugin-proposal-private-property-in-object
```
* 项目初始化后有写依赖不需要

```js

npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest

npm uninstall web-vitals

```

* 更新 node依赖
```shell
npm install @types/node@20.11.1
```

## 安装项目依赖

```shell
npm install --save antd react-router-dom react-redux @reduxjs/toolkit recharts
```

```shell
npm install --save antd
npm i react-router-dom
npm i react-redux
npm i @reduxjs/toolkit
npm install --save-dev sass sass-loader
// 数据图表
npm i recharts  
// websocket
npm i @stomp/stompjs
// 动态路由环境需要
npm install --save-dev @types/webpack-env
```

## 相关网址

* eslint
```
https://zh-hans.eslint.org/docs/latest/rules/
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
