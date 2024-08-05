import { useContext } from 'react';

import classes from './PlanetMenu.module.css';
import { PlanetContext, UI_STATES } from '../../store/planet-context';

export default function PlanetMenu() {
	const { getSelectedPlanet, selectedPlanetName, uiState, selectUIState } = useContext(PlanetContext);
	const selectedPlanet = getSelectedPlanet();

	function getButtonBackgroundColorStyle(option) {
		if(option == uiState) {
			return {
				backgroundColor: selectedPlanet["button-color"]
			};
		}
		return {};
	}
	return (
		<div className={classes.planet_menu_wrapper}>
			<ul>
				{
					Object.values(UI_STATES).map((option, index) => {
						return (
							<li key={option}>
								<button style={getButtonBackgroundColorStyle(option)} onClick={() => selectUIState(option)}>
									<div className={classes.button_index}>
										<h3>0{index + 1}</h3>
									</div>
									<div className={classes.button_label}>
										<h3>{option}</h3>
									</div>
								</button>
							</li>
						)
					})
				}
			</ul>
		</div>
	);
}