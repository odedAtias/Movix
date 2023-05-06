// Hooks imports
import { useNavigation } from '@react-navigation/native';

// RN core components & API imports
import { StyleSheet, Text, Pressable } from 'react-native';

// Constants
import { COLORS } from '../../constants/colors';

// ExploreButton component
const ExploreButton = ({ isMovies }) => {
	// Navigation intialize
	const navigation = useNavigation();

	return (
		<Pressable
			onPress={() =>
				navigation.navigate('AllItems', {
					isMovies: isMovies,
				})
			}>
			<Text style={styles.explore}>Explore more</Text>
		</Pressable>
	);
};

// ExploreButton StyleSheet
const styles = StyleSheet.create({
	explore: {
		fontFamily: 'merriWeatherSans',
		color: COLORS.primary,
		fontSize: 16,
		marginVertical: 15,
	},
});

export default ExploreButton;
