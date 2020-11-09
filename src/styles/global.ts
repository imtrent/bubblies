import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

	body {
		margin: 0;
		box-sizing: border-box;
		font-family: 'Noto Sans', sans-serif;
	}
`;

export default GlobalStyle;
