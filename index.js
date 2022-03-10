import boxen from "boxen";
import { readLocalFile } from "./utilities.js";
import { URL } from "url";
import gradients from "./gradients.js";
import { gradientsOptions } from "./gradients.js";

export const phraze = async (message, ascii = "pup", returnMode = false) => {	
		// get random gradient & print to sdtout
		const colorPrint = (string) => {
		const gradient = gradientsOptions[Math.floor(Math.random() * gradientsOptions.length)];
    console.log(gradients[gradient](string));
		}

	try {
		//read data
		let data = await readLocalFile(
			new URL("./data.json", import.meta.url).pathname
		);
		data = JSON.parse(data);

		let characterDetails = data.find((character) => character.name === ascii);

		if (characterDetails === undefined) {
			throw Error("Character not found");
		}

		//read the character from local file
		let asciiCharater = await readLocalFile(
			new URL(`./ASCII/${ascii}`, import.meta.url).pathname
		);

		//check if user gave us any message
		if (message === undefined || message.trim() === "") {
			message = "Give me some message to phraze";
			if(returnMode){
				return message;
			}
		}

		// allocate boxed input & 'bubble slash'
		const boxed = boxen(message, {
			padding: 0.7,
			margin: { left: characterDetails.messageLeftMargin },
			borderStyle: "round",
		})
    const slash = " ".repeat(characterDetails.messageLeftMargin - 1) + "/"

		// if third param is truthy, return uncolored output and don't print to stdout
    if(returnMode){
			return `
${boxed}
${slash}
${asciiCharater}`;
    }

		// else color print to stdout
		else {
			colorPrint(boxed)
			colorPrint(slash)
      colorPrint(asciiCharater)
		}
	} catch (err) {
		colorPrint("Opps! Something went wrong\n");
		console.error("Try to check if " + ascii + " is a valid character\n");
		console.error("	phraze --help");
	}
};
