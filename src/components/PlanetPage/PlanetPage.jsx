import { useContext } from 'react';
import classes from './PlanetPage.module.css';

import { PlanetContext } from '../../store/planet-context';

import PlanetHero from '../PlanetHero/PlanetHero.jsx';
import PlanetDetails from '../PlanetDetails/PlanetDetails.jsx';
import PlanetMenu from '../PlanetMenu/PlanetMenu.jsx';

export default function PlanetPage() {
	const { selectedPlanetName, uiState } = useContext(PlanetContext);

	return (
		<div className={classes.planet_content}>
			<div className={classes.planet_hero}>
				<PlanetHero planetName={selectedPlanetName} planetUIState={uiState}></PlanetHero>
			</div>
			<div className={classes.planet_details}>
				<PlanetDetails></PlanetDetails>
			</div>
		</div>
	)
}