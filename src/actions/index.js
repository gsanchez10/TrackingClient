import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, GET_PACKS } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signin`, { email, password })
			// Submit email/password to the server
			.then(response => {
				// If requests is good...
				// - Update state to indicate user is authenticated
				dispatch({ type: AUTH_USER });
				// - Save the JWT token
				localStorage.setItem('token', response.data.token);
				// - redirect to the route '/feature'
				browserHistory.push('/dashboard');
			})
			.catch(() => {
				// If request is bad...
				// - Show an arror to the user
				dispatch(authError('Bad Login Info'));
			})
	}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}

export function getPacks() {
	return function(dispatch) {
		axios.get(`${ROOT_URL}/packs`, { headers: { Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OWExOWY2NzA0NGU1YzZhOTAxYTkyOGMiLCJpYXQiOjE1MDM3NjQzMjgwMTR9.gJGTyqNFBstYSSX1Le9y1NKTN-ZFxNGb2CiLOsp_iAM' }})
			// Submit email/password to the server
			.then(response => {
				// If requests is good...
				// - Update state to indicate user is authenticated
				dispatch({ type: GET_PACKS, payload: response.data });
			})
			.catch(() => {
				// If request is bad...
				// - Show an arror to the user
				// dispatch(authError('Error obteniendo paquetes.'));
			})
	}
}