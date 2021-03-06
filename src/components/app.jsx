import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import theme from "../style/theme.js";
import AppBar from "material-ui/AppBar";
//COMPONENTS
import Header from "../components/layout/header";
import Home from "../components/home";

import porchImg from "../images/About.jpg";

const muiTheme = getMuiTheme(theme);

export default class App extends Component {
	render() {
		return (

			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Header />
					{this.props.children || <Home />}
				</div>
			</MuiThemeProvider>
		);
	}
}