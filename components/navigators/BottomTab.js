// Custom components imports
import ExploreStack from './ExploreStack';
import FavoritesStack from './FavoritesStack';

// Navigation Imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Navigators
const Tab = createBottomTabNavigator();

// Ionicons
import { Ionicons } from '@expo/vector-icons';

// Constants
import { COLORS } from '../../constants/colors';

// Contexts
import TvshowsContextProvider from './../../store/TvShowsContext';
import MoviesContextProvider from './../../store/MoviesContext';

// BottomTab componet
const BottomTab = () => (
	<MoviesContextProvider>
		<TvshowsContextProvider>
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
								<Ionicons
									name={iconName}
									size={focused ? 30 : 20}
									color={color}
								/>
							);
						},
					}}
				/>
				<Tab.Screen
					name='FavoritesStack'
					component={FavoritesStack}
					options={{
						tabBarIcon: ({ focused, color }) => {
							let iconName = focused ? 'bookmarks' : 'bookmarks-outline';
							return (
								<Ionicons
									name={iconName}
									size={focused ? 35 : 25}
									color={color}
								/>
							);
						},
					}}
				/>
			</Tab.Navigator>
		</TvshowsContextProvider>
	</MoviesContextProvider>
);

export default BottomTab;
