// Hooks imports
import { useFonts } from 'expo-font';

// RN core components & API imports
import { StatusBar } from 'expo-status-bar';

// Fonts imports
import Anton from './assets/fonts/Anton-Regular.ttf';
import MerriWeatherSans from './assets/fonts/MerriweatherSans-VariableFont_wght.ttf';
import Righteous from './assets/fonts/Righteous-Regular.ttf';

// App component
export default function App() {
	// Loading the fonts
	const [loaded] = useFonts({
		anton: Anton,
		merriWeatherSans: MerriWeatherSans,
		righteous: Righteous,
	});

	if (loaded) return <></>;
}
