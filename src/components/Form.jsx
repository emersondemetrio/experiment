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

	addAnswer = (event = null) => {
		const newAnswer = this.state.preAnswer;

		let canProceed = event === null;
		if (event !== null) {
			if (event.key === 'Enter') {
				event.preventDefault();
				event.stopPropagation();
				canProceed = newAnswer.length > 1;
			}
		}

		canProceed && this.setState(({
			canSend: true,
			preAnswer: '',
			answers: [
				...this.state.answers,
				{
					id: uuidv4(),
					name: newAnswer
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
			<>
				<form action="#">
					<div className="form-row">
						<div className="col">
							<input
								type="number"
								className="form-control"
								placeholder="My age is" />
						</div>

						<div className="col">
							<input
								className="form-control"
								value={this.state.preAnswer}
								onKeyDown={e => this.addAnswer(e)}
								onChange={e => this.preAdd(e.target.value)} />
						</div>
					</div>

					<button className="btn btn-primary" disabled={this.state.preAnswer < 1} onClick={() => this.addAnswer()}>
						Add Answer
					</button>

					<button className="btn btn-primary" disabled={!this.state.canSend} type="submit">
						Send
					</button>
				</form>

				<ul className="list-group">
					{this.state.answers.map(a =>
						<li key={a.id} className="list-group-item d-flex justify-content-between align-items-center">
							{a.name}
							<button onClick={_ => this.removeAnswer(a.id)}>x</button>
						</li>
					)}
				</ul>
			</>
		);
	}
}

export default Form;
