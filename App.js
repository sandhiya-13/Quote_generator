import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
	state = { advice: "" };

	componentDidMount() {
		this.fetchAdvice();
	}

	fetchAdvice = () => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then((response) => {
				const { advice } = response.data.slip;

				this.setState({ advice });
			})

			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		const { advice } = this.state;

		return (
			<div className="app">
				<div className="main">
                <h2>Random Quote Generating</h2>
					<h1 className="heading">{this.state.advice}</h1>
					<button className="button" onClick={this.fetchAdvice}>
						<span><b>Click Me to Generate</b></span>
					</button>
				</div>
			</div>
		);
	}
}

export default App;
