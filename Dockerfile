# 1. ベースイメージを指定する
FROM node:24-slim

# 2. コンテナ内の作業ディレクトリを指定
WORKDIR /app

# 3. 既存の package.json と package-lock.json をコンテナ内にコピー
COPY package*.json ./

# 4. 設計図を元に、パッケージをインストールする
RUN npm ci

# 5. 残りのソースコード（srcフォルダなど）をすべてコピーする
COPY . .

# 6. ブラウザと通信するために、ポート番号を外に開放する
EXPOSE 8080

# 7. コンテナが起動したときに自動で実行するコマンドを指定する
CMD ["npx", "webpack", "serve", "--config", "webpack.dev.js"]
