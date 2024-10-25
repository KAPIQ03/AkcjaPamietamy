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
			<div className={styles.bgSearch}>
				<div className={styles.headerSearchBar}>
					<div className={styles.search}>
						<input
							placeholder='Wyszukaj...'
							value={input}
							onChange={e => setInput(e.target.value)}
						/>
						<FaSearch className={styles.search_icon} />
					</div>
				</div>
			</div>
			<div className={styles.peopleCards}>
				{HarcData.filter(people =>
					people.Name.toLowerCase().includes(input.toLowerCase())
				).map(people => (
					<Link to={'/' + people.id} key={people.id}>
						<PeopleCard {...people} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default PeopleList;
