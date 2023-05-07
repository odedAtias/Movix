// Hooks imports
import { useContext, useState } from 'react';

// RN core components & API imports
import { StyleSheet, View } from 'react-native';

// Custom components imports
import Input from '../components/AllItemsOutput/Input';
import ItemsList from '../components/AllItemsOutput/ItemsList';

// Contexts imports
import { MoviesContext } from '../store/MoviesContext';
import { TvShowsContext } from './../store/TvShowsContext';

// Utils
import { getItems } from '../utils/http';

// Search APIS
const MOVIE_SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=f214b16171fc56615485b80f1d188763&query="';
const TV_SEARCH_API =
	'https://api.themoviedb.org/3/search/tv?api_key=f214b16171fc56615485b80f1d188763&query="';

// AllItems component
const AllItems = ({ route }) => {
	const isMovies = route.params.isMovies;

	const context = isMovies
		? useContext(MoviesContext)
		: useContext(TvShowsContext);

	// Search value state
	const [value, setValue] = useState('');
	const [items, setItems] = useState(
		isMovies ? context.movies : context.tvshows
	);

	// AllItems handlers
	const handleChangeText = t => setValue(t);

	const handleSearch = async () => {
		if (value && value !== '') {
			let data = '';
			if (isMovies) data = await getItems(MOVIE_SEARCH_API + value);
			else data = await getItems(TV_SEARCH_API + value);
			setItems(data.results);
		}
	};

	return (
		<View style={styles.container}>
			{/* Input field */}
			<Input
				inputConfigurations={{
					placeholder: 'Search',
					value: value,
					placeholderTextColor: '#000',
					onChangeText: handleChangeText,
				}}
				onPress={handleSearch}
			/>
			<View style={{ paddingBottom: '50%', paddingTop: '10%' }}>
				{/* Items list */}
				<ItemsList items={items} isMovies={isMovies} />
			</View>
		</View>
	);
};

// AllItems StyleSheet
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: '5%',
	},
});

export default AllItems;
