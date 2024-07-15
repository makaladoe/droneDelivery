import React from 'react';
import {Image, StyleSheet ,Text , Touchable, TouchableOpacity, View } from 'react-native';


const  Result  = ( {navigation})  => {
	return (
		<View>
			<View>
				<Text>Result</Text>
			</View>
			
			<View>
				<TouchableOpacity onPress={()=> navigation.navigate("Home")}>
					<Text>Home </Text>
				</TouchableOpacity>
			</View>

		</View>
		
	);
}

export default Result;

const styles = StyleSheet.create({
	banner: {
		height: 300,
		width: 300,
	},
	bannerContainer: {
		justifyContent: 'center',
		alignItems: 'center',

	},

});