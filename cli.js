#!/usr/bin/env node
import taketalk from "taketalk";
import { phraze } from "./index.js";
import { readLocalFile } from "./utilities.js";
import { URL } from "url";
import gradients from "./gradients.js";
import { gradientsOptions } from "./gradients.js";

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
		const file = await readLocalFile(
			new URL("./data.json", import.meta.url).pathname
		);
		const data = JSON.parse(file);

		console.log("Try from the following chracters :- \n");

		//get random gradient
		let gradient =
			gradientsOptions[Math.floor(Math.random() * gradientsOptions.length)];
		console.log(
			gradients[gradient](data.map((character) => character.name).join(", "))
		);
	},
	version: async () => {
		const file = await readLocalFile(
			new URL("./package.json", import.meta.url).pathname
		);
		const pkg = JSON.parse(file);
		console.log(pkg.version);
	},
});
