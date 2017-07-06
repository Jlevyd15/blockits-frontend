import axios from 'axios'

export function fetchGdaxData() {
	return axios.post('/data/login')
}

// export function fetchGdaxData() {
// 	axios.post('/data/login')
// 	.then(res => res)
// }