import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			preAnswer: '',
			answers: []
		}
	}

	addAnswer = () => {
		this.setState(({
			preAnswer: '',
			answers: [
				...this.state.answers,
				this.state.preAnswer
			]
		}))
	}

	preAdd = (pre) => {
		this.setState(state => ({
			...state,
			preAnswer: pre
		}));
	}

	render() {
		return (
			<div>
				<input
					value={this.state.preAnswer}
					onChange={e => this.preAdd(e.target.value)} />

				<button onClick={() => this.addAnswer()}>
					Add Answer
				</button>

				<ul>
					{this.state.answers.map((a, i) => <li key={i}>{a}</li>)}
				</ul>
			</div>
		);
	}
}

export default Form;
