import { FontSize, Border, FontFamily, Color } from "./GlobalStyles";
import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

const DistanceInput = () => {
  const [distance, setDistance] = useState(5);
  const navigation = useNavigation();

  const handleIncrease = () => {
    setDistance(prevDistance => prevDistance + 5);
  };

  const handleDecrease = () => {
    setDistance(prevDistance => prevDistance - 5);
  };

  const handleNext = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Location permission denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // Record the entered distance and current location for later use
      console.log('Distance:', distance, 'km');
      console.log('Current Location:', location.coords.latitude, location.coords.longitude);

      // Navigate to the next screen
      navigation.navigate('Filters');
    } catch (error) {
      console.error('Error getting current location:', error);
    }
  };

  return (
    <ScrollView style={styles.distanceInput}>
      <View style={[styles.distanceInputChild, styles.distancePosition]} />
      <TouchableOpacity 
        style={styles.nextWrapper} 
        activeOpacity={0.3} 
        onPress={handleNext}
      >
        <Text style={styles.next}>Next</Text>
      </TouchableOpacity>
      <View style={[styles.rectangleParent, styles.distancePosition]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <TouchableOpacity 
          style={[styles.touchableopacity, styles.kmPosition]} 
          activeOpacity={0.2} 
          onPress={handleDecrease}
        >
          <Text style={[styles.text, styles.textTypo]}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.touchableopacity, styles.kmPosition]} 
          activeOpacity={0.2} 
          onPress={handleIncrease}
        >
          <Text style={[styles.text1, styles.textTypo]}>+</Text>
        </TouchableOpacity>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.km, styles.kmTypo]}>km</Text>
        <Text style={[styles.text2, styles.kmTypo]}>{distance}</Text>
      </View>
      <Text style={[styles.distance, styles.textTypo]}>Distance</Text>
    </ScrollView>
  );
};

DistanceInput.navigationOptions = {
  headerShown: false,
};


const styles = StyleSheet.create({
  	distancePosition: {
    		left: "50%",
    		position: "absolute"
  	},
  	frameLayout: {
    		height: 33,
    		top: 67,
    		borderRadius: Border.br_8xs,
    		position: "absolute"
  	},
  	kmPosition: {
    		top: "50%",
    		left: "50%"
  	},
  	textTypo: {
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900",
    		color: Color.colorWhite,
    		textAlign: "center"
  	},
  	kmTypo: {
    		fontSize: FontSize.size_xl,
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900",
    		textAlign: "center",
    		position: "absolute"
  	},
  	distanceInputChild: {
    		marginLeft: -272,
    		top: -149,
    		borderRadius: 400,
    		width: 400,
    		height: 400,
    		backgroundColor: Color.colorBlack,
    		overflow: "hidden"
  	},
  	next: {
    		top: 8,
    		left: 0,
    		fontSize: 32,
    		fontWeight: "800",
    		fontFamily: FontFamily.gloryExtraBold,
    		textAlign: "center",
    		color: Color.colorBlack,
    		width: 163,
    		position: "absolute"
  	},
  	nextWrapper: {
    		marginLeft: -83,
    		top: 669,
    		height: 52,
    		width: 163,
    		borderRadius: Border.br_8xs,
    		backgroundColor: Color.colorGainsboro,
    		left: "50%",
    		position: "absolute"
  	},
  	frameChild: {
    		left: 96,
    		width: 56,
    		backgroundColor: Color.colorBlack
  	},
  	text: {
    		marginLeft: -123.5,
    		width: 50,
    		height: 50,
    		color: Color.colorWhite,
    		fontSize: FontSize.size_29xl,
    		marginTop: -34,
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900"
  	},
  	touchableopacity: {
    		top: "50%",
    		position: "absolute"
  	},
  	text1: {
    		marginLeft: -7.5,
    		color: Color.colorWhite,
    		fontSize: FontSize.size_29xl,
    		marginTop: -34,
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900"
  	},
  	frameItem: {
    		left: 221,
    		width: 49,
    		backgroundColor: Color.colorGainsboro,
    		top: 67
  	},
  	km: {
    		marginTop: -12,
    		marginLeft: 60.5,
    		top: "50%",
    		left: "50%",
    		color: Color.colorBlack,
    		fontSize: FontSize.size_xl
  	},
  	text2: {
    		top: 72,
    		left: 117,
    		color: Color.colorWhite
  	},
  	rectangleParent: {
    		marginLeft: -170,
    		top: 280,
    		borderRadius: 50,
    		backgroundColor: "#313135",
    		width: 339,
    		height: 168,
    		overflow: "hidden"
  	},
  	distance: {
    		marginLeft: -143,
    		top: 66,
    		fontSize: 40,
    		color: Color.colorWhite,
    		left: "50%",
    		position: "absolute"
  	},
  	distanceInput: {
    		backgroundColor: "#75ccd8",
    		flex: 1,
    		width: "100%",
    		height: 800,
    		overflow: "hidden"
  	}
});

export default DistanceInput;
