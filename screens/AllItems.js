// Hooks imports
import { useState } from 'react';

// RN core components & API imports
import { StyleSheet, View } from 'react-native';

// Custom components imports
import Input from '../components/AllItemsOutput/Input';
import ItemsList from '../components/AllItemsOutput/ItemsList';

// AllItems component
const AllItems = ({ route }) => {
	// Search value state
	const [value, setValue] = useState('');

	// AllItems handlers
	const handleChangeText = t => setValue(t);

	const handleSearch = () => {
		console.log(value);
	};

	return (
		<View style={styles.container}>
			{/* Input field */}
			<Input
				inputConfigurations={{
					placeholder: 'Search',
					value: value,
					placeholderTextColor: '#000',
					onChangeText: handleChangeText,
				}}
				onPress={handleSearch}
			/>
			<View style={{ paddingBottom: '50%', paddingTop: '10%' }}>
				{/* Items list */}
				<ItemsList isMovies={route.params.isMovies} />
			</View>
		</View>
	);
};

// AllItems StyleSheet
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: '5%',
	},
});

export default AllItems;
