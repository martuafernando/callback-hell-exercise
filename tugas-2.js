import axios from "axios";

function fetchDataFromAxios() {
	return axios({
		method: "get",
		url: "https://jsonplaceholder.typicode.com/users",
		responseType: "json",
	})
		.then((response) => response.data)
		.catch((error) => error);
}

function fetchData() {
	const response = fetch("https://jsonplaceholder.typicode.com/users").then(
		(response) => response.json().catch((error) => error),
	);

	return response;
}


const fetchResult = await fetchData()
const axiosResult = await fetchDataFromAxios()

console.log(fetchResult)
console.log(axiosResult)