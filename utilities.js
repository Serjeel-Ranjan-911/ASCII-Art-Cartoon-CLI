import fs from "fs";
import path from "path";

export const readLocalFile = async (path) => {
	let file = await fs.promises.readFile(path);
	return file.toString();
};

