// Hooks imports
import { useContext, useLayoutEffect } from 'react';

// RN core components & API imports
import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';

// Custom components imports
import IconButton from '../components/generics/IconButton';
import TextBox from '../components/generics/TextBox';

// Contexts imports
import { TvShowsContext } from '../store/TvShowsContext';
import { MoviesContext } from './../store/MoviesContext';

// Constants
import { COLORS } from '../constants/colors';
import { displayGenres } from './../utils/genres';
import { averageStyle } from './../utils/average';

// ItemDetails component
const ItemDetails = ({ navigation, route }) => {
	// dynamically context loading
	const context = route.params.isMovie
		? useContext(MoviesContext)
		: useContext(TvShowsContext);

	const { isMovie, item } = route.params;

	const isFavorite = context.favorites.includes(item);

	const type = isMovie ? 'movie' : 'tv show';

	const handleChangeFavoriteStatus = () => {
		let favorites = [...context.favorites];
		if (!isFavorite) {
			favorites.push(item);
			Alert.alert(
				`New ${type} added`,
				`The ${type} ${
					type === 'movie' ? item.title : item.name
				} has been deleted to your favorites list.`,
				[
					{
						text: 'OK',
					},
				]
			);
		} else {
			let index = favorites.findIndex(i => i.id === item.id);
			if (index !== -1) {
				favorites.splice(index, 1);
				Alert.alert(
					`${type} deleted`,
					`The ${type} ${
						type === 'movie' ? item.title : item.name
					} has been deleted to your favorites list.`,
					[
						{
							text: 'OK',
						},
					]
				);
			}
		}
		context.setFavorites(favorites);
	};

	// Loading dynamically the screen options when th component mounts
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<View style={styles.headerRightContainer}>
					<IconButton
						onPress={handleChangeFavoriteStatus}
						icon={isFavorite ? 'star' : 'star-outline'}
						color={COLORS.onBackground1}
					/>
				</View>
			),
		});
	}, [isFavorite]);

	return (
		<View>
			{/* Cover image */}
			<View style={styles.imageContainer}>
				<Image
					source={{
						uri: `https://image.tmdb.org/t/p/w1280${item.poster_path}`,
					}}
					style={styles.image}
				/>
			</View>
			{/* Details */}
			<View style={styles.detailsContainer}>
				{/* Title */}
				<Text style={styles.title}>{isMovie ? item.title : item.name}</Text>
				{/* More details */}
				<View style={{ marginTop: 5 }}>
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text style={styles.details}>{displayGenres(item.genre_ids)}</Text>
						<Text style={styles.details}>
							{isMovie ? item.release_date : item.first_air_date}
						</Text>
					</View>
				</View>
				{/* Overview */}
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingVertical: 4,
					}}>
					<Text style={styles.headingText}>Overview</Text>
					<Text
						style={{
							color: averageStyle(item.vote_average),
							fontFamily: 'merriWeatherSans',
							fontSize: 16,
						}}>
						⭐ {item.vote_average} / 10
					</Text>
				</View>
				<TextBox txtColor={COLORS.onBackground1} maxHeight={200}>
					{item.overview}
				</TextBox>
			</View>
		</View>
	);
};

// ItemDetails StyleSheet
const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: '150%',
		opacity: 0.7,
		resizeMode: 'stretch',
	},
	headingText: {
		fontSize: 24,
		fontFamily: 'merriWeatherSans',
		color: COLORS.primary,
		marginBottom: 10,
	},

	imageContainer: {
		height: '40%',
		overflow: 'hidden',
		position: 'relative',
		marginBottom: 10,
	},
	detailsContainer: {
		paddingHorizontal: 10,
	},
	details: {
		color: COLORS.onBackground2,
		fontSize: 16,
		marginBottom: 10,
	},
	title: {
		fontSize: 26,
		color: COLORS.onBackground1,
		maxWidth: 300,
		fontFamily: 'merriWeatherSans',
		marginBottom: 10,
	},
	overviewContainer: {
		backgroundColor: COLORS.background2,
	},
});

export default ItemDetails;
