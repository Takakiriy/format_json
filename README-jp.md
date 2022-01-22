# format json
<!-- Character Encoding: "WHITE SQUARE" U+25A1 is □. -->
<!--
設定:
    __app__: format json
    __app-command__: format-json
-->

format json は、JSON にインデントを付けます。  <!-- #template: __app__  #-->

<!-- TOC depthFrom:1 -->


<!-- /TOC -->


## 使い方

Windows の場合、format json.bat をダブルクリックして、下記のように入力します。  <!-- #template: __app__.bat  #-->
mac の場合、format json.command をダブルクリックして、下記のように入力します。  <!-- #template: __app__.command  #-->

    Enter only: use the text in the clipboard
    input .json file path> example.json

各種シェルの場合、format_json コマンドとそのパラメーターを入力します。

ファイル パス は、キーボードから入力しなくても、
ファイルをドラッグ＆ドロップして入力できます。

入力したファイルがあるフォルダーに example.json.updating ファイルができます。

もし、Enter キーだけ入力したときは、クリップボードの JSON にインデントを付けます。


## インストール

format_json を使うには Node.js のインストールが必要です。

### Windows の場合

    Node.js をインストールします:
        - https://nodejs.org/ja/download/ >> Windows Installer (.msi) >> 64-bit
        - ダウンロードしたファイル（例：node-v14.16.0-x64.exe）を開きます
        - インストール オプションはデフォルトを使用

    社内など、プロキシがある LAN に Windows がある場合:
        Windows スタート >> PowerShell（と入力）:
            npm config -g set proxy "http://___.___.___.___:____"
            npm config -g set https-proxy "http://___.___.___.___:____"

    format_json をダウンロードして展開し、format_json が使う Node.js パッケージをインストールします:
        Windows スタート >> PowerShell（と入力）:
            cd  ${env:USERPROFILE}\Downloads
            Invoke-WebRequest  https://github.com/Takakiriy/format_json/archive/refs/heads/master.zip -OutFile format_json.zip
            rm -r -fo  "format_json-master"  #// 更新するとき
            Expand-Archive -Path format_json.zip -DestinationPath "."
            cd  "format_json-master"

            npm install --only=production

    PowerShell を使う場合:
        PowerShell の PATH が通ったフォルダーに format_json を起動する PS1 スクリプト ファイル を作ります:
            Windows スタート >> PowerShell（と入力） :
                cd  ${env:USERPROFILE}\Downloads\format_json-master
                ${current_folder} = Convert-Path "."
                ${format_json_folder} = "${env:USERPROFILE}\Documents\format_json"
                ${script} = "${env:USERPROFILE}\AppData\Local\Microsoft\WindowsApps\format-json.ps1"

                echo  "`${env:NODE_PATH} = `"${current_folder}\node_modules`"" > ${script}
                echo  "node  ${current_folder}\build\format_json.js `$PsBoundParameters.Values `$args" >> ${script}

                Set-ExecutionPolicy  RemoteSigned  -Scope CurrentUser  #// スクリプトを実行できるようにします

    Git bash を使う場合:
        Git for Windows をインストールします:
            - https://git-scm.com/ >> Downloads >> Windows
            - ダウンロードしたファイル（例：Git-2.31.1-64-bit.exe）を開く
            - Next を8回押す
            - Configuring the line ending conversions: Checkout as-is, commit as-is
            - 他のインストール オプションはデフォルトを使用
        PATH が通ったフォルダーに format_json を起動する bash スクリプト ファイル を作ります:
            フォルダーを右クリック >> Git bash :
                cd  ${HOME}/Downloads/format_json-master
                current_folder="$(pwd)"
                format_json_folder="${HOME}/Documents/format_json"
                script="${HOME}/bin/format-json"
                mkdir -p "${HOME}/bin"

                echo  "export NODE_PATH=\"${HOME}/AppData/Roaming/npm/node_modules\"" > ${script}
                echo  "node  ${current_folder}/build/format_json.js \"\$@\"" >> ${script}

    format_json が使えることを確認します:
        PowerShell または Git bash を新しく開いて:
            format-json --version



    古い方法

    format_json をダウンロードして展開します:
        - https://github.com/Takakiriy/format_json >> Code >> Download.ZIP

    format_json が使うパッケージをインストールします:
        Windows スタート >> PowerShell（と入力）:
            - cd ___/format_json
            - npm install --only=production

    format_json.bat ファイルをダブルクリックすると format_json が起動します:

### mac の場合

    Node.js をインストールします:
        - https://nodejs.org/ja/download/ >> macOS Installer (.pkg) >> 64-bit
        - ダウンロードしたファイル（例：node-v14.16.0.pkg）を開きます
        - インストール オプションはデフォルトを使用

    format_json をダウンロードして展開します:
        - https://github.com/Takakiriy/format_json >> Code >> Download.ZIP

    format_json が使う xlsx, indent-string パッケージをインストールします:
        Launchpad >> Terminal:
            - cd ___/format_json
            - npm install --only=production

    format_json.command ファイルに実行属性を追加します:
        - chmod +x format_json.command

    format_json.command ファイルをダブルクリックすると format_json が起動します:


