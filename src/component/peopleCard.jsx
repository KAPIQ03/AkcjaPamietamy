import React from 'react';
import '../style/peopleCard.css';

const PeopleCard = ({ person }) => {
	const text = person.short_description.slice(0, 500);
	return (
		<div className='peopleCard' key={person.id}>
			<img src={person.image} alt={person.name} />
			<div className='desc'>
				<div className='name'>
					<h2>{person.Name}</h2>
				</div>
				<div className='info'>
					<p>{text}...</p>
				</div>
			</div>
		</div>
	);
};

export default PeopleCard;
