import path from "path";
import fs from "fs";

export const readLocalFile = async (path) => {
	let file = await fs.promises.readFile(path);
	return file.toString();
};

