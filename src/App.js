import React from 'react';
import './App.scss';
import SoundButton from './soundButton/soundButton';
import audioFiles from './audioFiles';

const buttons = Object.entries(audioFiles).map(([idx, { title, fileName }]) => {
	if (title === undefined) {
		title = fileName;
	}
	return <SoundButton key={idx} sound={fileName} title={title}></SoundButton>;
});

function App() {
	return (
		<div className="App">
			<header className="App-header">BeastBox</header>
			<main className="App-main">{buttons}</main>
		</div>
	);
}

export default App;
