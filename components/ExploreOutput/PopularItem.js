// Hooks imports
import { useNavigation } from '@react-navigation/native';

// RN Components/API imports
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

// Constants
import { COLORS } from '../../constants/colors';
import { displayGenres } from '../../utils/genres';

// PopularItem components
const PopularItem = ({ item, isMovie }) => {
	const navigation = useNavigation();

	return (
		<View>
			{/* Item Image */}
			<View style={styles.container}>
				<Pressable
					onPress={() =>
						navigation.navigate('ItemDetails', { isMovie: isMovie, item: item })
					}>
					<Image
						source={{
							uri: `https://image.tmdb.org/t/p/w1280${item.poster_path}`,
						}}
						style={styles.contentContainer}
					/>
				</Pressable>
			</View>
			{/* Item details */}
			<View style={styles.detailsContainer}>
				<Text style={[styles.text, styles.title]}>
					{isMovie ? item.original_title : item.original_name}
				</Text>
				<Text style={[styles.text, styles.subTitle]}>
					{displayGenres(item.genre_ids)}
				</Text>
			</View>
		</View>
	);
};

// PopularItem StyleSheet
const styles = StyleSheet.create({
	container: {
		height: 150,
		width: 250,
		marginRight: 20,
		borderRadius: 20,
	},
	contentContainer: {
		width: '100%',
		height: '100%',
		resizeMode: 'stretch',
		borderRadius: 20,
	},
	detailsContainer: {
		gap: 10,
	},
	text: {
		fontFamily: 'anton',
		maxWidth: 260,
	},
	title: {
		marginTop: 5,
		color: COLORS.onBackground1,
		fontSize: 15,
		maxHeight: 200,
	},
	subTitle: {
		color: COLORS.onBackground2,
		fontSize: 13,
	},
});

export default PopularItem;
