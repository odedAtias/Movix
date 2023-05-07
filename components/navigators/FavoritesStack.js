// Custom components import
import Favorites from './../../screens/Favorites';

// Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigators
const Stack = createNativeStackNavigator();

// Constants
import { COLORS } from '../../constants/colors';

// FavoriteStack component
const FavoritesStack = () => (
	<Stack.Navigator
		screenOptions={{
			contentStyle: {
				backgroundColor: COLORS.background,
			},
			headerStyle: {
				backgroundColor: COLORS.background,
			},
			headerTintColor: COLORS.onBackground1,
			headerTitle: '',
		}}>
		<Stack.Screen
			name='Favorites'
			component={Favorites}
			options={{ headerShown: false }}
		/>
	</Stack.Navigator>
);

export default FavoritesStack;
