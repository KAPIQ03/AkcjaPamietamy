import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HarcData } from '../../constants/data';
import { FaSearch } from 'react-icons/fa';
import PeopleCard from '../PeopleCard/peopleCard';
import './peopleList.css';

const PeopleList = () => {
	const [input, setInput] = useState('');

	return (
		<div>
			<div className='bgSearch'>
				<div className='headerSearchBar'>
					<div className='search'>
						<input
							placeholder='Wyszukaj...'
							value={input}
							onChange={e => setInput(e.target.value)}
						/>
						<FaSearch id='search-icon' />
					</div>
				</div>
			</div>
			<div className='peopleCards'>
				{HarcData.filter(people =>
					people.Name.toLowerCase().includes(input.toLowerCase())
				).map(people => (
					<Link to={'/' + people.id} key={people.id}>
						<PeopleCard person={people} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default PeopleList;
