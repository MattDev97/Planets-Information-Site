import { useState } from 'react';
import classes from './App.module.css';

import Header from './components/Header/Header.jsx';
import PlanetPage from './components/PlanetPage/PlanetPage.jsx';

import { PlanetContextProvider } from './store/planet-context.jsx';

const UI_STATE = {
	NORMAL: 'normal',
	INTERNAL: 'internal',
	GEOLOGY: 'geology'
}

function App() {
	const [selectedPlanet, setSelectedPlanet] = useState('Earth');
	const [uiState, setUIState] = useState(UI_STATE.NORMAL);

	function setSelectedPlanetHandler(planet) {
		setSelectedPlanet(planet);
		setUIState(UI_STATE.NORMAL);
	}

	return (
		<PlanetContextProvider>
			<Header></Header>
			<PlanetPage></PlanetPage>
		</PlanetContextProvider>

	);
}

export default App;
