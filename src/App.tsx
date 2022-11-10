import { useState } from 'react';
import { Header } from './components/header/header';
import { Main } from './components/main/Main';
import { Navigation } from './components/navigation/Navigation';

function App() {
	return (
		<div className='App'>
			<Header />
			<Navigation />
			<Main />
		</div>
	);
}

export default App;
