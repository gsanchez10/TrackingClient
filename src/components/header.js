import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
	renderLinks() {
		if(this.props.isAuthenticated) {
			return (
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<Link to="/paquetes" className="nav-link active btn btn-primary">Paquetes</Link>
					</li>
					<li className="nav-item">
						<Link to="/signin">Sign out</Link>
					</li>
				</ul>
			);
		}

		return (
			<ul className="nav nav-pills">
				<li className="nav-item">
					<Link to="/signin" className="nav-link">Sign up</Link>
				</li>
				<li className="nav-item">
					<Link to="/signin" className="nav-link ">Sign in</Link>
				</li>
				<li className="nav-item">
					<Link to="/paquetes" className="nav-link active btn btn-primary">Paquetes</Link>
				</li>
			</ul>
		);
	}
	render() {
		return (
			<div>
				<nav className="navbar navbar-default" >
					<nav className="navbar navbar-inverse">
					    <div className="navbar-header">
							<a className="navbar-brand" href="#"><img src="/img/logo.png" style={{height:'30px'}}/></a>
						</div>
					</nav>
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
