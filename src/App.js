import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { List } from './containers/List';
import { Page } from './containers/Page';
import './App.css';

function App() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div>
			<div className='header'>
				<div className='center'>
					<h1>#Pamietamy{year}</h1>
				</div>
				<div className='center'>
					<p>Poznaj historię harcerzy ważnych dla Starogardu Gdańskiego</p>
				</div>
			</div>
			<Routes>
				<Route path='/' element={<List />} />
				<Route path='/:id' element={<Page />} />
			</Routes>
			<footer className='center footer'>Copyright © Pamiętamy {year}</footer>
		</div>
	);
}

export default App;
