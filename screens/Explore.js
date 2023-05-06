// RN core components & API imports
import { StyleSheet, Text, View } from 'react-native';

// Hooks imports
import { useContext } from 'react';

// Constants
import { COLORS } from '../constants/colors';

// Custom components imports
import Logo from '../components/generics/Logo';
import ExploreButton from './../components/ExploreOutput/ExploreButton';
import PopularItems from '../components/ExploreOutput/PopularItems';

// Utils
import { popularItems } from '../utils/popularItems';

// Contexts imports
import { TvShowsContext } from '../store/TvShowsContext';
import { MoviesContext } from '../store/MoviesContext';

// Explore component
const Explore = ({ navigation }) => {
	// Initialize the contextes
	const tvshowsContext = useContext(TvShowsContext);
	const moviesContext = useContext(MoviesContext);

	// Destructuring the length of the movies & tvshows
	const [length1, length2] = [
		moviesContext.movies.length,
		tvshowsContext.tvshows.length,
	];

	if (length1 !== 0 && length2 !== 0) {
		const popularMovies = popularItems(moviesContext.movies);
		const popularTvshows = popularItems(tvshowsContext.tvshows);

		return (
			<View style={styles.container}>
				<Logo size={55} />
				{/* Popular movies container */}
				<View>
					<View style={styles.popularItems}>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>Top 5 Popular movies</Text>
							<ExploreButton isMovies />
						</View>
						<PopularItems items={popularMovies} isMovies />
					</View>
				</View>
				{/* Popular tv shows container */}
				<View>
					<View style={styles.popularItems}>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>Top 5 Popular Tv shows</Text>
							<ExploreButton />
						</View>
						<PopularItems items={popularTvshows} />
					</View>
				</View>
			</View>
		);
	}
};

// Explore StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: '20%',
		paddingHorizontal: 20,
		gap: 10,
	},
	popularItems: {
		justifyContent: 'center',
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'merriWeatherSans',
		color: COLORS.onBackground1,
		fontSize: 18,
		marginVertical: 15,
	},
});

export default Explore;
