// Hooks imports
import { useContext } from 'react';

// RN core components & API imports
import { StyleSheet, Text, View } from 'react-native';

// Contexts imports
import { MoviesContext } from './../store/MoviesContext';
import { TvShowsContext } from './../store/TvShowsContext';

// Custom components imports
import PopularItems from '../components/ExploreOutput/PopularItems';
import Logo from '../components/generics/Logo';

// Constants
import { COLORS } from '../constants/colors';

// Favorites component
const Favorites = () => {
	const moviesContext = useContext(MoviesContext);
	const tvshowsContext = useContext(TvShowsContext);

	return (
		<View style={styles.container}>
			{/* Logo */}
			<View style={{ alignItems: 'center', marginBottom: '2%' }}>
				<Logo size={55} />
			</View>
			{/* Favorite movies */}
			<View style={styles.favorites}>
				<View style={styles.popularItems}>
					<Text style={styles.title}>My Favorites movies</Text>
					{moviesContext.favorites.length === 0 ? (
						<Text style={styles.error}>
							You have not added to favorites yet !
						</Text>
					) : (
						<PopularItems items={moviesContext.favorites} isMovies />
					)}
				</View>
				{/* Favorite tvShows */}
				<View style={styles.popularItems}>
					<Text style={styles.title}>My Favorites tv shows</Text>
					{tvshowsContext.favorites.length === 0 ? (
						<Text style={styles.error}>
							You have not added to favorites yet
						</Text>
					) : (
						<PopularItems items={tvshowsContext.favorites} />
					)}
				</View>
			</View>
		</View>
	);
};

// Favorites StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: '20%',
		paddingHorizontal: 20,
	},
	favorites: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	heading: {
		color: COLORS.onBackground2,
		fontFamily: 'merriWeatherSans',
		fontSize: 20,
		maxWidth: 350,
		textAlign: 'center',
	},
	popularItems: {
		width: '100%',
		padding: 10,
	},
	title: {
		fontFamily: 'merriWeatherSans',
		color: COLORS.onBackground1,
		fontSize: 18,
		marginBottom: 15,
	},
	error: {
		fontFamily: 'merriWeatherSans',
		color: COLORS.error,
		fontSize: 16,
		marginTop: 10,
		textAlign: 'center',
	},
});

export default Favorites;
