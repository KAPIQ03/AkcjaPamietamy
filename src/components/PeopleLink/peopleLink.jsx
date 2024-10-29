import React from 'react';
import { Link } from 'react-router-dom';
import { HarcData } from '../../constants/data';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './PeopleLink.module.css';

const BackButton = () => {
	return (
		<nav className={styles.navigation}>
			<Link to='/' className={styles['navigation__button--back']}>
				<FaArrowLeft />
				<span className={styles['button--back__text']}>Powrót</span>
			</Link>
		</nav>
	);
};

const Image = props => {
	return (
		<div className={styles.first_info__people_image}>
			<img
				src={props.image}
				alt={props.Name}
				className={styles.people_image__image}
			/>
		</div>
	);
};

const Name = props => {
	return (
		<div className={styles.first_info__name}>
			<h1>{props.Name}</h1>
		</div>
	);
};

const Description = props => {
	return (
		<div className={styles.description}>
			<p className={styles.description__paragraf}>{props.short_description}</p>
			<p className={styles.description__paragraf}>{props.long_description}</p>
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
		<div className={styles.container}>
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
