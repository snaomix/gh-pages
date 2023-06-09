# gh-pages

[![Deploy GitHub Pages](https://github.com/snaomix/gh-pages/actions/workflows/build.yml/badge.svg)](https://github.com/snaomix/gh-pages/actions/workflows/build.yml)

webpackを使って[GitHub Pages]へウェブサイトをデプロイするちょっとしたデモ。
webpackの[getting started]チュートリアルにしたがってスタートします。
デザインは[Bootstrap] v5、画像は[unsplash]のものを使用します。

## note:
* webpack v5以降を使用しています
* Node.js v18.0.0以降 ＋dart-sassを使用
* [fibers](https://github.com/laverdet/node-fibers) はNode.js v16.0.0以降と互換性がないため使用していません :no_good:
* [Stylelint]、[Prettier]を使用してスタイルのチェック、JS整形を追加
* [GitHub Actions]を使用してデプロイする方法に変更

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

ウェブサイトをビルド:
```bash
npm run build
```

ウェブサイトをdevモードで起動:
```bash
npm run start
```

Sass(SCSS)をチェックする([Stylelint])
```bash
npm run lint:css
```

Sass(SCSS)をチェックする([Prettier])
```bash
npm run check:css
```

Sass(SCSS)を整形する([Prettier]) :warning: ファイルが上書きされます
```bash
npm run format:css
```

JS, JSONを整形する([Prettier]) :warning: ファイルが上書きされます

```bash
npm run format
```

[GitHub Pages]: https://docs.github.com/ja/pages
[GitHub Actions]: https://docs.github.com/ja/actions
[getting started]: https://webpack.js.org/guides/getting-started/
[Bootstrap]: https://getbootstrap.com/
[unsplash]: https://unsplash.com/
[Stylelint]: https://stylelint.io/
[Prettier]: https://prettier.io/

## more info

* [GitHub Pagesのドキュメンテーション](https://docs.github.com/ja/pages) … docs.github.com
* [GitHub Pages examples](https://github.com/collections/github-pages-examples) … github.com
* [GitHub Actionsのドキュメント](https://docs.github.com/ja/actions) … docs.github.com
