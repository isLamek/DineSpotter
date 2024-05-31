import React from "react";
import {Text, StyleSheet, Image, View, Pressable, TouchableOpacity} from "react-native";
import { FontFamily, Color, FontSize } from "./GlobalStyles";

const Filters = ({navigation}) => {

    
  	
  	return (
    		<View style={[styles.filters, styles.filtersLayout]}>
      			<Text style={[styles.filters1, styles.exactlyTypo]}>Filters</Text>
      			<View style={styles.switchParent}>
        				<Image style={styles.switchIcon} resizeMode="cover" source="Switch.png" />
        				<Text style={[styles.showAllOpen, styles.foodTypeTypo]}>{`show all open
          					restaurants`}</Text>
      			</View>
      			<View style={[styles.foodTypeParent, styles.parentLayout]}>
        				<Text style={[styles.foodType, styles.foodTypeTypo]}>Food Type</Text>
        				<Text style={styles.label}>Get Started</Text>
      			</View>
      			<View style={[styles.groupParent, styles.parentLayout]}>
        				<View style={[styles.frameParent, styles.framePosition]}>
          					<View style={[styles.restaurantWrapper, styles.framePosition]}>
            						<Text style={[styles.restaurant, styles.takeoutTypo]}>restaurant</Text>
          					</View>
          					<View style={styles.segmentedControl}>
            						<View style={[styles.segmentedControl1, styles.filtersLayout]}>
              							<View style={[styles.option, styles.optionPosition]} />
              							<View style={[styles.option1, styles.optionPosition]}>
                								<View style={styles.background} />
              							</View>
            						</View>
          					</View>
        				</View>
        				<Text style={[styles.takeout, styles.takeoutTypo]}>takeout</Text>
      			</View>
      			<View style={[styles.frameGroup, styles.frameGroupPosition]}>
        				<View style={[styles.frameChild, styles.framePosition]} />
        				<View style={[styles.frameItem, styles.frameLayout]} />
        				<Text style={[styles.text, styles.textTypo1]}>$$$</Text>
        				<View style={[styles.frameInner, styles.frameLayout]} />
        				<Text style={[styles.text1, styles.textTypo]}>$$$</Text>
        				<View style={[styles.atMostWrapper, styles.wrapperLayout]}>
          					<Text style={[styles.atMost, styles.textTypo1]}>at most</Text>
        				</View>
        				<View style={[styles.frameView, styles.wrapperLayout]} />
        				<View style={[styles.exactlyWrapper, styles.wrapperLayout]}>
          					<Text style={[styles.exactly, styles.exactlyTypo]}>exactly</Text>
        				</View>
        				<Text style={[styles.priceRange, styles.framePosition]}>Price Range</Text>
        				<Text style={[styles.atLeast, styles.textTypo1]}>at least</Text>
        				<View style={[styles.rectangleView, styles.frameLayout]} />
        				<Text style={[styles.text1, styles.textTypo]}>$$$</Text>
        				<Text style={[styles.text3, styles.textTypo]}>$$$</Text>
      			</View>
      			<TouchableOpacity style={[styles.searchWrapper, styles.frameGroupPosition]} activeOpacity={0.2} onPress={()=>{navigation.navigate("Results")}}>
        				<Text style={styles.search}>SEARCH</Text>
      			</TouchableOpacity>
    		</View>);
};

const styles = StyleSheet.create({
  	filtersLayout: {
    		overflow: "hidden",
    		width: "100%"
  	},
  	exactlyTypo: {
    		textAlign: "center",
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900",
    		color: Color.colorBlack,
    		position: "absolute"
  	},
  	foodTypeTypo: {
    		fontSize: FontSize.size_5xl,
    		textAlign: "center",
    		color: Color.colorBlack,
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900"
  	},
  	parentLayout: {
    		height: 109,
    		width: 361,
    		left: 0
  	},
  	framePosition: {
    		top: 0,
    		position: "absolute"
  	},
  	takeoutTypo: {
    		fontFamily: FontFamily.interBold,
    		fontWeight: "700",
    		lineHeight: 20,
    		fontSize: FontSize.size_mini,
    		letterSpacing: 0,
    		textAlign: "center",
    		color: Color.colorBlack,
    		position: "absolute"
  	},
  	optionPosition: {
    		bottom: "6.26%",
    		top: "6.24%",
    		height: "87.5%",
    		position: "absolute"
  	},
  	frameGroupPosition: {
    		width: 360,
    		backgroundColor: Color.colorSkyblue,
    		left: 0,
    		position: "absolute"
  	},
  	frameLayout: {
    		transform: [
      			{
        				rotate: "180deg"
      			}
    		],
    		height: 23,
    		width: 56,
    		top: 91,
    		backgroundColor: Color.colorWhite,
    		position: "absolute"
  	},
  	textTypo1: {
    		fontSize: FontSize.size_mini,
    		textAlign: "center",
    		color: Color.colorBlack,
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900",
    		position: "absolute"
  	},
  	textTypo: {
    		top: 95,
    		fontSize: FontSize.size_mini,
    		textAlign: "center",
    		color: Color.colorBlack,
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900",
    		position: "absolute"
  	},
  	wrapperLayout: {
    		width: 74,
    		height: 23,
    		backgroundColor: Color.colorWhite,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	filters1: {
    		top: 35,
    		left: 115,
    		fontSize: FontSize.size_21xl,
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900"
  	},
  	switchIcon: {
    		top: 44,
    		left: 292,
    		width: 51,
    		height: 31,
    		position: "absolute"
  	},
  	showAllOpen: {
    		top: 13,
    		left: 53,
    		position: "absolute"
  	},
  	switchParent: {
    		top: 145,
    		height: 118,
    		width: 361,
    		backgroundColor: Color.colorSkyblue,
    		left: 0,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	foodType: {
    		top: 39,
    		left: 16,
    		position: "absolute"
  	},
  	label: {
    		top: 46,
    		left: 237,
    		fontSize: 17,
    		lineHeight: 22,
    		fontFamily: FontFamily.abelRegular,
    		letterSpacing: 0,
    		textAlign: "center",
    		color: Color.colorBlack,
    		position: "absolute"
  	},
  	foodTypeParent: {
    		top: 297,
    		borderWidth: 1,
    		height: 109,
    		borderStyle: "solid",
    		backgroundColor: Color.colorSkyblue,
    		overflow: "hidden",
    		borderColor: Color.colorBlack,
    		position: "absolute"
  	},
  	restaurant: {
    		top: 54,
    		left: 64
  	},
  	restaurantWrapper: {
    		borderColor: Color.colorSkyblue,
    		height: 109,
    		width: 361,
    		left: 0,
    		borderWidth: 1,
    		borderStyle: "solid",
    		backgroundColor: Color.colorSkyblue,
    		overflow: "hidden"
  	},
  	option: {
    		width: "49.27%",
    		right: "50.14%",
    		left: "0.58%"
  	},
  	background: {
    		height: "103.57%",
    		width: "100.63%",
    		top: "-1.79%",
    		right: "-0.31%",
    		bottom: "-1.79%",
    		left: "-0.31%",
    		borderRadius: 7,
    		borderColor: "rgba(0, 0, 0, 0.04)",
    		borderWidth: 0.5,
    		backgroundColor: Color.colorWhite,
    		borderStyle: "solid",
    		position: "absolute"
  	},
  	option1: {
    		right: 2,
    		left: 168
  	},
  	segmentedControl1: {
    		height: "100%",
    		top: "0%",
    		right: "0%",
    		bottom: "0%",
    		left: "0%",
    		borderRadius: 9,
    		backgroundColor: Color.fillDarkTertiary,
    		position: "absolute"
  	},
  	segmentedControl: {
    		top: 45,
    		left: 30,
    		borderRadius: 15,
    		width: 330,
    		height: 32,
    		position: "absolute"
  	},
  	frameParent: {
    		height: 109,
    		width: 361,
    		left: 0
  	},
  	takeout: {
    		left: 244,
    		display: "flex",
    		alignItems: "center",
    		justifyContent: "center",
    		width: 60,
    		top: 51
  	},
  	groupParent: {
    		top: 431,
    		position: "absolute"
  	},
  	frameChild: {
    		width: 374,
    		height: 102,
    		backgroundColor: Color.colorSkyblue,
    		left: 0,
    		top: 0,
    		overflow: "hidden"
  	},
  	frameItem: {
    		left: 346
  	},
  	text: {
    		top: 96,
    		left: 304
  	},
  	frameInner: {
    		left: 220
  	},
  	text1: {
    		left: 37
  	},
  	atMost: {
    		top: 2,
    		left: 9
  	},
  	atMostWrapper: {
    		left: 281,
    		top: 51
  	},
  	frameView: {
    		top: 48,
    		left: 19
  	},
  	exactly: {
    		top: 4,
    		left: 10,
    		fontSize: 12
  	},
  	exactlyWrapper: {
    		left: 150,
    		top: 51
  	},
  	priceRange: {
    		left: 111,
    		fontSize: FontSize.size_5xl,
    		textAlign: "center",
    		color: Color.colorBlack,
    		fontFamily: FontFamily.interBlack,
    		fontWeight: "900"
  	},
  	atLeast: {
    		top: 50,
    		left: 27
  	},
  	rectangleView: {
    		left: 80
  	},
  	text3: {
    		left: 175
  	},
  	frameGroup: {
    		top: 578,
    		height: 142
  	},
  	search: {
    		top: 7,
    		left: 103,
    		fontWeight: "800",
    		fontFamily: FontFamily.interExtraBold,
    		textAlign: "left",
    		color: Color.colorBlack,
    		fontSize: FontSize.size_21xl,
    		position: "absolute"
  	},
  	searchWrapper: {
    		top: 737,
    		borderRadius: 20,
    		borderWidth: 5,
    		height: 63,
    		borderColor: Color.colorBlack,
    		borderStyle: "solid",
    		width: 360,
    		overflow: "hidden"
  	},
  	filters: {
    		backgroundColor: "#817e7e",
    		flex: 1,
    		height: 800
  	}
});

export default Filters;
