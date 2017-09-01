import React, { Component } from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { browserHistory } from 'react-router';

import 'react-table/react-table.css';

class Paquetes extends Component {
	componentWillMount() {
		this.props.getPacks();
	}

	render() {
		return (
			<div>
				<h2>Paquetes</h2>
				<ReactTable
	          getTdProps={(state, rowInfo, column, instance) => {
	            return {
	              onClick: (e, handleOriginal) => {
	                console.log('A Td Element was clicked!')
	                console.log('it produced this event:', e)
	                console.log('It was in this column:', column)
	                console.log('It was in this row:', rowInfo)
	                console.log('It was in this table instance:', instance)
	                browserHistory.push('/paquetes/' + rowInfo.original.id);

	                // IMPORTANT! React-Table uses onClick internally to trigger
	                // events like expanding SubComponents and pivots.
	                // By default a custom 'onClick' handler will override this functionality.
	                // If you want to fire the original onClick handler, call the
	                // 'handleOriginal' function.
	                if (handleOriginal) {
	                  handleOriginal()
	                }
	              }
	            }
	          }}
	          data={this.props.paquetes}
	          columns={[
	            {
	              Header: "Id",
	              accessor: "id"
	            },
	            {
	              Header: "Courier number",
	              accessor: "courierNumber"
	            },
	            {
	              Header: "Descripcion",
	              accessor: "description"
	            },
	            {
	              Header: "Remitente",
	              accessor: "from"
	            },
	            {
	              Header: "Estado",
	              accessor: "status"
	            },
	            {
	              Header: "Cargos",
	              accessor: "charges"
	            }
	          ]}
	          defaultPageSize={3}
	          className="-striped -highlight"
	        />
	        {this.props.children}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		paquetes: state.packs
	}
}

export default connect(mapStateToProps, actions)(Paquetes);