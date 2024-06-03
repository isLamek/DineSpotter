
// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity, Alert, Linking } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { Border, Color, FontFamily, FontSize } from "./GlobalStyles";
// import { GoogleGenerativeAI } from "@google/generative-ai";


// const apiKey = "AIzaSyDngam3xQfnkIva32Fb-0o4QMp9CF1puzc";
// const geminiApiKey = "AIzaSyDNs1TPxTUL3srzuqePmJwj44iwyQwcOuQ";

// const Result = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { filters } = route.params;
//   const [restaurant, setRestaurant] = useState(null);
//   const [aiResponse, setAiResponse] = useState('');
//   const [excludeRestaurant, setExcludeRestaurant] = useState('');

//   useEffect(() => {
//     fetchRestaurant();
//   }, []);

//   const fetchRestaurant = async () => {
//     try {
//       const location = filters.location
//         ? `${filters.location.latitude},${filters.location.longitude}`
//         : filters.city;

//       const response = await fetch(
//         `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${filters.distance * 1000}&type=restaurant&keyword=${filters.foodType}&key=${apiKey}`
//       );

//       const data = await response.json();

//       if (data.results.length > 0) {
//         const selectedRestaurant = data.results[0];
//         setRestaurant({
//           name: selectedRestaurant.name,
//           description: selectedRestaurant.vicinity,
//           image: selectedRestaurant.photos
//             ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${selectedRestaurant.photos[0].photo_reference}&key=${apiKey}`
//             : null,
//           location: selectedRestaurant.geometry.location,
//         });
//         getAIResponse(selectedRestaurant.name, selectedRestaurant.vicinity);
//       } else {
//         Alert.alert("No restaurants found", "Please try different filters.");
//       }
//     } catch (error) {
//       console.error("Error fetching restaurant:", error);
//       Alert.alert("Error", "Something went wrong while fetching restaurant data.");
//     }
//   };

//   const getAIResponse = async (name, vicinity) => {
//     try {
//       const genAI = new GoogleGenerativeAI(geminiApiKey);
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//       const prompt = `Recommend a restaurant based on the following filters: 
//       Restaurant Name: ${name}, 
//       Location: ${vicinity}, 
//       Other Criteria: ${filters.otherCriteria}`;

//       const result = await model.generateContent(prompt);
//       const response = await result.response;
//       const text = await response.text();
//       setAiResponse(text);
//     } catch (error) {
//       console.error("Error with AI response:", error);
//     }
//   };

//   const handleRetry = () => {
//     setExcludeRestaurant(restaurant.name);
//     fetchRestaurant();
//   };

//   const handleDirections = () => {
//     if (!restaurant) {
//       Alert.alert("No restaurant found", "Please try again.");
//       return;
//     }

//     const { location } = restaurant;
//     const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
//     Linking.openURL(url);
//   };

//   return (
//     <ScrollView style={styles.result}>
//       <View style={styles.aiResponseParent}>
//         <Text style={styles.aiResponse}>{aiResponse}</Text>
//         <View style={styles.frameChild} />
//         {restaurant && restaurant.image && (
//           <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />
//         )}
//         <TouchableOpacity style={[styles.rectangleParent, styles.groupChildLayout]} activeOpacity={0.2} onPress={handleRetry}>
//           <View style={[styles.groupChild, styles.groupBorder]} />
//           <Text style={[styles.retry, styles.retryTypo]}>Retry</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.rectangleGroup, styles.groupLayout]} activeOpacity={0.2} onPress={handleDirections}>
//           <View style={[styles.groupItem, styles.groupLayout]} />
//           <Text style={[styles.directions, styles.retryTypo]}>Directions</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={[styles.restaurantName, styles.retryTypo]}>{restaurant ? restaurant.name : "Restaurant Name"}</Text>
//     </ScrollView>
//   );
// };

import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity, Linking } from "react-native";
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
      const genAI = new GoogleGenerativeAI("AIzaSyBNNhlJk_B4KTOrtEYnko3XIZ7XiEXResI");
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
    <ScrollView style={styles.result}>
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
    </ScrollView>
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
        fontFamily: FontFamily.interSemiBold,
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
