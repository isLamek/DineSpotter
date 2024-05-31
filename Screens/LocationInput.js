import React from "react";
import {StyleSheet, View, Text, TextInput, Pressable, TouchableOpacity} from "react-native";
import { FontFamily, FontSize, Color } from "./GlobalStyles";

const LocationInput = ({navigation}) => {
  	
  	return (
    		<View style={styles.locationInput}>
      			<View style={styles.locationInputChild} />
      			<Text style={[styles.setLocation, styles.setLocationTypo]}>SET  LOCATION</Text>
      			<TextInput style={styles.extra} placeholder="Search" placeholderTextColor="rgba(60, 60, 67, 0.6)" />
      			<Text style={[styles.suggestions, styles.setLocationTypo]}>Suggestions</Text>
      			<TouchableOpacity style={[styles.rectangleParent, styles.groupChildLayout]} activeOpacity={0.3} onPress={()=>{navigation.navigate("Filters")}}>
        				<View style={[styles.groupChild, styles.groupChildLayout]} />
        				<Text style={styles.next}>Next</Text>
      			</TouchableOpacity>
    		</View>);
};

const styles = StyleSheet.create({
  	setLocationTypo: {
    		textAlign: "left",
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900",
    		letterSpacing: 0,
    		fontSize: FontSize.size_5xl,
    		color: Color.colorBlack,
    		position: "absolute"
  	},
  	groupChildLayout: {
    		height: 52,
    		width: 163,
    		position: "absolute"
  	},
  	locationInputChild: {
    		top: 195,
    		left: 39,
    		width: 285,
    		height: 253,
    		backgroundColor: Color.colorGainsboro,
    		position: "absolute"
  	},
  	setLocation: {
    		top: 41,
    		left: 102,
    		lineHeight: 45
  	},
  	extra: {
    		top: 86,
    		left: 7,
    		borderRadius: 25,
    		backgroundColor: "#fff",
    		width: 343,
    		height: 45,
    		fontFamily: FontFamily.abelRegular,
    		fontSize: 17,
    		position: "absolute"
  	},
  	suggestions: {
    		top: 291,
    		left: 108,
    		lineHeight: 30
  	},
  	groupChild: {
    		top: 0,
    		left: 0,
    		borderRadius: 5,
    		backgroundColor: Color.colorGainsboro
  	},
  	next: {
    		top: 8,
    		left: 50,
    		fontSize: 32,
    		fontWeight: "800",
    		fontFamily: FontFamily.gloryExtraBold,
    		textAlign: "center",
    		color: Color.colorBlack,
    		position: "absolute"
  	},
  	rectangleParent: {
    		top: 685,
    		left: 100
  	},
  	locationInput: {
    		backgroundColor: "#75ccd8",
    		flex: 1,
    		width: "100%",
    		height: 800,
    		overflow: "hidden"
  	}
});

export default LocationInput;
