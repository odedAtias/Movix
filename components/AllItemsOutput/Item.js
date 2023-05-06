// Hooks imports
import { useNavigation } from '@react-navigation/native';

// RN Components/API imports
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

// Constants
import { COLORS } from '../../constants/colors';
import { averageStyle } from '../../utils/average';
import { displayGenres } from './../../utils/genres';

// Item component
const Item = ({ item, isMovie }) => {
	// Navigation intialize
	const navigation = useNavigation();

	// Item handlers
	const handlePress = () =>
		navigation.navigate('ItemDetails', { item: item, isMovie: isMovie });

	return (
		<Pressable style={styles.container} onPress={handlePress}>
			{/* Left side - Image */}
			<View>
				<Image
					source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
					style={styles.image}
				/>
			</View>
			<View style={styles.details}>
				<Text style={styles.title}>{isMovie ? item.title : item.name}</Text>
				<Text style={styles.genres}>{displayGenres(item.genre_ids)}</Text>
				<Text
					style={[{ color: averageStyle(item.vote_average) }, styles.average]}>
					Total average : {item.vote_average} / 10
				</Text>
			</View>
		</Pressable>
	);
};

// Item StyleSheet
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingHorizontal: '5%',
		paddingVertical: '3%',
		borderColor: '#3e3e42',
		borderWidth: 1,
		marginBottom: 25,
		borderRadius: 10,
	},
	details: {
		justifyContent: 'space-between',
	},
	image: {
		width: 100,
		height: 160,
		resizeMode: 'contain',
		marginRight: '10%',
	},
	title: {
		fontFamily: 'anton',
		fontSize: 18,
		maxWidth: 170,
		color: COLORS.onBackground1,
	},
	genres: {
		color: COLORS.primaryVariant,
		fontFamily: 'anton',
		fontSize: 16,
		maxWidth: 170,
	},
	average: {
		fontFamily: 'anton',
		fontSize: 14,
	},
});

export default Item;
