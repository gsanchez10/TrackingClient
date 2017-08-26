import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

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
				browserHistory.push('/feature');
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