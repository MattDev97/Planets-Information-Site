import { createContext, useState } from "react";

import planetJSON from '../data/planet-data.json';

export const PlanetContext = createContext({
	planets : [],
	planetNames : [],
	selectedPlanet : 'Earth',
	selectPlanet : () => {},
	getSelectedPlanet : () => {}
});

export function PlanetContextProvider({ children }) {
	const planetObjects = planetJSON.planets;
	const [selectedPlanet, setSelectedPlanet] = useState('Earth');

	function handleSelectPlanet(planet) {
		setSelectedPlanet(planet);
	}

	function handleGetSelectedPlanet() {
		return planetObjects.find(planet => planet.name === selectedPlanet);
	}

	const ctxValue = {
		planets : planetObjects,
		planetNames : planetObjects.map(planet => planet.name),
		selectedPlanet : selectedPlanet,
		selectPlanet : handleSelectPlanet,
		getSelectedPlanet : handleGetSelectedPlanet
	};
	return (
		<PlanetContext.Provider value={ctxValue}>
			{children}
		</PlanetContext.Provider>
	);
}