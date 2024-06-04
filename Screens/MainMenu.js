import React from "react";
import { Text, StyleSheet, ScrollView, View, TouchableOpacity, Alert } from "react-native";
import { FontFamily, Color, Border, FontSize } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';


const MainMenu = () => {
  const navigation = useNavigation();

  const handleUseCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      
      console.log('Current Location:', location.coords.latitude, location.coords.longitude);
      
      
      navigation.navigate("DistanceInput", { latitude: location.coords.latitude, longitude: location.coords.longitude });
    } catch (error) {
      console.error('Error getting current location:', error);
    }
  };

  return (
    <View style={styles.mainMenu}>
      <Text style={[styles.letsGetYou, styles.letsGetYouTypo]}>Let’s Get You A Place To Go Out To Eat....</Text>
      <View style={styles.mainMenuChild} />
      <TouchableOpacity style={[styles.useCurrentLocationWrapper, styles.locationWrapperLayout]} activeOpacity={0.4} onPress={handleUseCurrentLocation}>
        <Text style={[styles.useCurrentLocation, styles.letsGetYouTypo]}>Use Current Location</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.setLocationWrapper, styles.locationWrapperLayout]} activeOpacity={0.3} onPress={() => { navigation.navigate("LocationInput") }}>
        <Text style={[styles.useCurrentLocation, styles.letsGetYouTypo]}>Set             Location</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  	letsGetYouTypo: {
			
    		textAlign: "center",
    		// fontFamily: FontFamily.gloryExtraBold,
    		fontWeight: "800",
    		position: "absolute"
  	},
  	locationWrapperLayout: {
    		height: 72,
    		width: 328,
    		backgroundColor: Color.colorGray_100,
    		borderRadius: Border.br_xl,
    		marginLeft: -164,
    		left: "50%",
    		position: "absolute"
  	},
  	letsGetYou: {
    		marginLeft: -167,
    		top: 29,
    		fontSize: 40,
    		color: "#161617",
    		width: 334,
    		height: 203,
    		left: "50%"
  	},
  	mainMenuChild: {
    		marginLeft: -320,
    		top: 391,
    		borderRadius: 500,
    		backgroundColor: "#fff",
    		width: 500,
    		height: 500,
    		left: "50%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	useCurrentLocation: {
    		top: 0,
    		left: 45,
    		fontSize: FontSize.size_13xl,
    		color: Color.colorSkyblue,
    		width: 238
  	},
  	useCurrentLocationWrapper: {
    		top: 519
  	},
  	setLocationWrapper: {
    		top: 641
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
