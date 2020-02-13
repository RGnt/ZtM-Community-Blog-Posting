import React from 'react';
import ReactDOM from 'react-dom';
import ReduxWrapper from './redux/ReduxWrapper';

const App = () => {
	return <p>Hello</p>;
};

ReactDOM.render(
	<ReduxWrapper>
		<App />
	</ReduxWrapper>,
	document.getElementById('root')
);
