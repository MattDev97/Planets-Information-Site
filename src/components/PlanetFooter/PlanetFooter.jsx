import { useContext } from 'react';

import { PlanetContext } from '../../store/planet-context';
import classes from './PlanetFooter.module.css';

import PlanetFooterCard from '../PlanetFooterCard/PlanetFooterCard';

export default function PlanetFooter() {
	const { getSelectedPlanet } = useContext(PlanetContext);
	const selectedPlanet = getSelectedPlanet();
	const metrics = [
		{ label: 'Rotation Time', value: selectedPlanet?.rotation_time, unit: 'Days' },
		{ label: 'Revolution Time', value: selectedPlanet?.revolution_time, unit: 'Days' },
		{ label: 'Radius', value: selectedPlanet?.radius, unit: 'KM' },
		{ label: 'Average Temp', value: selectedPlanet?.average_temp, unit: '°C' },
	]
	return (
		<div className={classes.footer_metrics}>
			{metrics.map(metric=> {
				return (
					<PlanetFooterCard label={metric.label} value={metric.value} unit={metric.unit}></PlanetFooterCard>
				)
			})}
		</div>
	)
}