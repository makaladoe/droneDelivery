import React from 'react';
import {Image , StyleSheet ,Text , Touchable, TouchableOpacity, View } from 'react-native';
import Title from '../components/title';
import Receipt from '../Orders/receipts';


const  DisReceipt = ({navigation})  => {
	return (
		<View style = {styles.container}>	
		

		</View>
	);
}

export default DisReceipt;

const styles = StyleSheet.create({

	banner: {
		height: 300,
		width: 300,
	},
	bannerContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex : 1,

	},
	container: {
		paddingTop : 40,
		paddingHorizontal: 20,
		height: '100%',
	},
	button : {
		width:"110%",
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: '#184E77',
		padding: 20,
		borderRadius:16,
		marginBottom : 30,
		paddingBottom : 20,
		alignItems: 'center',
		

	},
	buttonText: {
		fontSize : 24,
		fontWeight: '600',
		color: 'white',
		textAlign: 'center'
	},
	welcText : {
		fontSize : 24,
		fontWeight: '600'
	}
});