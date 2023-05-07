// RN core components & API imports
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// TextBox component
const TextBox = ({ children, txtColor, maxHeight }) => (
	<View style={[styles.scrollContainer, { maxHeight: maxHeight }]}>
		<ScrollView>
			<Text style={[styles.text, { color: txtColor }]}>{children}</Text>
		</ScrollView>
	</View>
);

// TextBox StyleSheet
const styles = StyleSheet.create({
	scrollContainer: {
		padding: '3%',
		maxHeight: 200,
		borderRadius: 5,
		borderColor: '#453f4a',
		borderWidth: 1,
	},
	text: {
		fontSize: 15,
	},
});

export default TextBox;
