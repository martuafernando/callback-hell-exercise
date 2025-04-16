import { readFile, writeFile } from "node:fs/promises";

async function readJsonFromFile(path) {
	const data = await readFile(path, "utf-8");
  return JSON.parse(data);
}

async function writeJsonToFile(path, data) {
	const jsonData = JSON.stringify(data, null, 2);
  return writeFile(path, jsonData, "utf-8");
}

const READ_FILE_PATH = './users.json'
const WRITE_FILE_PATH = './data.json'

try {
  const data = await readJsonFromFile(READ_FILE_PATH);
  console.log(data);
  await writeJsonToFile(WRITE_FILE_PATH, data);
  console.log('data.json has been generated');
} catch (error) {
  console.error(error.message);
}