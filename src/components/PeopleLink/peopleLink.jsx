import React from 'react';
import { Link } from 'react-router-dom';
import { HarcData } from '../../constants/data';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './peopleLink.css';

const PeopleLink = () => {
	const { id } = useParams();
	const activeHarc = HarcData[id];
	return (
		<div>
			<div className='conteiner'>
				<div className='back'>
					<Link to='/' className='buttonBack '>
						<FaArrowLeft />
						<span>Powrót</span>
					</Link>
				</div>
				<div className='firstInfo'>
					<div className='center'>
						<img src={activeHarc.image} alt={activeHarc.Name} />
					</div>
					<div className='center'>
						<h1>{activeHarc.Name}</h1>
					</div>
				</div>
				<div className='textContent'>
					<p>{activeHarc.short_description}</p>
					<p>{activeHarc.long_description}</p>
				</div>
				<iframe
					src={activeHarc.location}
					className='map'
					title='map'
					referrerpolicy='no-referrer-when-downgrade'></iframe>
			</div>
		</div>
	);
};

export default PeopleLink;
