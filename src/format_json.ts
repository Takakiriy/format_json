import * as fs from "fs";
import * as clipboardy from 'clipboardy';
import * as lib from "./lib";

async function  main() {
	console.log("");
	console.log("Enter only: use the text in the clipboard");
	const  input_file_path = await lib.input( "Input JSON UTF-8 file path>" );
	if (input_file_path) {
		const  output_file_path = input_file_path +".updating";
		const  a_JSON = fs.readFileSync( input_file_path,  "utf-8" );

		const  an_object = JSON.parse( a_JSON );
		const  formatted_JSON = JSON.stringify( an_object, null, "\t" );
		fs.writeFileSync( output_file_path,  formatted_JSON );
	} else {
		const  a_JSON = clipboardy.readSync();

		const  an_object = JSON.parse( a_JSON );
		const  formatted_JSON = JSON.stringify( an_object, null, "\t" );
		clipboardy.writeSync(formatted_JSON);
	}
}

async function  callMain() {

    await  main()
        .catch( (e: any)=>{
			console.log( `ERROR: ${e.message}` );
			const  timeOver = new Date();
			timeOver.setSeconds( timeOver.getSeconds() + 1 );

			while ((new Date()).getTime() < timeOver.getTime()) {
			}
        })
        .finally(()=>{
            lib.getInputObject().close();
        });
}
callMain();
