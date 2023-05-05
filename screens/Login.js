// RN core components & API imports
import { View, Text, Image, StyleSheet } from 'react-native';

// Custom components imports
import Logo from '../components/generics/Logo';
import LoginButton from './../components/LoginOutput/LoginButton';

// Constants
import { COLORS } from '../constants/colors';

// Login component
const Login = ({ navigation }) => {
	// Login Handlers
	const handlePress = () => {
		navigation.navigate('BottomTab');
	};

	return (
		<View style={styles.container}>
			{/* Logo */}
			<Logo size={75} />
			{/* Welcome */}
			<View style={{ alignItems: 'center', gap: 3 }}>
				<Text style={[styles.text, styles.greeting]}>Hello Stranger</Text>
				<Image
					source={require('../assets/images/avatar.png')}
					style={{ width: 150, height: 150 }}
				/>
				<Text style={[styles.text]}>
					Please log in to continue {'\n'} to the awesomness
				</Text>
			</View>
			{/* Buttons */}
			<View>
				<LoginButton
					bgColor={COLORS.facebook}
					onPress={handlePress}
					provider='facebook'
				/>
				<LoginButton
					bgColor={COLORS.google}
					onPress={handlePress}
					provider='google'
				/>
			</View>
		</View>
	);
};

// Login StyleSheet
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 50,
	},
	text: {
		fontFamily: 'merriWeatherSans',
		textAlign: 'center',
		color: COLORS.onBackground2,
	},
	greeting: {
		fontSize: 20,
		color: COLORS.onBackground1,
	},
});

export default Login;
