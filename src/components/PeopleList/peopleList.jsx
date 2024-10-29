import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HarcData } from '../../constants/data';
import { FaSearch } from 'react-icons/fa';
import PeopleCard from '../PeopleCard/PeopleCard';
import styles from './PeopleList.module.css';

const PeopleList = () => {
	const [input, setInput] = useState('');

	return (
		<div>
			<div className={styles.header}>
				<div className={styles.search_bar}>
					<input
						placeholder='Wyszukaj...'
						value={input}
						onChange={e => setInput(e.target.value)}
						className={styles.search_bar__input}
					/>
					<FaSearch className={styles.search_bar__icon} />
				</div>
			</div>
			<div className={styles.list_of_people}>
				{HarcData.filter(people =>
					people.Name.toLowerCase().includes(input.toLowerCase())
				).length > 0 ? (
					HarcData.filter(people =>
						people.Name.toLowerCase().includes(input.toLowerCase())
					).map(people => (
						<Link to={'/' + people.id} key={people.id}>
							<PeopleCard {...people} />
						</Link>
					))
				) : (
					<span className={styles['list_of_people--empty']}>
						Nie znaleziono takiej osoby
					</span>
				)}
			</div>
		</div>
	);
};

export default PeopleList;
