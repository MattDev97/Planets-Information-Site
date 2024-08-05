import classes from './PlanetHero.module.css';
import { PlanetSVGs } from "../../assets/AssetImports";

export default function PlanetHero({ planetName = 'Earth', isInternalBool = false}) {
	function getPlanetKey() {
		if (isInternalBool) {
			return 'Planet' + planetName + 'Internal';
		}
		return 'Planet' + planetName;
	}

	return (
		<div className={classes.planet_hero}>
			<img src={PlanetSVGs[getPlanetKey()]}></img>
		</div>
	);
}