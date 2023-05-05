// Custom components imports
import Explore from './../../screens/Explore';
import AllItems from './../../screens/AllItems';
import ItemDetails from './../../screens/ItemDetails';

// Navigation Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigators
const Stack = createNativeStackNavigator();

// Constants
import { COLORS } from '../../constants/colors';

// ExploreStack component
const ExploreStack = () => (
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
			name='Explore'
			component={Explore}
			options={{ headerShown: false }}
		/>
		<Stack.Screen name='AllItems' component={AllItems} />
		<Stack.Screen name='ItemDetails' component={ItemDetails} />
	</Stack.Navigator>
);

export default ExploreStack;
