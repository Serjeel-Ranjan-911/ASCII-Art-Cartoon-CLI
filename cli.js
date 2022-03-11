#!/usr/bin/env node
import taketalk from "taketalk";
import { phraze } from "./index.js";
import { readLocalFile } from "./utilities.js";
import { URL } from "url";
import gradients from "./gradients.js";
import { gradientsOptions } from "./gradients.js";

taketalk({
	async init(input, options) {
		let characterName = options["_"][1];
		let returnMode = options["_"][2];
		if(returnMode){
			console.log(await phraze(input, characterName, true));
		} 
		else {
			await phraze(input, characterName);
		}
	},
	async help() {
		console.log(`
		Usage
			$ phraze <string> // prints your message from pup
			$ phraze <string> <character name> // prints your message from selected character 
			$ phraze <string> <character name> true // returns the message as a string without any gradient colors
		
		Example
			$ phraze 'Hi this is casper' casper
		`);
		const file = await readLocalFile(
			new URL("./data.json", import.meta.url).pathname
		);
		const data = JSON.parse(file);

		console.log("Try from the following characters :- \n");

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
