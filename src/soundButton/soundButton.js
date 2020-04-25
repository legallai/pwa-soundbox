import React from 'react';
import './soundButton.scss';

export default class SoundButton extends React.Component {
	constructor(props) {
		super(props);
		this.audioElem = React.createRef();

		this.playSound = this.playSound.bind(this);
	}

	playSound() {
		this.audioElem.current.play();
	}

	render() {
		return (
			<span>
				<audio src={this.props.sound} ref={this.audioElem}>
					Your browser does not support the <code>audio</code> element.
				</audio>
				<button onClick={this.playSound}>{this.props.title}</button>
			</span>
		);
	}
}
