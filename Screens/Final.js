import React from "react";
import {StyleSheet, View, Text, Pressable, TouchableOpacity} from "react-native";
import { FontFamily, FontSize, Color } from "./GlobalStyles";

const Final = (navigation) => {
  	
  	return (
    		<View style={styles.final}>
      			<View style={styles.finalChild} />
      			<Text style={[styles.restaurantName, styles.aTypo]}>Restaurant Name</Text>
      			<View style={styles.finalItem} />
      			<Text style={[styles.a, styles.aTypo]}>{`A
`}</Text>
            <TouchableOpacity style={[styles.rectangleParent, styles.groupChildLayout]} activeOpacity={0.2} onPress={()=>{}}>
                <View style={[styles.groupChild, styles.groupChildPosition]} />
                <Text style={[styles.directions, styles.groupChildPosition]}>Directions</Text>
            </TouchableOpacity>
        </View>);
};

const styles = StyleSheet.create({
    aTypo: {
        width: 264,
        left: 41,
        textAlign: "left",
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_5xl,
        position: "absolute"
    },
    groupChildLayout: {
        height: 33,
        width: 170
    },
    groupChildPosition: {
        top: 0,
        position: "absolute"
    },
    finalChild: {
        top: 88,
        left: 24,
        borderRadius: 20,
        backgroundColor: "#75ccd8",
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 5,
        width: 300,
        height: 689,
        borderStyle: "solid",
        position: "absolute"
    },
    restaurantName: {
        top: 26,
        height: 52,
        color: Color.colorBlack,
        width: 264,
        left: 41
    },
    finalItem: {
        top: 104,
        borderRadius: 360,
        height: 131,
        width: 170,
        borderWidth: 3,
        borderColor: Color.colorBlack,
        backgroundColor: Color.colorGainsboro,
        left: 41,
        borderStyle: "solid",
        position: "absolute"
    },
    a: {
        top: 264,
        color: "#fff",
        height: 396,
        width: 264,
        left: 41
    },
    groupChild: {
        left: 0,
        borderRadius: 15,
        height: 33,
        width: 170,
        borderWidth: 3,
        borderColor: Color.colorBlack,
        backgroundColor: Color.colorGainsboro,
        top: 0,
        borderStyle: "solid"
    },
    directions: {
        left: 30,
        width: 126,
        height: 29,
        top: 0,
        textAlign: "left",
        fontFamily: FontFamily.interRegular,
        fontSize: FontSize.size_5xl,
        color: Color.colorBlack
    },
    rectangleParent: {
        top: 733,
        left: 143,
        height: 33,
        position: "absolute"
    },
    final: {
        backgroundColor: "#817e7e",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden"
    }
});

export default Final;
