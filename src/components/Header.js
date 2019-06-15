import React from 'react';

const Header = () => (
	<div className="header">
		<h1>BUBBLIES</h1>
		<ul>
			<li><a href="#">Repository</a></li>
			<li><a href="#">Product Hunt</a></li>
			<li><a href="#">Donate</a></li>
		</ul>
		<div className="hamburger">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
);

export default Header;