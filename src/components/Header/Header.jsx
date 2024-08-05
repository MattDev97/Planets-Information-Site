import { useContext } from 'react';
import classes from './Header.module.css';

import { PlanetContext } from '../../store/planet-context';

export default function Header() {
	const { planetNames, selectPlanet, planets } = useContext(PlanetContext);

	function handleSelectPlanet(planet) {
		selectPlanet(planet);
	}
	return (
		<header className={`text-white ${classes.header_main}`}>
			<div className={classes.header_title}>
				<h2>The Planets</h2>
			</div>
			<div className={classes.header_menu}>
				<ul>
					{
						planetNames.map(planet => (
							<li onClick={() => handleSelectPlanet(planet)} key={planet}>
								<a>
									<h4>{planet}</h4>
								</a>
							</li>
						))
					}
				</ul>
			</div>
		</header>
	)
}