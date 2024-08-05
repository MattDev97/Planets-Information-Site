import classes from './PlanetHero.module.css';
import PlanetSVG from './PlanetSVG';

export default function PlanetHero() {
	return (
		<div className={classes.planet_hero}>
			<PlanetSVG></PlanetSVG>
		</div>
	);
}