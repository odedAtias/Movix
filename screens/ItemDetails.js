// RN core components & API imports
import { StyleSheet, Text, View } from 'react-native';

// ItemDetails component
const ItemDetails = ({ route }) => {
	console.log(route.params);
	return (
		<View>
			<Text>ItemDetails</Text>
		</View>
	);
};

// ItemDetails StyleSheet
const styles = StyleSheet.create({});

export default ItemDetails;
