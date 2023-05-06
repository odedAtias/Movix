// RN Components/API imports
import { View, FlatList, StyleSheet } from 'react-native';

// Custom components imports
import PopularItem from './PopularItem';

// PopularItems component
const PopularItems = ({ items, isMovies }) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={items}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={itemData => (
					<PopularItem item={itemData.item} isMovie={isMovies} />
				)}
				keyExtractor={item => item.id}
			/>
		</View>
	);
};

// PopularItems StyleSheet
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
});

export default PopularItems;
