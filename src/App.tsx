import { useState } from 'react';
import { Header } from './components/header/header';
import { Navigation } from './components/navigation/Navigation';

function App() {
	return (
		<div className='App'>
			<Header />
			<Navigation />
		</div>
	);
}

export default App;
