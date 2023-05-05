// RN Components/API imports
import { View, Text, StyleSheet } from 'react-native';

// Constatns
import { COLORS } from '../../constants/colors';

// Logo component
const Logo = ({ size }) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<Text style={[styles.logo, { fontSize: size }]}>Movi</Text>
			<Text
				style={[styles.logo, { fontSize: size }, { color: COLORS.primary }]}>
				X+
			</Text>
		</View>
	);
};

// Logo StyleSheet
const styles = StyleSheet.create({
	logo: {
		fontFamily: 'righteous',
		color: COLORS.onBackground1,
	},
});

export default Logo;
