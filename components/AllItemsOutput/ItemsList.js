// Hooks imports
import { useContext } from 'react';

// RN core components & API imports
import { FlatList } from 'react-native';

// Custom components imports
import Item from './Item';

// Contexts imports
import { MoviesContext } from './../../store/MoviesContext';
import { TvShowsContext } from './../../store/TvShowsContext';

// ItemList component
const ItemsList = ({ items, isMovies }) => {
	// Create the context by the type of the list
	const context = isMovies
		? useContext(MoviesContext)
		: useContext(TvShowsContext);

	const sortedItems = items =>
		items.sort((a, b) => b.vote_average - a.vote_average);

	return (
		<FlatList
			data={sortedItems(items)}
			showsHorizontalScrollIndicator={false}
			renderItem={itemData => <Item item={itemData.item} isMovie={isMovies} />}
			keyExtractor={item => item.id}
		/>
	);
};

export default ItemsList;
