import classes from './PlanetFooterCard.module.css';

export default function PlanetFooterCard({ label, value, unit }) {
	function getParsedValue() {
		if (value === null) return 'Unknown';
		return value.split(' ')[0];
	}
	return (
		<div className={classes.footer_card}>
			<h4>{label}</h4>
			<h2>{value} {/*<span>{unit}</span>*/}</h2>
		</div>
	)
}