import React from "react";
import {Text, StyleSheet, Pressable, TouchableOpacity, View} from "react-native";
import { FontSize, Border, FontFamily, Color } from "./GlobalStyles";

const DistanceInput = ({navigation}) => {

	

  	return (
    		<View style={styles.distanceInput}>
      			<Text style={[styles.distance, styles.nextTypo]}>Distance</Text>
      			<TouchableOpacity style={[styles.nextWrapper, styles.frameFlexBox]} activeOpacity={0.3} onPress={()=>{navigation.navigate("Filters")}}>
        				<Text style={[styles.next, styles.nextTypo]}>Next</Text>
      			</TouchableOpacity>
      			<View style={styles.frameParent}>
        				<View style={[styles.frame, styles.framePosition]}>
          					<Text style={[styles.text, styles.textTypo]}>5</Text>
        				</View>
        				<TouchableOpacity style={[styles.touchableopacity, styles.touchableopacityPosition]} activeOpacity={0.2} onPress={()=>{}}>
          					<Text style={[styles.text1, styles.textTypo]}>-</Text>
        				</TouchableOpacity>
        				<TouchableOpacity style={[styles.touchableopacity1, styles.touchableopacityPosition]} activeOpacity={0.2} onPress={()=>{}}>
          					<Text style={[styles.text2, styles.textTypo]}>+</Text>
        				</TouchableOpacity>
        				<View style={[styles.frame1, styles.framePosition]}>
          					<Text style={[styles.km, styles.textTypo]}>km</Text>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	nextTypo: {
    		textAlign: "center",
    		fontSize: FontSize.size_13xl
  	},
  	frameFlexBox: {
    		justifyContent: "center",
    		borderRadius: Border.br_8xs
  	},
  	framePosition: {
    		height: 39,
    		top: 62,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	textTypo: {
    		fontSize: FontSize.size_xl,
    		textAlign: "center",
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900"
  	},
  	touchableopacityPosition: {
    		top: 70,
    		position: "absolute"
  	},
  	distance: {
    		top: 71,
    		left: 108,
    		color: Color.colorWhite,
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900",
    		textAlign: "center",
    		fontSize: FontSize.size_13xl,
    		position: "absolute"
  	},
  	next: {
    		alignSelf: "stretch",
    		fontWeight: "800",
    		fontFamily: FontFamily.gloryExtraBold,
    		color: Color.colorBlack,
    		textAlign: "center",
    		fontSize: FontSize.size_13xl
  	},
  	nextWrapper: {
    		top: 669,
    		left: 104,
    		width: 163,
    		height: 52,
    		alignItems: "flex-end",
    		backgroundColor: Color.colorGainsboro,
    		position: "absolute"
  	},
  	text: {
    		color: Color.colorWhite
  	},
  	frame: {
    		left: 64,
    		backgroundColor: Color.colorBlack,
    		width: 107,
    		paddingHorizontal: 43,
    		paddingVertical: 0,
    		justifyContent: "center",
    		borderRadius: Border.br_8xs
  	},
  	text1: {
    		width: 23,
    		color: Color.colorWhite
  	},
  	touchableopacity: {
    		left: 41
  	},
  	text2: {
    		color: Color.colorWhite
  	},
  	touchableopacity1: {
    		left: 178
  	},
  	km: {
    		width: 38,
    		height: 19,
    		color: Color.colorBlack
  	},
  	frame1: {
    		left: 206,
    		borderRadius: 10,
    		width: 60,
    		alignItems: "center",
    		paddingHorizontal: 0,
    		paddingVertical: 7,
    		backgroundColor: Color.colorGainsboro
  	},
  	frameParent: {
    		marginTop: -25,
    		marginLeft: -169,
    		top: "50%",
    		left: "50%",
    		borderRadius: 50,
    		backgroundColor: "#313135",
    		width: 339,
    		height: 164,
    		position: "absolute",
    		overflow: "hidden"
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
