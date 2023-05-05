// Hooks imports
import { useFonts } from 'expo-font';

// RN core components & API imports
import { StatusBar } from 'expo-status-bar';

// Fonts imports
import Anton from './assets/fonts/Anton-Regular.ttf';
import MerriWeatherSans from './assets/fonts/MerriweatherSans-VariableFont_wght.ttf';
import Righteous from './assets/fonts/Righteous-Regular.ttf';

// Custom components imports
import Login from './screens/Login';
import BottomTab from './components/navigators/BottomTab';

// Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigators
const Stack = createNativeStackNavigator();

// App component
export default function App() {
	// Loading the fonts
	const [loaded] = useFonts({
		anton: Anton,
		merriWeatherSans: MerriWeatherSans,
		righteous: Righteous,
	});

	if (loaded)
		return (
			<>
				<StatusBar style='dark' />
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerShown: false,
							contentStyle: {
								backgroundColor: COLORS.background,
							},
						}}>
						<Stack.Screen name='Login' component={Login} />
						<Stack.Screen name='BottomTabs' component={BottomTab} />
					</Stack.Navigator>
				</NavigationContainer>
			</>
		);
}
