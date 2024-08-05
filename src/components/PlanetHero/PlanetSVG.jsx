import { useState } from "react";
import { PlanetSVGs } from "../../assets/AssetImports";

export default function PlanetSVG({ planetKeyName = 'PlanetEarth', isInternalBool = false}) {
	const [planetKey, setPlanetKey] = useState(planetKeyName);
	const [isInternal, setIsInternal] = useState(isInternalBool);

	function getPlanetKey() {
		if (isInternal) {
			return planetKey + 'Internal';
		}
		return planetKey;
	}
	console.dir(PlanetSVGs[getPlanetKey()]);

	return (
		<>
			<img src={PlanetSVGs[getPlanetKey()]}></img>
		</>
	)
}