import classes from './App.module.css';
import { BackgroundStars } from './assets/AssetImports.js';

import Header from './components/Header/Header.jsx';
import PlanetPage from './components/PlanetPage/PlanetPage.jsx';
import PlanetFooter from './components/PlanetFooter/PlanetFooter.jsx';

import { PlanetContextProvider } from './store/planet-context.jsx';

function App() {

	return (
		<PlanetContextProvider>
			<img src={BackgroundStars} className={classes.background_stars} alt="background stars"></img>
			<Header></Header>
			<div className={classes.container}>
				<PlanetPage></PlanetPage>
			</div>
			<div className={classes.container}>
				<PlanetFooter></PlanetFooter>
			</div>
		</PlanetContextProvider>
	);
}

export default App;
