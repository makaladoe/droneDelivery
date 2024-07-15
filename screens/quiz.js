import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet ,Text , TextInput, TouchableOpacity, View  , Image , FlatList} from 'react-native';
import LocationComponent from '../location';
import App1 from '../Orders/mainOrders.js';
import Appq from '../Orders/mainOrders.js';
import MultipleImages from '../Orders/popularOrders.js';
import OrderHistory from '../Orders/orderHistory.js';
import MainNavigation from './menu.js';
import MenuIcon from './menu.js';
import Appm from './menu.js';
import SideNavigation from './menu.js';
import SideScreen from './menu.js';
import ReceiptGenerator from '../Orders/receipts.js';
import DisReceipt from './receiptScreen.js';



const  Quiz = ( {navigation})  => {
	return (
		<ScrollView>
		<View  style = {styles.container}>
			<View style = {styles.top}>

				<Text  style={styles.welcomeMessage}>Get Instant delivery  </Text>
				<Text  style={styles.welcomeMessage}>at your door step  </Text>
				<Text  style={styles.welcomeMessage}>With just a   </Text>
				<Text  style={styles.welcomeMessage}>Click </Text>
				

			</View>
			
			<View  style = {styles.bottom}>
				<TouchableOpacity onPress={() => navigation.navigate("MainOrders")}   style= {styles.button}>
					<Text  style = { styles.buttonText}> Order Now </Text>
				</TouchableOpacity>
				
				<TouchableOpacity  onPress={() => navigation.navigate("Home")}  style= {styles.button}>
					<Text  style = { styles.buttonText}> Home </Text>
				</TouchableOpacity>
				
				
	
			</View>
			<View>
				<Text  style = {styles.popular}>Popular Deliveries</Text>
				<MultipleImages/>
				
			</View>
			


			</View>
			
		
		</ScrollView>
	);
};



export default Quiz;

const styles = StyleSheet.create({
container: {
	padding: 12,
	height: "100%",

},
top: {
	marginVertical: 16,

},
options: {
	marginVertical: 16,
	flex: 1,
},
bottom: {
	
	marginBottom: 10,
	paddingVertical: 16,
	justifyContent: "space-between",
	flexDirection: 'row',
	

	

},
button : {
	
	backgroundColor: '#184E77',
	padding: 12,
	paddingHorizontal:16,
	borderRadius:16,
	marginBottom : 30,

},
buttonText: {
	fontSize : 18,
	fontWeight: '600',
	color: 'white',
},
question: {
	fontSize : 28,

},

option : {
	fontSize : 18,
	fontWeight: 500,
	color: 'white'

},
optionButoon : {
	paddingVertical:12,
	marginVertical: 6,
	backgroundColor :'#34A0A4',
	paddingHorizontal: 12,
	borderRadius:12,

},
welcomeMessage : {
	fontSize : 30,
	
},
location : {
	fontSize: 24,
    fontWeight: 'bold',
},
popular : {
	fontSize: 24,
    fontWeight: 'bold',
}


});