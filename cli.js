#!/usr/bin/env node
import taketalk from "taketalk";
import { phraze } from "./index.js";
import { readLocalFile } from "./utilities.js";
import path from "path";

taketalk({
	init(input, options) {
		phraze(input, options["_"][1]);
	},
	async help() {
		console.log(`
		Usage
			$ phraze <string>
			$ phraze <string> <character name>
			$ echo <string> | phraze
		
		Example
			$ phraze 'Hi this is casper' casper
		`);
		const file = await readLocalFile(path.join(process.cwd(), "data.json"));
		const data = JSON.parse(file);

		console.log("Try from the following chracters :- \n");
		console.log(data.map(character => character.name).join(", "));

	},
	version: async () => {
		const file = await readLocalFile(path.join(process.cwd(), "package.json"));
		const pkg = JSON.parse(file);
		console.log(pkg.version);
	},
});
