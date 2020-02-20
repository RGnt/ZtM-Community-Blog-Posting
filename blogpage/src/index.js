import React from 'react';
import ReactDOM from 'react-dom';
import ReduxWrapper from './redux/ReduxWrapper';

import './index.css';
import App from './App';

ReactDOM.render(
	<ReduxWrapper>
		<App />
	</ReduxWrapper>,
	document.getElementById('root')
);
