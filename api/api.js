import requests from '../common/request.js'

// export function loginApi(params) {
// 	return requests.post('/fll-common/api/common/login/password',params)
// }
export function loginApi(params) {
	return requests.post('/common/login/password', params)
}

export function phonelogin(params) {
	return requests.post('/common/login/phone', params)
}

export function update(params) {
	return requests.put('/common/user/info', params)
}
export function updatePassword(params) {
	return requests.put('/common/user/password', params)
}

export function getInfo(params) {
	return requests.get('/common/user/info')
}
export function upload(params) {
	return requests.upload('/common/user/upload', params)
}

