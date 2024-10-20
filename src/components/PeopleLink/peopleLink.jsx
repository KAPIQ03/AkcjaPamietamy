import React from 'react';
import { Link } from 'react-router-dom';
import { HarcData } from '../../constants/data';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './PeopleLink.module.css';

const BackButton = () => {
	return (
		<div className={styles.back}>
			<Link to='/' className={styles.buttonBack}>
				<FaArrowLeft />
				<span>Powrót</span>
			</Link>
		</div>
	);
};

const Image = props => {
	return (
		<div className={styles.center}>
			<img src={props.image} alt={props.Name} />
		</div>
	);
};

const Name = props => {
	return (
		<div className={styles.center}>
			<h1>{props.Name}</h1>
		</div>
	);
};

const Description = props => {
	return (
		<div className={styles.textContent}>
			<p>{props.short_description}</p>
			<p>{props.long_description}</p>
		</div>
	);
};

const Map = props => {
	return (
		<iframe
			src={props.location}
			className={styles.map}
			title='map'
			referrerpolicy='no-referrer-when-downgrade'></iframe>
	);
};

const PeopleLink = () => {
	const { id } = useParams();
	const activeHarc = HarcData[id];

	return (
		<div className={styles.conteiner}>
			<BackButton />
			<div className={styles.firstInfo}>
				<Image {...activeHarc} />
				<Name {...activeHarc} />
			</div>
			<Description {...activeHarc} />
			<Map {...activeHarc} />
		</div>
	);
};

export default PeopleLink;
