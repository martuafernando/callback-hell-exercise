import axios from "axios";

const URL_TARGET = "https://jsonplaceholder.typicode.com/users";

function fetchDataFromAxios() {
	return axios({
		method: "get",
		url: URL_TARGET,
		responseType: "json",
	})
		.then((response) => response.data)
		.catch((error) => error);
}

function fetchData() {
	const response = fetch(URL_TARGET).then((response) =>
		response.json().catch((error) => error),
	);

	return response;
}

const fetchResult = await fetchData();
const axiosResult = await fetchDataFromAxios();

console.log(fetchResult);
console.log(axiosResult);
