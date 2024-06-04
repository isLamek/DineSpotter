
import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { Border, Color, FontFamily, FontSize } from "./GlobalStyles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Result = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { restaurant } = route.params;
  const [currentRestaurant, setCurrentRestaurant] = useState(restaurant);

  const fetchAnotherRestaurant = async () => {
    try {
      const genAI = new GoogleGenerativeAI("AIzaSyCi2fGj9d9V9YFdoQPGfMf1YyLc4ezwj_g");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
        Recommend another restaurant excluding the one previously recommended:
        Previous Recommendation: ${currentRestaurant}
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const newRestaurant = response.text();
      setCurrentRestaurant(newRestaurant);
    } catch (error) {
      console.error('Error fetching another restaurant recommendation:', error);
    }
  };

  const handleDirectionsPress = () => {
    const location = currentRestaurant.location; // Replace with actual location data if available
    const url = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.result}>
      <View style={styles.aiResponseParent}>
        <Text style={styles.aiResponse}>{currentRestaurant}</Text>
        <View style={styles.frameChild} />
        <TouchableOpacity style={[styles.rectangleParent, styles.groupChildLayout]} activeOpacity={0.2} onPress={fetchAnotherRestaurant}>
          <View style={[styles.groupChild, styles.groupBorder]} />
          <Text style={[styles.retry, styles.retryTypo]}>Retry</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.rectangleGroup, styles.groupLayout]} activeOpacity={0.2} onPress={handleDirectionsPress}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.directions, styles.retryTypo]}>Directions</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.restaurantName, styles.retryTypo]}>{currentRestaurant.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  result: {
    flex: 1,
  },

  restaurantImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#d9d9d9',
  },
    groupChildLayout: {
        height: 33,
        width: 101,
        position: "absolute"
    },
    groupBorder: {
        borderRadius: Border.br_mini,
        left: 0,
        top: 0,
        backgroundColor: Color.colorGainsboro,
        borderWidth: 3,
        borderColor: Color.colorWhite,
        borderStyle: "solid"
    },
    retryTypo: {
        height: 29,
        fontSize: FontSize.size_5xl,
        textAlign: "left",
        position: "absolute"
    },
    groupLayout: {
        width: 170,
        height: 33,
        position: "absolute"
    },
    aiResponse: {
        top: 176,
        left: 18,
        fontSize: 20,
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
        height: 396,
        width: 264,
        textAlign: "left",
        color: Color.colorBlack,
        position: "absolute"
    },
    frameChild: {
        marginLeft: -132,
        top: 17,
        borderRadius: 50,
        height: 131,
        backgroundColor: Color.colorGainsboro,
        width: 264,
        borderWidth: 3,
        borderColor: Color.colorWhite,
        borderStyle: "solid",
        left: "50%",
        position: "absolute"
    },
    groupChild: {
        height: 33,
        width: 101,
        position: "absolute"
    },
    retry: {
        top: 2,
        left: 19,
        width: 75,
        fontFamily: FontFamily.interRegular,
        height: 29,
        fontSize: FontSize.size_5xl,
        color: Color.colorBlack
    },
    rectangleParent: {
        left: 11,
        top: 647
    },
    groupItem: {
        borderRadius: Border.br_mini,
        left: 0,
        top: 0,
        backgroundColor: Color.colorGainsboro,
        borderWidth: 3,
        borderColor: Color.colorWhite,
        borderStyle: "solid"
    },
    directions: {
        left: 30,
        width: 126,
        fontFamily: FontFamily.interRegular,
        height: 29,
        fontSize: FontSize.size_5xl,
        color: Color.colorBlack,
        top: 0
    },
    rectangleGroup: {
        left: 122,
        top: 647
    },
    aiResponseParent: {
        marginLeft: -150,
        top: 88,
        borderRadius: 20,
        backgroundColor: "#75ccd8",
        width: 300,
        height: 689,
        borderWidth: 3,
        borderColor: Color.colorWhite,
        borderStyle: "solid",
        left: "50%",
        position: "absolute"
    },
    restaurantName: {
        marginLeft: -168,
        top: 49,
        fontWeight: "600",
        // fontFamily: FontFamily.interSemiBold,
        color: "#fff",
        width: 335,
        height: 29,
        fontSize: FontSize.size_5xl,
        left: "50%"
    },
    result: {
        backgroundColor: "#817e7e",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden"
    }
});

export default Result;
