import boxen from "boxen";
import { readLocalFile } from "./utilities.js";
import { URL } from "url";
import gradients from "./gradients.js";
import { gradientsOptions } from "./gradients.js";

export const phraze = async (message, ascii = "casper") => {
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
		if (message == undefined || message.trim() === "") {
			message = "Give me some message to phraze";
		}

		//get random gradient
		let gradient =
			gradientsOptions[Math.floor(Math.random() * gradientsOptions.length)];
		//print the message
		console.log(
			gradients[gradient](
				boxen(message, {
					padding: 0.7,
					margin: { left: characterDetails.messageLeftMargin },
					borderStyle: "round",
				})
			)
		);
		console.log(
			gradients[gradient](
				" ".repeat(characterDetails.messageLeftMargin - 1) + "/"
			)
		);
		console.log(gradients[gradient](asciiCharater));
	} catch (err) {
		console.log(err);
		console.error("Unable to find " + ascii + " ASCII art");
	}
};
