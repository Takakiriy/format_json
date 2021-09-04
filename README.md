# format_json

format_json formats the JSON file by adding indents.

[日本語 README](./README-jp.md)


## Install

To use format_json, you must install Node.js.

For Windows:

    Download and expand format_json:
        - https://github.com/Takakiriy/format_json >> Code >> Download.ZIP

    Install Node.js:
        - https://nodejs.org/ja/download/ >> Windows Installer (.msi) >> 64-bit
        - Open the downloaded file (e.g. node-v14.16.0-x64.exe)
        - Installation options are defaults

    Install packages used by format_json:
        - Windows Start >> PowerShell
        - cd ___/format_json
        - npm install --only=production

    To start format_json, double click format_json.bat file:

For mac:

    Download and expand format_json:
        - https://github.com/Takakiriy/format_json >> Code >> Download.ZIP

    Install Node.js:
        - https://nodejs.org/ja/download/ >> macOS Installer (.pkg) >> 64-bit
        - Open the downloaded file (e.g. node-v14.16.0.pkg)
        - Installation options are defaults

    Install packages used by format_json:
        - Launchpad >> Terminal
        - cd ___/format_json
        - npm install --only=production

    Add execution attributes to "format_json.command" file:
        - chmod +x format_json.command

    To start format_json, double click format_json.command file:


## First example

For Windows, double click format_json.bat file and type:
For mac, double click format_json.command file and type:

    input .json file path> example.json.txt

You can drag and drop a file to enter the file without having to type it from the keyboard.

example.json.txt.updating file is created in the folder containing the input file.

If you input Enter only, add indents to the JSON in the clipbard.
