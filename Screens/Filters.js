import React, { useState } from 'react';
import {Text, StyleSheet, Pressable, TouchableOpacity, Switch, View, ScrollView, TextInput} from "react-native";
import { Color, Border, FontFamily, FontSize } from "./GlobalStyles";


const Filters = ({navigation}) => {
  	const [rectangleSwitchSwitchValueState, setRectangleSwitchSwitchValueState] = useState(false);
  	
  	return (
    		<ScrollView style={styles.filters} contentContainerStyle={{ minHeight: 1200 }}>
      			<View style={[styles.showAllOpenRestaurantsParent, styles.parentPosition]}>
        				<Text style={styles.showAllOpen}>show all open restaurants</Text>
        				<TouchableOpacity style={[styles.labelWrapper, styles.frameWrapperLayout]} activeOpacity={0.2} onPress={()=>{}}>
          					<Text style={[styles.label, styles.labelLayout]}>{`Restaurant `}</Text>
        				</TouchableOpacity>
        				<TouchableOpacity style={[styles.labelContainer, styles.frameWrapperLayout]} takeout="1" activeOpacity={0.2} onPress={()=>{}}>
          					<Text style={[styles.label1, styles.labelLayout]}>Take Out</Text>
        				</TouchableOpacity>
        				<Text style={[styles.or, styles.orPosition]}>or</Text>
        				<Switch style={styles.frameChild} value={rectangleSwitchSwitchValueState} onValueChange={setRectangleSwitchSwitchValueState} trackColor={{false: "#939393", true: "#d9d9d9"}} />
      			</View>
      			<View style={[styles.foodTypeParent, styles.parentPosition]}>
        				<Text style={[styles.foodType, styles.budgetTypo]}>Food Type</Text>
        				<TouchableOpacity style={[styles.italianWrapper, styles.frameBorder]} activeOpacity={0.2} onPress={()=>{}}>
          					<Text style={[styles.italian, styles.labelLayout]}>Italian</Text>
        				</TouchableOpacity>
        				<TouchableOpacity style={[styles.pizzaWrapper, styles.frameWrapperLayout]} activeOpacity={0.2} onPress={()=>{}}>
          					<Text style={[styles.pizza, styles.labelLayout]}>Pizza</Text>
        				</TouchableOpacity>
        				<TouchableOpacity style={[styles.labelFrame, styles.labelFramePosition]} activeOpacity={0.2} onPress={()=>{}}>
          					<Text style={[styles.label2, styles.labelLayout]}>Sea Food</Text>
        				</TouchableOpacity>
        				<TouchableOpacity style={[styles.frameTouchableopacity, styles.frameBorder]} activeOpacity={0.2} onPress={()=>{}}>
          					<Text style={[styles.label3, styles.labelLayout]}>Chicken</Text>
        				</TouchableOpacity>
        				<TouchableOpacity style={[styles.rectangleParent, styles.labelFramePosition]} activeOpacity={0.2} onPress={()=>{}}>
          					<View style={[styles.frameItem, styles.frameWrapperLayout]} />
          					<Text style={[styles.label4, styles.labelLayout]}>Cultural</Text>
        				</TouchableOpacity>
        				<TouchableOpacity style={[styles.rectangleGroup, styles.italianWrapperPosition]} activeOpacity={0.2} onPress={()=>{}}>
          					<View style={[styles.frameItem, styles.frameWrapperLayout]} />
          					<Text style={[styles.label5, styles.labelLayout]}>General</Text>
        				</TouchableOpacity>
      			</View>
      			<View style={[styles.budgetParent, styles.labelWrapperBorder]}>
        				<Text style={[styles.budget, styles.budgetTypo]}>Budget:</Text>
        				<TextInput style={[styles.extra, styles.extraTypo]} placeholder="Enter" keyboardType="number-pad" autoCapitalize="none" placeholderTextColor="rgba(60, 60, 67, 0.6)" />
        				<Text style={[styles.n, styles.nFlexBox]}>N$</Text>
      			</View>
      			<TouchableOpacity style={styles.searchWrapper} activeOpacity={0.2} onPress={()=>{navigation.navigate("Result")}}>
        				<Text style={[styles.search, styles.searchTypo]}>SEARCH</Text>
      			</TouchableOpacity>
      			<View style={styles.anyOtherParent}>
        				<Text style={[styles.anyOther, styles.budgetTypo]}>Any Other:</Text>
        				<View style={styles.rectangleView} />
        				<TextInput style={[styles.extra1, styles.extraTypo]} placeholder="Enter" multiline={true} placeholderTextColor="rgba(60, 60, 67, 0.6)" />
      			</View>
      			<Text style={[styles.filters1, styles.searchTypo]}>Filters</Text>
    		</ScrollView>);
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
  	frameWrapperLayout: {
    		height: 25,
    		width: 95,
    		position: "absolute"
  	},
  	labelLayout: {
    		lineHeight: 22,
    		letterSpacing: 0
  	},
  	orPosition: {
    		top: 41,
    		color: Color.colorBlack
  	},
  	budgetTypo: {
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900",
    		textAlign: "center"
  	},
  	frameBorder: {
    		left: 229,
    		borderWidth: 1,
    		borderColor: Color.colorWhite,
    		borderStyle: "solid",
    		backgroundColor: Color.colorGainsboro,
    		borderRadius: Border.br_8xs
  	},
  	labelFramePosition: {
    		top: 126,
    		height: 25,
    		width: 95,
    		position: "absolute"
  	},
  	italianWrapperPosition: {
    		top: 50,
    		height: 25,
    		width: 95,
    		position: "absolute"
  	},
  	labelWrapperBorder: {
    		borderWidth: 1,
    		borderStyle: "solid"
  	},
  	extraTypo: {
    		fontFamily: FontFamily.abelRegular,
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
    		fontSize: 14,
    		width: 191,
    		textAlign: "center",
    		color: Color.colorBlack,
    		fontFamily: FontFamily.interSemiBold,
    		fontWeight: "600",
    		left: 26,
    		top: 88,
    		position: "absolute"
  	},
  	label: {
    		left: 5,
    		fontSize: FontSize.size_mid,
    		letterSpacing: 0,
    		textAlign: "center",
    		fontFamily: FontFamily.interSemiBold,
    		fontWeight: "600",
    		position: "absolute",
    		top: 2,
    		color: Color.colorBlack
  	},
  	labelWrapper: {
    		top: 40,
    		left: 56,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderColor: Color.colorWhite,
    		backgroundColor: Color.colorGainsboro,
    		borderRadius: Border.br_8xs,
    		width: 95
  	},
  	label1: {
    		left: 12,
    		fontSize: FontSize.size_mid,
    		letterSpacing: 0,
    		textAlign: "center",
    		fontFamily: FontFamily.interSemiBold,
    		fontWeight: "600",
    		position: "absolute",
    		top: 2,
    		color: Color.colorBlack
  	},
  	labelContainer: {
    		top: 39,
    		left: 207,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderColor: Color.colorWhite,
    		backgroundColor: Color.colorGainsboro,
    		borderRadius: Border.br_8xs,
    		width: 95
  	},
  	or: {
    		left: 170,
    		lineHeight: 22,
    		letterSpacing: 0,
    		fontSize: FontSize.size_mid,
    		textAlign: "center",
    		fontFamily: FontFamily.interSemiBold,
    		fontWeight: "600",
    		position: "absolute"
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
    		fontWeight: "900"
  	},
  	italian: {
    		left: 24,
    		fontSize: FontSize.size_mid,
    		letterSpacing: 0,
    		textAlign: "center",
    		fontFamily: FontFamily.interSemiBold,
    		fontWeight: "600",
    		position: "absolute",
    		top: 2,
    		color: Color.colorBlack
  	},
  	italianWrapper: {
    		top: 50,
    		height: 25,
    		width: 95,
    		position: "absolute"
  	},
  	pizza: {
    		fontSize: FontSize.size_mid,
    		letterSpacing: 0,
    		textAlign: "center",
    		fontFamily: FontFamily.interSemiBold,
    		fontWeight: "600",
    		position: "absolute",
    		top: 2,
    		color: Color.colorBlack,
    		left: 26
  	},
  	pizzaWrapper: {
    		left: 39,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderColor: Color.colorWhite,
    		backgroundColor: Color.colorGainsboro,
    		borderRadius: Border.br_8xs,
    		width: 95,
    		top: 88
  	},
  	label2: {
    		left: 11,
    		fontSize: FontSize.size_mid,
    		letterSpacing: 0,
    		textAlign: "center",
    		fontFamily: FontFamily.interSemiBold,
    		fontWeight: "600",
    		position: "absolute",
    		top: 2,
    		color: Color.colorBlack
  	},
  	labelFrame: {
    		left: 229,
    		borderWidth: 1,
    		borderColor: Color.colorWhite,
    		borderStyle: "solid",
    		backgroundColor: Color.colorGainsboro,
    		borderRadius: Border.br_8xs
  	},
  	label3: {
    		left: 15,
    		fontSize: FontSize.size_mid,
    		letterSpacing: 0,
    		textAlign: "center",
    		fontFamily: FontFamily.interSemiBold,
    		fontWeight: "600",
    		position: "absolute",
    		top: 2,
    		color: Color.colorBlack
  	},
  	frameTouchableopacity: {
    		height: 25,
    		width: 95,
    		position: "absolute",
    		top: 88
  	},
  	frameItem: {
    		top: 0,
    		left: 0,
    		borderWidth: 1,
    		borderStyle: "solid",
    		borderColor: Color.colorWhite,
    		backgroundColor: Color.colorGainsboro,
    		borderRadius: Border.br_8xs,
    		width: 95
  	},
  	label4: {
    		left: 16,
    		fontSize: FontSize.size_mid,
    		letterSpacing: 0,
    		textAlign: "center",
    		fontFamily: FontFamily.interSemiBold,
    		fontWeight: "600",
    		position: "absolute",
    		top: 2,
    		color: Color.colorBlack
  	},
  	rectangleParent: {
    		left: 39
  	},
  	label5: {
    		left: 17,
    		fontSize: FontSize.size_mid,
    		letterSpacing: 0,
    		textAlign: "center",
    		fontFamily: FontFamily.interSemiBold,
    		fontWeight: "600",
    		position: "absolute",
    		top: 2,
    		color: Color.colorBlack
  	},
  	rectangleGroup: {
    		left: 39
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
    		fontFamily: FontFamily.interRegular,
    		fontSize: FontSize.size_5xl,
    		position: "absolute",
    		lineHeight: 22,
    		letterSpacing: 0
  	},
  	budgetParent: {
    		top: 469,
    		borderColor: Color.colorSkyblue,
    		height: 109,
    		width: 361,
    		marginLeft: -180,
    		backgroundColor: Color.colorSkyblue,
    		borderRadius: Border.br_xl,
    		left: "50%",
    		position: "absolute",
    		overflow: "hidden"
  	},
  	search: {
    		top: 15,
    		left: 72,
    		textAlign: "left",
    		color: Color.colorBlack,
    		fontFamily: FontFamily.interSemiBold,
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
  	rectangleView: {
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
    		fontFamily: FontFamily.interBlack,
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
  	}
});

export default Filters;



// import React, { useState } from 'react';
// import { Text, StyleSheet, TouchableOpacity, Switch, View, ScrollView, TextInput } from "react-native";
// import { Color, Border, FontFamily, FontSize } from "./GlobalStyles";

// const Filters = ({ navigation }) => {
//   const [rectangleSwitchSwitchValueState, setRectangleSwitchSwitchValueState] = useState(false);

//   // State to track active buttons
//   const [activeButton, setActiveButton] = useState({
//     restaurant: false,
//     takeOut: false,
//     italian: false,
//     pizza: false,
//     seaFood: false,
//     chicken: false,
//     cultural: false,
//     general: false,
//   });

//   const handleButtonPress = (buttonName) => {
//     setActiveButton((prevState) => ({
//       ...prevState,
//       [buttonName]: !prevState[buttonName],
//     }));
//   };

//   return (
//     <ScrollView style={styles.filters} contentContainerStyle={{ minHeight: 1500 }}>
//       <Text style={styles.filters1}>Filters</Text>
//       <View style={[styles.showAllOpenRestaurantsParent, styles.parentPosition]}>
//         <Text style={[styles.showAllOpen, styles.searchTypo]}>show all open restaurants</Text>
//         <TouchableOpacity
//           style={[styles.labelWrapper, activeButton.restaurant ? styles.activeButton : null]}
//           activeOpacity={0.2}
//           onPress={() => handleButtonPress('restaurant')}
//         >
//           <Text style={[styles.label, styles.labelTypo]}>{`Restaurant `}</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.labelContainer, activeButton.takeOut ? styles.activeButton : null]}
//           activeOpacity={0.2}
//           onPress={() => handleButtonPress('takeOut')}
//         >
//           <Text style={[styles.label1, styles.labelTypo]}>Take Out</Text>
//         </TouchableOpacity>
//         <Text style={[styles.or, styles.labelTypo]}>or</Text>
//         <Switch
//           style={styles.frameChild}
//           value={rectangleSwitchSwitchValueState}
//           onValueChange={setRectangleSwitchSwitchValueState}
//           trackColor={{ false: "#939393", true: "#d9d9d9" }}
//         />
//       </View>
//       <View style={[styles.foodTypeParent, styles.parentPosition]}>
//         <Text style={[styles.foodType, styles.budgetTypo]}>Food Type</Text>
//         <TouchableOpacity
//           style={[styles.italianWrapper, activeButton.italian ? styles.activeButton : null]}
//           activeOpacity={0.2}
//           onPress={() => handleButtonPress('italian')}
//         >
//           <Text style={[styles.italian, styles.labelTypo]}>Italian</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.pizzaWrapper, activeButton.pizza ? styles.activeButton : null]}
//           activeOpacity={0.2}
//           onPress={() => handleButtonPress('pizza')}
//         >
//           <Text style={[styles.pizza, styles.labelTypo]}>Pizza</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.labelFrame, activeButton.seaFood ? styles.activeButton : null]}
//           activeOpacity={0.2}
//           onPress={() => handleButtonPress('seaFood')}
//         >
//           <Text style={[styles.label2, styles.labelTypo]}>Sea Food</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.frameTouchableopacity, activeButton.chicken ? styles.activeButton : null]}
//           activeOpacity={0.2}
//           onPress={() => handleButtonPress('chicken')}
//         >
//           <Text style={[styles.label3, styles.labelTypo]}>Chicken</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.rectangleParent, activeButton.cultural ? styles.activeButton : null]}
//           activeOpacity={0.2}
//           onPress={() => handleButtonPress('cultural')}
//         >
//           <View style={[styles.frameItem]} />
//           <Text style={[styles.label4, styles.labelTypo]}>Cultural</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.rectangleGroup, activeButton.general ? styles.activeButton : null]}
//           activeOpacity={0.2}
//           onPress={() => handleButtonPress('general')}
//         >
//           <View style={[styles.frameItem]} />
//           <Text style={[styles.label5, styles.labelTypo]}>General</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={[styles.budgetParent, styles.labelWrapperBorder]}>
//         <Text style={[styles.budget, styles.budgetTypo]}>Budget</Text>
//         <TextInput
//           style={[styles.extra, styles.extraTypo]}
//           placeholder="Enter"
//           keyboardType="number-pad"
//           autoCapitalize="none"
//           placeholderTextColor="rgba(60, 60, 67, 0.6)"
//         />
//       </View>
//       <TouchableOpacity style={styles.searchWrapper} activeOpacity={0.2} onPress={() => { navigation.navigate("Results"); }}>
//         <Text style={[styles.search, styles.searchTypo]}>SEARCH</Text>
//       </TouchableOpacity>
//       <View style={styles.anyOtherParent}>
//         <Text style={[styles.anyOther, styles.budgetTypo]}>Any Other:</Text>
//         <TextInput
//           style={[styles.extra1, styles.extraTypo]}
//           placeholder="Enter"
//           multiline
//           placeholderTextColor="rgba(60, 60, 67, 0.6)"
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   filters: {
//     flex: 1,
//     padding: 20,
//   },
//   filters1: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   parentPosition: {
//     marginVertical: 10,
//   },
//   showAllOpen: {
//     fontSize: 16,
//   },
//   searchTypo: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   labelWrapper: {
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//     marginVertical: 5,
//   },
//   frameWrapperLayout: {
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//   },
//   labelTypo: {
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   or: {
//     marginVertical: 10,
//     textAlign: 'center',
//   },
//   frameChild: {
//     alignSelf: 'center',
//   },
//   foodType: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   budgetTypo: {
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   italianWrapper: {
//     marginVertical: 5,
//   },
//   frameBorder: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     padding: 10,
//   },
//   pizzaWrapper: {
//     marginVertical: 5,
//   },
//   labelFramePosition: {
//     marginVertical: 5,
//   },
//   frameTouchableopacity: {
//     marginVertical: 5,
//   },
//   rectangleParent: {
//     marginVertical: 5,
//   },
//   frameItem: {
//     backgroundColor: '#e0e0e0',
//     borderRadius: 5,
//     width: '100%',
//     height: 40,
//   },
//   rectangleGroup: {
//     marginVertical: 5,
//   },
//   italianWrapperPosition: {
//     marginVertical: 5,
//   },
//   budgetParent: {
//     marginVertical: 20,
//   },
//   labelWrapperBorder: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//   },
//   extra: {
//     marginTop: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//   },
//   extraTypo: {
//     fontSize: 16,
//   },
//   searchWrapper: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   search: {
//     color: '#fff',
//   },
//   anyOtherParent: {
//     marginVertical: 20,
//   },
//   anyOther: {
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   extra1: {
//     marginTop: 10,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//   },
//   activeButton: {
//     backgroundColor: '#d9d9d9',
//   },
// });

// export default Filters;
