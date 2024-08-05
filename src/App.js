import classes from './App.module.css';

import Header from './components/Header/Header.jsx';
import PlanetPage from './components/PlanetPage/PlanetPage.jsx';

import { PlanetContextProvider } from './store/planet-context.jsx';

function App() {

	return (
		<PlanetContextProvider>
			<Header></Header>
			<PlanetPage></PlanetPage>
		</PlanetContextProvider>
	);
}

export default App;
