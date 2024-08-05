import { createContext, useState } from "react";

import planetJSON from '../data/planet-data.json';

export const UI_STATES = {
	NORMAL: 'Overview',
	INTERNAL: 'Internal Structure',
	GEOLOGY: 'Surface Geology'
}

export const PlanetContext = createContext({
	planets : [],
	planetNames : [],
	selectedPlanetName : 'Earth',
	uiState : UI_STATES.NORMAL,
	selectPlanet : () => {},
	selectUIState : () => {},
	getSelectedPlanet : () => {}
});

export function PlanetContextProvider({ children }) {
	const planetObjects = planetJSON.planets;
	const [selectedPlanet, setSelectedPlanet] = useState('Earth');
	const [uiState, setUIState] = useState(UI_STATES.NORMAL);

	function handleSelectPlanet(planet) {
		setSelectedPlanet(planet);
	}

	function handleGetSelectedPlanet() {
		return planetObjects.find(planet => planet.name === selectedPlanet);
	}

	function handleSelectUIState(uiState) {
		setUIState(uiState);
	}

	const ctxValue = {
		planets : planetObjects,
		planetNames : planetObjects.map(planet => planet.name),
		selectedPlanetName : selectedPlanet,
		uiState : uiState,
		selectPlanet : handleSelectPlanet,
		selectUIState : handleSelectUIState,
		getSelectedPlanet : handleGetSelectedPlanet
	};
	return (
		<PlanetContext.Provider value={ctxValue}>
			{children}
		</PlanetContext.Provider>
	);
}