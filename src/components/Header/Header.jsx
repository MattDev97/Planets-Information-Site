import classes from './Header.module.css';

export default function Header() {
	return (
		<header className={`text-white ${classes.header_main}`}>
			<div>
				<h2>The Planets</h2>
			</div>
			<div className={classes.header_menu}>
				<ul>
					{
						['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'].map(planet => (
							<li key={planet}>
								<a href={`#${planet}`}>{planet}</a>
							</li>
						))
					}
				</ul>
			</div>
		</header>
	)
}