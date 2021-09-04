# format_json

format_json は、JSON にインデントを付けます。


## インストール

format_json を使うには Node.js のインストールが必要です。

Windows の場合

    format_json をダウンロードして展開します:
        - https://github.com/Takakiriy/format_json >> Code >> Download.ZIP

    Node.js をインストールします:
        - https://nodejs.org/ja/download/ >> Windows Installer (.msi) >> 64-bit
        - ダウンロードしたファイル（例：node-v14.16.0-x64.exe）を開きます
        - インストール オプションはデフォルトを使用

    format_json が使うパッケージをインストールします:
        - Windows スタート >> PowerShell
        - cd ___/format_json
        - npm install --only=production

    format_json.bat ファイルをダブルクリックすると format_json が起動します:

mac の場合

    format_json をダウンロードして展開します:
        - https://github.com/Takakiriy/format_json >> Code >> Download.ZIP

    Node.js をインストールします:
        - https://nodejs.org/ja/download/ >> macOS Installer (.pkg) >> 64-bit
        - ダウンロードしたファイル（例：node-v14.16.0.pkg）を開きます
        - インストール オプションはデフォルトを使用

    format_json が使う xlsx, indent-string パッケージをインストールします:
        - Launchpad >> Terminal
        - cd ___/format_json
        - npm install --only=production

    format_json.command ファイルに実行属性を追加します:
        - chmod +x format_json.command

    format_json.command ファイルをダブルクリックすると format_json が起動します:


## 使い方

Windows の場合、format_json.bat をダブルクリックして、下記のように入力します。
mac の場合、format_json.command をダブルクリックして、下記のように入力します。

    input .json file path> example.json

ファイル パス は、キーボードから入力しなくても、
ファイルをドラッグ＆ドロップして入力できます。

入力したファイルがあるフォルダーに example.json.updating ファイルができます。

もし、Enter キーだけ入力したときは、クリップボードの JSON にインデントを付けます。
