import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

//colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    black:"#000000",
    grey:"#696969",
    blue:"#00126A",
    red:"#8b0000",
};

const {primary, secondary, tertiary, brand, black, grey, blue, red, darkLight} = Colors;

/**
 * CATEGORY DESCRIPTION STYLES
 */

export const DescriptionScroll = styled.ScrollView`
    borderWidth: 0px;
`;

export const TitleBar = styled.View`
    height: 50px;
    background-color: ${blue};
    width: 100%;
    marginTop: ${StatusBarHeight};
`;

export const BarText = styled.Text`
    text-align: center;
    padding: 10px
    font-weight: 700;
    font-size: 20px;
    color: ${primary};
`;

export const DesTitleContainer = styled.View`
   borderBottomWidth: 0px;
   borderColor: blue;
`;

export const DesPageTitle = styled.Text`
    font-style: normal;
    font-weight: 800;
    font-size: 35px;
    line-height: 50px;
    text-align: center;
    color: ${red};
`;

export const SubTitleContainer = styled.View`
    width: 100%;
    height: 25px;
    position: center;
`;

export const SubTitle = styled.Text`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: ${red};
`;

export const OverviewContainer = styled.View`
    
    width: 95%;
    left: 2.5%;
    marginTop: 2%;
    padding: 3px;
`;

export const OverviewHeader = styled.Text`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    color: ${blue};
`;

export const TextContainer = styled.View`
    width: 98%;
    borderWidth: 3px;
    borderColor: blue;
    left: 1%;
    marginTop: 2%;
    backgroundColor: ${darkLight};
    padding: 1%;
`;

export const DesText = styled.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
`;


 /**
  * END DESCRIPTION STYLES
  */