// RN core components & API imports
import { TextInput, StyleSheet, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Constants
import { COLORS } from '../../constants/colors';

// Input Component
const Input = ({ inputConfigurations, onPress }) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput {...inputConfigurations} style={styles.input} />
			<Pressable onPress={onPress}>
				<Ionicons
					name='search-outline'
					size={24}
					color={COLORS.background}
					style={styles.icon}
				/>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: '#f2f2f2',
		borderRadius: 30,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	input: {
		flex: 1,
		color: COLORS.background,
		fontFamily: 'merriWeatherSans',
		textAlign: 'left',
	},
	icon: {
		marginLeft: 10,
	},
});

export default Input;
