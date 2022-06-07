import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
  
import {
    CheckBoxContainer,
    CheckBoxTitle
} from './styles';

const CheckBox = (props) => {
    const iconName = props.isChecked ?
        "checkbox-marked" : "checkbox-blank-outline";
  
    return (
        <CheckBoxContainer>
            <Pressable onPress={props.onPress}>
                <MaterialCommunityIcons 
                    name={iconName} size={24} color="#000" />
            </Pressable>
            <CheckBoxTitle>{props.title}</CheckBoxTitle>
        </CheckBoxContainer>
    );
};
  
export default CheckBox;