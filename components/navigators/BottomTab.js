// Custom components imports
import ExploreStack from './ExploreStack';
import Favorites from './../../screens/Favorites';

// Navigation Imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Navigators
const Tab = createBottomTabNavigator();

// Ionicons
import { Ionicons } from '@expo/vector-icons';

// Constants
import { COLORS } from '../../constants/colors';

// BottomTab componet
const BottomTab = () => (
	<Tab.Navigator
		screenOptions={{
			// header options
			headerShown: false,
			// tab options
			tabBarStyle: {
				backgroundColor: COLORS.primary,
				position: 'absolute',
				left: 20,
				right: 20,
				bottom: '5%',
				borderRadius: 20,
				elevation: 0,
			},
			tabBarShowLabel: false,
			tabBarActiveTintColor: COLORS.onBackground1,
			tabBarInactiveTintColor: COLORS.onBackground1,
		}}>
		<Tab.Screen
			name='ExploreStack'
			component={ExploreStack}
			options={{
				tabBarIcon: ({ focused, color }) => {
					let iconName = focused ? 'home-sharp' : 'home-outline';
					return (
						<Ionicons name={iconName} size={focused ? 30 : 20} color={color} />
					);
				},
			}}
		/>
		<Tab.Screen
			name='Favorites'
			component={Favorites}
			options={{
				tabBarIcon: ({ focused, color }) => {
					let iconName = focused ? 'bookmarks' : 'bookmarks-outline';
					return (
						<Ionicons name={iconName} size={focused ? 35 : 25} color={color} />
					);
				},
			}}
		/>
	</Tab.Navigator>
);

export default BottomTab;
