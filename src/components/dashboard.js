import React, { Component } from 'react';
import { Table } from 'reactable';
import { connect } from 'react-redux';
import * as actions from '../actions'

class Dashboard extends Component {
	componentDidMount() {
		this.props.getPacks();
	}

	render() {
		return (
			<div>
				<h2>Paquetes</h2>
				<Table className="table" data={this.props.paquetes} itemsPerPage={4} pageButtonLimit={5} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		paquetes: state.packs
	}
}

export default connect(mapStateToProps, actions)(Dashboard);