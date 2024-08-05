import classes from './PlanetPage.module.css';

import PlanetHero from '../PlanetHero/PlanetHero.jsx';
import PlanetDetails from '../PlanetDetails/PlanetDetails.jsx';
import PlanetMenu from '../PlanetMenu/PlanetMenu.jsx';

export default function PlanetPage() {
	return (
		<div className={classes.planet_content}>
			<div className={classes.planet_hero}>
				<PlanetHero></PlanetHero>
			</div>
			<div className={classes.planet_details}>
				<PlanetDetails></PlanetDetails>
			</div>
		</div>
	)
}