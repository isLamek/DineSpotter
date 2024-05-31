import React from "react";
import {Text, StyleSheet, View, Pressable, TouchableOpacity} from "react-native";
import { FontFamily, Color, Border, FontSize } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const MainMenu = () => {

    const navigation = useNavigation();
  	
  	return (
    		<View style={styles.mainMenu}>
      			<View style={styles.frame}>
        				<Text style={[styles.letsGetYou, styles.letsGetYouTypo]}>{`Let’s Get  You A Place
          					To Go Out To Eat....`}</Text>
      			</View>
      			<TouchableOpacity style={[styles.setLocationWrapper, styles.locationWrapperSpaceBlock]} activeOpacity={0.3} onPress={()=>[navigation.navigate("LocationInput")]}>
        				<Text style={[styles.setLocation, styles.letsGetYouTypo]}>Set             Location</Text>
      			</TouchableOpacity>
      			<TouchableOpacity style={[styles.useCurrentLocationWrapper, styles.locationWrapperSpaceBlock]} activeOpacity={0.4} onPress={()=>[navigation.navigate("DistanceInput")]}>
        				<Text style={[styles.setLocation, styles.letsGetYouTypo]}>Use Current Location</Text>
      			</TouchableOpacity>
    		</View>);
};

const styles = StyleSheet.create({
  	letsGetYouTypo: {
    		textAlign: "center",
    		fontFamily: FontFamily.gloryExtraBold,
    		fontWeight: "800",
    		alignSelf: "stretch"
  	},
  	locationWrapperSpaceBlock: {
    		paddingVertical: 0,
    		paddingHorizontal: 45,
    		alignItems: "flex-end",
    		width: 328,
    		backgroundColor: Color.colorGray_100,
    		borderRadius: Border.br_xl,
    		left: 16,
    		position: "absolute"
  	},
  	letsGetYou: {
    		fontSize: 40,
    		color: "#161617"
  	},
  	frame: {
    		top: 22,
    		left: 13,
    		width: 334,
    		alignItems: "center",
    		justifyContent: "flex-end",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	setLocation: {
    		fontSize: FontSize.size_13xl,
    		color: Color.colorSkyblue
  	},
  	setLocationWrapper: {
    		top: 543
  	},
  	useCurrentLocationWrapper: {
    		top: 431
  	},
  	mainMenu: {
    		backgroundColor: Color.colorSkyblue,
    		flex: 1,
    		width: "100%",
    		height: 800,
    		overflow: "hidden"
  	}
});

export default MainMenu;
