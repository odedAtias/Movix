// RN core components & API imports
import { StyleSheet, Pressable } from 'react-native';

// Ionicons
import { Ionicons } from '@expo/vector-icons';

// IconButton component
const IconButton = ({ icon, color, onPress }) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => (pressed ? styles.pressed : null)}>
			<Ionicons name={icon} size={24} color={color} />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.7,
	},
});

export default IconButton;
