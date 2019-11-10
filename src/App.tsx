import React from 'react';
import './App.css';
import { ExchangeRates } from './ExchangeRates';

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
                <ExchangeRates />
			</header>
		</div>
	);
}

export default App;
