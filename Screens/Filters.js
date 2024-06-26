import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Switch, View, ScrollView, TextInput } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Color, Border, FontSize } from "./GlobalStyles";

const Filters = () => {
  const [openNow, setOpenNow] = useState(false);
  const [selectedRestaurantType, setSelectedRestaurantType] = useState('');
  const [selectedFoodType, setSelectedFoodType] = useState('');
  const [budget, setBudget] = useState('');
  const [otherCriteria, setOtherCriteria] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { latitude, longitude, distance, city } = route.params;

  const handleRestaurantTypePress = (type) => {
    setSelectedRestaurantType(type);
  };

  const handleFoodTypePress = (type) => {
    setSelectedFoodType(type);
  };

  const handleSearchPress = async () => {
    try {
      const genAI = new GoogleGenerativeAI("AIzaSyApk9oStG49PPB6UkSyVXIcDpWH38Jo4g0");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
        No matter what recommend a restaurant in given location, 
		in a radius of the distance given from the location, 
		or in the whole city if location is not given. 
		Use other criteria to make a better recommendation, follow the food type  and budget as a criteria aswell,
		aslong as you recommend a restaurant even it only meets one of the criteria, also give location of the restaurant:
		- Location: ${latitude}, ${longitude}
		- Distance: ${distance || 'Any'} km
		- City: ${city || 'Any'}
        - Other Criteria: ${otherCriteria || 'None'}
		- Restaurant Type: ${selectedRestaurantType || 'Any'}
		- Open Now: ${openNow ? 'Yes' : 'No'}
		- Food Type: ${selectedFoodType || 'Any'}
		- Budget: ${budget || 'Any'}
		Use less than 50 words. Even if you are unable to give a restaurant in the given criteria,
		 try to any recommend one within the town or with a radius equal to the distance from the 'Location'.
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const restaurant = response.text();

      navigation.navigate("Result", { restaurant });
    } catch (error) {
      console.error('Error fetching restaurant recommendation:', error);
    }
  };

  return (
    <ScrollView style={styles.filters} contentContainerStyle={{ minHeight: 1200 }}>
      <View style={[styles.showAllOpenRestaurantsParent, styles.parentPosition]}>
        <Text style={styles.showAllOpen}>Show only open restaurants</Text>
        <Switch
          style={styles.frameChild}
          value={openNow}
          onValueChange={setOpenNow}
          trackColor={{ false: "#939393", true: "#d9d9d9" }}
        />
		<Text style={[styles.foodType]}>Restaurant Type</Text>
        <TouchableOpacity
          style={[
            styles.labelWrapper, 
            styles.labelWrapperLayout1, 
            selectedRestaurantType === 'Restaurant' && styles.buttonPressed
          ]}
          activeOpacity={0.2}
          onPress={() => handleRestaurantTypePress('Restaurant')}
        >
          <Text style={[styles.label, styles.labelLayout]}>Restaurant</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.labelContainer, 
            styles.labelWrapperLayout1, 
            selectedRestaurantType === 'Takeout' && styles.buttonPressed
          ]}
          activeOpacity={0.2}
          onPress={() => handleRestaurantTypePress('Takeout')}
        >
          <Text style={[styles.label1, styles.labelLayout]}>Takeout</Text>
        </TouchableOpacity>
      </View>
      	<View style={[styles.foodTypeParent, styles.parentPosition]}>
        
      </View>
      <View style={[styles.foodTypeParent, styles.parentPosition]}>
        <Text style={[styles.foodType, styles.budgetTypo]}>Food Type</Text>
        <TouchableOpacity
          style={[
            styles.labelFrame, 
            styles.labelWrapperLayout1, 
            selectedFoodType === 'Pizza' && styles.buttonPressed
          ]}
          activeOpacity={0.2}
          onPress={() => handleFoodTypePress('Pizza')}
        >
          <Text style={[styles.label2, styles.labelLayout]}>Pizza</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.frameTouchableopacity, 
            styles.labelWrapper4Layout, 
            selectedFoodType === 'Cultural' && styles.buttonPressed
          ]}
          activeOpacity={0.2}
          onPress={() => handleFoodTypePress('Cultural')}
        >
          <Text style={[styles.label3, styles.labelLayout]}>Cultural</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.labelWrapper1, 
            styles.labelWrapperLayout1, 
            selectedFoodType === 'General' && styles.buttonPressed
          ]}
          activeOpacity={0.2}
          onPress={() => handleFoodTypePress('General')}
        >
          <Text style={[styles.label3, styles.labelLayout]}>General</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.labelWrapper2, 
            styles.labelWrapperLayout, 
            selectedFoodType === 'Italian' && styles.buttonPressed
          ]}
          activeOpacity={0.2}
          onPress={() => handleFoodTypePress('Italian')}
        >
          <Text style={[styles.label5, styles.labelLayout]}>Italian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.labelWrapper3, 
            styles.labelWrapperLayout, 
            selectedFoodType === 'Chicken' && styles.buttonPressed
          ]}
          activeOpacity={0.2}
          onPress={() => handleFoodTypePress('Chicken')}
        >
          <Text style={[styles.label6, styles.labelLayout]}>Chicken</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.labelWrapper4, 
            styles.labelWrapper4Layout, 
            selectedFoodType === 'Seafood' && styles.buttonPressed
          ]}
          activeOpacity={0.2}
          onPress={() => handleFoodTypePress('Seafood')}
        >
          <Text style={[styles.label7, styles.labelLayout]}>Seafood</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.budgetParent}>
        <Text style={[styles.budget, styles.budgetTypo]}>Budget:</Text>
        <TextInput
          style={[styles.extra, styles.extraTypo]}
          placeholder="Enter"
          keyboardType="number-pad"
          autoCapitalize="none"
          placeholderTextColor="rgba(60, 60, 67, 0.6)"
          value={budget}
          onChangeText={setBudget}
        />
        <Text style={[styles.n, styles.nFlexBox]}>N$</Text>
      </View>
      <TouchableOpacity
        style={styles.searchWrapper}
        activeOpacity={0.2}
        onPress={handleSearchPress}
      >
        <Text style={[styles.search, styles.searchTypo]}>SEARCH</Text>
      </TouchableOpacity>
      <View style={styles.anyOtherParent}>
        <Text style={[styles.anyOther, styles.budgetTypo]}>Any Other:</Text>
        <View style={styles.frameItem} />
        <TextInput
          style={[styles.extra1, styles.extraTypo]}
          placeholder="Enter any other criteria"
          keyboardType="default"
          autoCapitalize="none"
          multiline={true}
          placeholderTextColor="rgba(60, 60, 67, 0.6)"
          value={otherCriteria}
          onChangeText={setOtherCriteria}
        />
      </View>
      <Text style={[styles.filters1, styles.searchTypo]}>Filters</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    width: 361,
    marginLeft: -180,
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_xl,
    left: "50%",
    position: "absolute",
    overflow: "hidden"
  },
  labelWrapperLayout1: {
    height: 25,
    width: 95,
    borderColor: Color.colorWhite,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute"
  },
  labelLayout: {
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    position: "absolute",
    top: 2
  },
  budgetTypo: {
    fontWeight: "900",
    textAlign: "center",
    color: Color.colorBlack
  },
  labelWrapper4Layout: {
    top: 128,
    height: 25,
    width: 95,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_8xs,
    position: "absolute"
  },
  labelWrapperLayout: {
    left: 229,
    height: 25,
    width: 95,
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_8xs,
    position: "absolute"
  },
  extraTypo: {
    backgroundColor: Color.colorWhite,
    fontSize: FontSize.size_mid,
    position: "absolute"
  },
  nFlexBox: {
    textAlign: "left",
    color: Color.colorBlack
  },
  searchTypo: {
    fontSize: FontSize.size_21xl,
    position: "absolute"
  },
  showAllOpen: {
    top: 88,
    fontSize: 14,
    width: 191,
    textAlign: "center",
    color: Color.colorBlack,
    fontWeight: "600",
    left: 26,
    position: "absolute"
  },
  label: {
    left: 5,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
    top: 2,
    color: Color.colorBlack
  },
  labelWrapper: {
    top: 40,
    left: 56
  },
  label1: {
    left: 12,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
    top: 2,
    color: Color.colorBlack
  },
  labelContainer: {
    top: 39,
    left: 207
  },
  frameChild: {
    top: 82,
    left: 214,
    width: 36,
    height: 29,
    position: "absolute"
  },
  showAllOpenRestaurantsParent: {
    top: 114,
    height: 118
  },
  foodType: {
    top: 8,
    left: 119,
    fontSize: FontSize.size_5xl,
    position: "absolute",
    color: Color.colorBlack,
    fontWeight: "900",
	alignItems: "center"
  },
  label2: {
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
    top: 2,
    color: Color.colorBlack,
    left: 26
  },
  labelFrame: {
    left: 39,
    top: 90
  },
  label3: {
    left: 16,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
    top: 2,
    color: Color.colorBlack
  },
  frameTouchableopacity: {
    left: 39
  },
  labelWrapper1: {
    left: 38,
    top: 52
  },
  label5: {
    left: 23,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
    top: 2,
    color: Color.colorBlack
  },
  labelWrapper2: {
    top: 52
  },
  label6: {
    left: 15,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
    top: 2,
    color: Color.colorBlack
  },
  labelWrapper3: {
    top: 90
  },
  label7: {
    left: 11,
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
    top: 2,
    color: Color.colorBlack
  },
  labelWrapper4: {
    left: 228
  },
  foodTypeParent: {
    top: 263,
    height: 175
  },
  budget: {
    left: 21,
    fontSize: FontSize.size_5xl,
    position: "absolute",
    top: 41,
    color: Color.colorBlack
  },
  extra: {
    top: 32,
    left: 172,
    borderRadius: 15,
    width: 175,
    height: 45
  },
  n: {
    top: 44,
    left: 134,
    fontSize: FontSize.size_5xl,
    position: "absolute",
    lineHeight: 22,
    letterSpacing: 0
  },
  budgetParent: {
    top: 469,
    borderColor: Color.colorSkyblue,
    height: 109,
    borderWidth: 1,
    borderStyle: "solid",
    width: 361,
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_xl,
    left: "50%",
    marginLeft: -180,
    position: "absolute",
    overflow: "hidden"
  },
  search: {
    top: 15,
    left: 72,
    textAlign: "left",
    color: Color.colorBlack,
    fontWeight: "600",
    fontSize: FontSize.size_21xl
  },
  searchWrapper: {
    marginLeft: -154,
    top: 1043,
    borderColor: "rgba(255, 255, 255, 0.6)",
    borderWidth: 5,
    width: 309,
    height: 78,
    borderStyle: "solid",
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_xl,
    left: "50%",
    position: "absolute",
    overflow: "hidden"
  },
  anyOther: {
    top: 21,
    left: 115,
    fontSize: FontSize.size_5xl,
    position: "absolute",
    color: Color.colorBlack,
    fontWeight: "900"
  },
  frameItem: {
    top: 57,
    left: 42,
    borderRadius: 22,
    width: 276,
    height: 134,
    backgroundColor: Color.colorWhite,
    position: "absolute"
  },
  extra1: {
    marginLeft: -113.5,
    top: 75,
    width: 228,
    height: 100,
    left: "50%"
  },
  anyOtherParent: {
    marginLeft: -179,
    top: 609,
    width: 359,
    height: 208,
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_xl,
    left: "50%",
    position: "absolute"
  },
  filters1: {
    marginLeft: -64,
    top: 55,
    color: Color.colorWhite,
    fontWeight: "900",
    textAlign: "center",
    left: "50%"
  },
  filters: {
    backgroundColor: "#817e7e",
    flex: 1,
    width: "100%",
    height: 1165,
    overflow: "hidden"
  },
  buttonPressed: {
    backgroundColor: '#313135', // Change this to whatever color you want the button to be when pressed
  },
});

export default Filters;
