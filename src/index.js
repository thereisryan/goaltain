import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(
	<Routes history={browserHistory} />,
	document.getElementById('root')
);


registerServiceWorker();

