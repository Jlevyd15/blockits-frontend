import axios from 'axios'

// export function fetchGdaxData() {
// 	return axios.post('/data/login', {
// 		}).then((response) => {
// 			console.log(response);
// 			return response
// 		}).catch((error) => {
// 			console.log(error);
// 			return error
// 		});
// }
export function fetchGdaxData() {
	return axios.post('/data/login')
}