// RN Components/API imports
import { StyleSheet, Text, Pressable, Image, Dimensions } from 'react-native';

// Taking the width of the screen from Dimensions API
const { width } = Dimensions.get('window');

// Constants
import { BUTTONS } from '../../constants/buttons';

// LoginButton component
const LoginButton = ({ bgColor, onPress, provider }) => {
	return (
		<Pressable
			style={({ pressed }) =>
				pressed
					? [styles.button, { backgroundColor: bgColor }, styles.pressed]
					: [styles.button, { backgroundColor: bgColor }]
			}
			onPress={onPress}>
			<Image
				source={provider === 'facebook' ? BUTTONS.facebook : BUTTONS.google}
				style={styles.icon}
			/>
			<Text style={styles.text}>Sign in with {provider}</Text>
		</Pressable>
	);
};

// LoginButton StyleSheet
const styles = StyleSheet.create({
	button: {
		width: width * 0.7,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
		borderRadius: 30,
		overflow: 'hidden',
		marginBottom: 20,
	},
	icon: {
		width: 25,
		height: 25,
		borderRadius: 2,
		resizeMode: 'center',
		marginRight: 15,
	},
	text: {
		fontSize: 18,
		fontFamily: 'merriWeatherSans',
		color: '#fff',
	},
	pressed: {
		opacity: 0.7,
	},
});

export default LoginButton;
