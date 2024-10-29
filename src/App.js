import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { List } from './containers/List';
import { Page } from './containers/Page';
import styles from './App.module.css';

function App() {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div>
			<header className={styles.header}>
				<h1 className={styles.header__title}>#Pamietamy{year}</h1>
				<p className={styles.header__site_description}>
					Poznaj historię harcerzy ważnych dla Starogardu Gdańskiego
				</p>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<List />} />
					<Route path='/:id' element={<Page />} />
				</Routes>
			</main>
			<footer className={styles.footer}>
				<span>Copyright © Pamiętamy {year}</span>
			</footer>
		</div>
	);
}

export default App;
