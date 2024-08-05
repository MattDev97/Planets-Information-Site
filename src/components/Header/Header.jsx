import { useContext } from 'react';
import classes from './Header.module.css';

import { PlanetContext } from '../../store/planet-context';

export default function Header() {
	const { planetNames, selectPlanet } = useContext(PlanetContext);

	function handleSelectPlanet(planet) {
		selectPlanet(planet);
	}
	return (
		<header className={`text-white ${classes.header_main}`}>
			<div>
				<h2>The Planets</h2>
			</div>
			<div className={classes.header_menu}>
				<ul>
					{
						planetNames.map(planet => (
							<li key={planet}>
								<a onClick={() => handleSelectPlanet(planet)}>{planet}</a>
							</li>
						))
					}
				</ul>
			</div>
		</header>
	)
}