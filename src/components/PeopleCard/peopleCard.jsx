import React from 'react';
import styles from './PeopleCard.module.css';

const Image = props => {
	return <img src={props.image} alt={props.name} />;
};

const Name = props => {
	return (
		<div className={styles.name}>
			<h2>{props.Name}</h2>
		</div>
	);
};

const Description = props => {
	const text = props.short_description.slice(0, 300);
	return (
		<div className={styles.info}>
			<p>{text}...</p>
		</div>
	);
};
const PeopleCard = person => {
	return (
		<div className={styles.peopleCard} key={person.id}>
			<Image {...person} />
			<div className={styles.desc}>
				<Name {...person} />
				<Description {...person} />
			</div>
		</div>
	);
};

export default PeopleCard;
