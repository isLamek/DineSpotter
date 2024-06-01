import React from "react";
import {StyleSheet, View, ScrollView, Image, Text, TouchableOpacity} from "react-native";
import { Border, Color, FontFamily, FontSize } from "./GlobalStyles";


const Result = () => {
  	
  	return (
    		<ScrollView style={styles.result}>
      			<View style={styles.aiResponseParent}>
        				<Text style={styles.aiResponse}>{`AI response will be displayed here`}</Text>
                <View style={styles.frameChild} />
                <TouchableOpacity style={[styles.rectangleParent, styles.groupChildLayout]} activeOpacity={0.2} onPress={()=>{}}>
                    <View style={[styles.groupChild, styles.groupBorder]} />
                    <Text style={[styles.retry, styles.retryTypo]}>Retry</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.rectangleGroup, styles.groupLayout]} activeOpacity={0.2} onPress={()=>{}}>
                    <View style={[styles.groupItem, styles.groupLayout]} />
                    <Text style={[styles.directions, styles.retryTypo]}>Directions</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.restaurantName, styles.retryTypo]}>Restaurant Name</Text>
        </ScrollView>);
};

const styles = StyleSheet.create({
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
