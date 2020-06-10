import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from "react-redux";
import {store} from "./store";
import ErrorBoundry from "./components/error-boundry";
import {PunkbeerServiceProvider} from "./components/punkbeer-service-context";
import PunkbeerService from "./services/punkbeer-service";
import {BrowserRouter} from 'react-router-dom';

const punkbeerService = new PunkbeerService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<PunkbeerServiceProvider value={punkbeerService}>
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</PunkbeerServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
);
