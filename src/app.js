import React from 'react';
import ReactDOM from 'react-dom';
import Bubblies from './components/Bubblies';
import './styles/styles.scss';

ReactDOM.render(<Bubblies />, document.getElementById('bubblies'));

const hamburgerToggle = () => {
	const burger = document.querySelector('.hamburger');

	burger.addEventListener('click', () => {
		burger.classList.toggle('toggle');
	});
};

hamburgerToggle();