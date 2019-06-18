import React from 'react';
import uuidv4 from 'uuid';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			canSend: false,
			preAnswer: '',
			answers: []
		}
	}

	addAnswer = () => {
		this.setState(({
			canSend: true,
			preAnswer: '',
			answers: [
				...this.state.answers,
				{
					id: uuidv4(),
					name: this.state.preAnswer
				}
			]
		}), () => console.log(this.state, this.state.answers));
	}

	preAdd = (pre) => {
		this.setState(state => ({
			...state,
			preAnswer: pre
		}));
	}

	removeAnswer = id => {
		this.setState(state => ({
			...state,
			answers: this.state.answers.filter(a => a.id !== id)
		}), () => {
			if (this.state.answers.length < 1) {
				this.setState(state => ({
					...state,
					canSend: false
				}));
			}
		});
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
					{this.state.answers.map(a =>
						<li key={a.id}>
							{a.name}
							<button onClick={_ => this.removeAnswer(a.id)}>x</button>
						</li>
					)}
				</ul>

				<button disabled={!this.state.canSend} type="submit">
					Send
				</button>
			</div>
		);
	}
}

export default Form;
