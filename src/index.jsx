import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import './scss/app.scss';
import Form from "./components/Form";

class HelloMessage extends React.Component {
	render() {
		return <div>
			<Header />
			<div className="container">
				<h2>Experiment</h2>
				<h1>{this.props.question}</h1>
				<Form></Form>
			</div>
		</div>
	}
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage question="What really matters to you?" />, App);
module.hot.accept();
