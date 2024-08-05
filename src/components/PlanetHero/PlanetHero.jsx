import classes from './PlanetHero.module.css';
import { PlanetSVGs, PlanetGeologyPNGs } from "../../assets/AssetImports";

import { UI_STATES } from '../../store/planet-context';

export default function PlanetHero({ planetName = 'Earth', planetUIState = ''}) {

	function isInternal() {
		return planetUIState === UI_STATES.INTERNAL;
	}
	function isGeology() {
		return planetUIState === UI_STATES.GEOLOGY;
	}
	function isNormal() {
		return planetUIState === UI_STATES.NORMAL;
	}
	function getPlanetKey() {
		if (isInternal()) {
			return 'Planet' + planetName + 'Internal';
		}
		return 'Planet' + planetName;
	}

	return (
		<div className={classes.planet_hero}>
			<img src={PlanetSVGs[getPlanetKey()]}></img>
			{
				isGeology() && <div className={classes.planet_hero_geology_overlay}>
					<img src={PlanetGeologyPNGs['Geology' + planetName]}></img>
				</div>
			}
		</div>
	);
}