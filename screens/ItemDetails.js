// Hooks imports
import { useContext, useLayoutEffect, useState } from 'react';

// RN core components & API imports
import { StyleSheet, Text, View } from 'react-native';

// Custom components imports
import IconButton from '../components/generics/IconButton';

// Contexts imports
import { TvShowsContext } from '../store/TvShowsContext';
import { MoviesContext } from './../store/MoviesContext';

// Constants
import { COLORS } from '../constants/colors';

// ItemDetails component
const ItemDetails = ({ navigation, route }) => {
	// dynamically context loading
	const context = route.params.isMovie
		? useContext(MoviesContext)
		: useContext(TvShowsContext);

	const { isMovie, item } = route.params;

	const isFavorite = context.favorites.includes(item);

	const handleChangeFavoriteStatus = () => {
		let favorites = [...context.favorites];
		if (!isFavorite) {
			favorites.push(item);
		} else {
			let index = favorites.findIndex(i => i.id === item.id);
			if (index !== -1) {
				favorites.splice(index, 1);
			}
		}
		context.setFavorites(favorites);
	};

	// Loading dynamically the screen options when th component mounts
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					onPress={handleChangeFavoriteStatus}
					icon={isFavorite ? 'star' : 'star-outline'}
					color={COLORS.yellow}
				/>
			),
		});
	}, [isFavorite]);

	return (
		<View>
			<Text>ItemDetails</Text>
		</View>
	);
};

// ItemDetails StyleSheet
const styles = StyleSheet.create({});

export default ItemDetails;
