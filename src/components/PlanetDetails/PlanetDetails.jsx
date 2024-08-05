import { useContext } from 'react';
import { PlanetContext, UI_STATES } from '../../store/planet-context';

import { IconSource } from '../../assets/AssetImports';

import classes from './PlanetDetails.module.css';
import PlanetMenu from '../PlanetMenu/PlanetMenu';

export default function PlanetDetails() {
	const { selectedPlanetName, uiState, getSelectedPlanet } = useContext(PlanetContext);
	const selectedPlanetObject = getSelectedPlanet();

	function getSelectedPlanetDetails() {
		switch(uiState) {
			case UI_STATES.INTERNAL:
				return selectedPlanetObject?.internal_structure || {content: '', source: ''};
			case UI_STATES.GEOLOGY:
				return selectedPlanetObject?.surface_geology || {content: '', source: ''};
			default:
				return selectedPlanetObject?.overview || {content: '', source: ''};
		}
	}

	return (
		<div className={classes.planet_details_wrapper}>
			<h1>
				{selectedPlanetName}
			</h1>
			<div className={classes.planet_details}>
				<p>
					{getSelectedPlanetDetails().content}
				</p>
			</div>
			
			<a className={classes.source_link} href={getSelectedPlanetDetails().source} target='_blank' >
				Source : <u><b>Wikipedia</b></u>
				<img src={IconSource}></img>
			</a>
			<div className={classes.planet_details_menu}>
				<PlanetMenu></PlanetMenu>
			</div>
		</div>
	);
}