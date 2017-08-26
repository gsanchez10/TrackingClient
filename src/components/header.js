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
			<ul className="nav navbar-nav">
				<li className="nav-item">
					<Link to="signin">Sign up</Link>
				</li>
				<li className="nav-item">
					<Link to="signin">Sign in</Link>
				</li>
			</ul>
		);
	}
	render() {
		return (
			<nav className="navbar navbar-light">
				{this.renderLinks()}
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { isAuthenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
