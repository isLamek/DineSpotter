import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color } from "./GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const LocationInput = () => {
  const [city, setCity] = useState('');
  const navigation = useNavigation();

  const handleTextChange = (text) => {
    setCity(text);
  };

  const handleNextPress = () => {
    // Use the city state here as needed before navigating
    console.log('Entered City:', city);
    navigation.navigate('Filters', { city });
  };

  return (
    <View style={styles.locationInput}>
      <View style={styles.locationInputChild} />
      <Text style={[styles.setLocation, styles.nextPosition]}>SET LOCATION</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.extraPosition]} />
        <TextInput
          style={[styles.extra, styles.extraPosition]}
          placeholder="Enter City"
          placeholderTextColor="rgba(60, 60, 67, 0.6)"
          value={city}
          onChangeText={handleTextChange}
        />
      </View>
      <TouchableOpacity
        style={[styles.rectangleGroup, styles.groupLayout]}
        activeOpacity={0.3}
        onPress={handleNextPress}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.next, styles.nextPosition]}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  	nextPosition: {
    		color: Color.colorBlack,
    		fontSize: FontSize.size_13xl,
    		left: "50%",
    		position: "absolute"
  	},
  	extraPosition: {
    		backgroundColor: Color.colorWhite,
    		top: 0,
    		height: 45,
    		left: "50%",
    		position: "absolute"
  	},
  	groupLayout: {
    		height: 52,
    		width: 163,
    		left: "50%",
    		position: "absolute"
  	},
  	locationInputChild: {
    		marginLeft: -467.9,
    		top: 373,
    		borderRadius: 50,
    		backgroundColor: "#313135",
    		width: 500,
    		height: 392,
    		transform: [
      			{
        				rotate: "-35deg"
      			}
    		],
    		left: "50%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	setLocation: {
    		marginLeft: -120,
    		top: 41,
    		letterSpacing: 0,
    		lineHeight: 45,
    		fontWeight: "900",
    		fontFamily: FontFamily.interBlack,
    		textAlign: "left"
  	},
  	groupChild: {
    		borderRadius: 25,
    		width: 328,
    		marginLeft: -164,
    		backgroundColor: Color.colorWhite
  	},
  	extra: {
    		marginLeft: -145,
    		width: 288,
    		fontFamily: FontFamily.abelRegular,
    		fontSize: 17
  	},
  	rectangleParent: {
    		top: 123,
    		height: 45,
    		width: 328,
    		marginLeft: -164,
    		left: "50%",
    		position: "absolute"
  	},
  	groupItem: {
    		marginLeft: -81.5,
    		borderRadius: 5,
    		backgroundColor: "#d9d9d9",
    		top: 0,
    		width: 163
  	},
  	next: {
    		marginLeft: -31.5,
    		top: 8,
    		fontWeight: "800",
    		fontFamily: FontFamily.gloryExtraBold,
    		textAlign: "center"
  	},
  	rectangleGroup: {
    		marginLeft: -82,
    		top: 216
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
