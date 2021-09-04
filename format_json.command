
# chmod +x main.command
export  script_file_path="$0"
export  parent_path="${script_file_path%/*}"
cd  "${parent_path}"
export  NODE_PATH=${parent_path}/node_modules

node  build/src/format_json.js
