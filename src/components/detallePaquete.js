import React, { Component } from 'react';

export default class DetallePaquete extends Component {
	render() {
		const id = this.props.params.paqId;
		return (
			<div>Detalle -> {id}</div>
		);
	}
}