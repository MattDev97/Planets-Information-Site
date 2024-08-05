import { useContext } from 'react';
import { PlanetContext, UI_STATES } from '../../store/planet-context';

export default function PlanetDetails() {
	const { selectedPlanetName, uiState, getSelectedPlanet } = useContext(PlanetContext);

	function renderDetails() {
		const selectedPlanetObject = getSelectedPlanet();

		switch(uiState) {
			case UI_STATES.INTERNAL:
				return selectedPlanetObject?.internal_structure?.content;
			case UI_STATES.GEOLOGY:
				return selectedPlanetObject?.surface_geology?.content;
			default:
				return selectedPlanetObject?.overview?.content;
		}
	}

	return (
		<div>
			<h1>{selectedPlanetName}</h1>
			<p>{renderDetails()}</p>
		</div>
	);
}