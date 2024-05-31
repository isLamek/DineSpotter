import React from "react";
import {Text, StyleSheet, Pressable, TouchableOpacity, View} from "react-native";
import { Color, Border, FontFamily, FontSize } from "./GlobalStyles";

const Results = ({navigation}) => {
  	
  	return (
    		<View style={styles.results}>
      			<Text style={styles.results1}>Results</Text>
      			<TouchableOpacity style={[styles.resultsChild, styles.resultsLayout]} activeOpacity={0.2} onPress={()=>{navigation.navigate("Final")}} />
      			<TouchableOpacity style={[styles.resultsItem, styles.resultsLayout]} activeOpacity={0.2} onPress={()=>{navigation.navigate("Final")}} />
      			<TouchableOpacity style={[styles.resultsInner, styles.resultsLayout]} activeOpacity={0.2} onPress={()=>{navigation.navigate("Final")}} />
      			<Text style={[styles.option1, styles.optionTypo]}>Option 1</Text>
      			<Text style={[styles.option2, styles.optionTypo]}>Option 2</Text>
      			<Text style={[styles.option3, styles.optionTypo]}>Option 3</Text>
      			<Text style={[styles.text, styles.optionTypo]}>{`
`}</Text>
        </View>);
};

const styles = StyleSheet.create({
    resultsLayout: {
        height: 115,
        width: 360,
        borderWidth: 5,
        borderStyle: "solid",
        backgroundColor: Color.colorGainsboro,
        borderRadius: Border.br_xl,
        position: "absolute"
    },
    optionTypo: {
        color: Color.colorBlack,
        fontFamily: FontFamily.interBold,
        fontWeight: "700",
        lineHeight: 24,
        letterSpacing: 0,
        fontSize: FontSize.size_4xl,
        textAlign: "center",
        position: "absolute"
    },
    results1: {
        top: 59,
        left: 113,
        fontSize: 35,
        fontWeight: "900",
        fontFamily: FontFamily.interBlack,
        color: Color.colorDarkslategray,
        textAlign: "center",
        position: "absolute"
    },
    resultsChild: {
        top: 213,
        borderColor: "#1e1e1e",
        left: 0,
        width: 360,
        borderWidth: 5,
        borderStyle: "solid",
        backgroundColor: Color.colorGainsboro,
        borderRadius: Border.br_xl
    },
    resultsItem: {
        top: 419,
        borderColor: Color.colorDarkslategray,
        left: 4
    },
    resultsInner: {
        top: 665,
        borderColor: Color.colorBlack,
        left: 0,
        width: 360,
        borderWidth: 5,
        borderStyle: "solid",
        backgroundColor: Color.colorGainsboro,
        borderRadius: Border.br_xl
    },
    option1: {
        top: 171,
        left: 8
    },
    option2: {
        top: 399,
        left: 5
    },
    option3: {
        top: 633,
        left: 4
    },
    text: {
        top: 263,
        left: 79
    },
    results: {
        backgroundColor: "#75ccd8",
        flex: 1,
        width: "100%",
        height: 872,
        overflow: "hidden"
    }
});

export default Results;
