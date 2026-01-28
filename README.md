# gh-pages

[![Deploy GitHub Pages](../../actions/workflows/build.yml/badge.svg)](../../actions/workflows/build.yml)

webpackを使って[GitHub Pages]へウェブサイトをデプロイするちょっとしたデモ。
webpackの[getting started]チュートリアルにしたがってスタートします。
デザインは[Bootstrap] v5、画像は[unsplash]のものを使用します。

## note:
* webpack v5以降を使用しています
* Node.js v24以降(see [Node.js release schedule])
* [GitHub Actions]を使用してデプロイ
* [Stylelint]、[Prettier]、[ESLint]を使用
* Template repository化(for GitHub users)

## how to start

はじめにソースコードをclone:
```bash
git clone git@github.com:snaomix/gh-pages.git
```

nodeパッケージをインストール
```bash
cd gh-pages
npm install
```

## scripts

### 開発

開発サーバーを起動（localhost:8080）
```bash
npm run start
```

### ビルド

本番用にビルド（dist ディレクトリに出力）
```bash
npm run build
```

### リント・フォーマット

Sass(SCSS)をチェックする([Stylelint])
```bash
npm run lint:css
```

Sass(SCSS)のフォーマットチェック([Prettier])
```bash
npm run check:css
```

Sass(SCSS)を自動修正([Stylelint]) :warning: ファイルが上書きされます
```bash
npm run fix:css
```

HTMLをチェックする([ESLint])
```bash
npm run lint:html
```

JSをチェックする([ESLint])
```bash
npm run lint:js
```

JS, JSONのフォーマットチェック([Prettier])
```bash
npm run check:js
```

JSを自動修正([ESLint]) :warning: ファイルが上書きされます
```bash
npm run fix:js
```

Sass(SCSS)を整形する([Prettier]) :warning: ファイルが上書きされます
```bash
npm run format:css
```

JS, JSONを整形する([Prettier]) :warning: ファイルが上書きされます

```bash
npm run format
```

## setting GitHub Actions & run workflow
1. GitHub Freeの場合、パブリックリポジトリに設定しておく
1. Settings > Pages > Build and deploymentのSourceを「GitHub Actions」を選択
1. Actions > Deploy GitHub Pages > Run workflow > 「Run workflow」を選択

[GitHub Pages]: https://docs.github.com/ja/pages
[GitHub Actions]: https://docs.github.com/ja/actions
[getting started]: https://webpack.js.org/guides/getting-started/
[Bootstrap]: https://getbootstrap.com/
[unsplash]: https://unsplash.com/
[Stylelint]: https://stylelint.io/
[Prettier]: https://prettier.io/
[ESLint]: https://eslint.org/
[Node.js release schedule]: https://github.com/nodejs/release#release-schedule

## more info

* [GitHub Pagesのドキュメンテーション](https://docs.github.com/ja/pages) … docs.github.com
* [GitHub Pages examples](https://github.com/collections/github-pages-examples) … github.com
* [GitHub Actionsのドキュメント](https://docs.github.com/ja/actions) … docs.github.com
