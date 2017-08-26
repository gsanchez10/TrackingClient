import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
	renderLinks() {
		if(this.props.isAuthenticated) {
			return (
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<Link to="signin">Sign out</Link>
					</li>
				</ul>
			);
		}

		return (
			<ul className="nav navbar-nav nav-tabs">
				<li className="nav-item">
					<Link to="signin" className="nav-link">Sign up</Link>
				</li>
				<li className="nav-item">
					<Link to="signin" className="nav-link">Sign in</Link>
				</li>
				<li className="nav-item">
					<Link to="dashboard" className="nav-link active">Dashboard</Link>
				</li>
			</ul>
		);
	}
	render() {
		return (
			<div>
				<nav className="navbar navbar-light" >
					{this.renderLinks()}
				</nav>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { isAuthenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
