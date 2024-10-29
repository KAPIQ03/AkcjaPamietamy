import React from 'react';
import styles from './PeopleCard.module.css';

const Image = props => {
	return (
		<img src={props.image} alt={props.name} className={styles.card__image} />
	);
};

const Name = props => {
	return (
		<div>
			<h2 className={styles.description__name}>{props.Name}</h2>
		</div>
	);
};

const Description = props => {
	const text = props.short_description.slice(0, 300);
	return (
		<div>
			<p className={styles.description__paragraph}>{text}...</p>
		</div>
	);
};
const PeopleCard = person => {
	return (
		<div className={styles.card} key={person.id}>
			<Image {...person} />
			<div className={styles.card__description}>
				<Name {...person} />
				<Description {...person} />
			</div>
		</div>
	);
};

export default PeopleCard;
