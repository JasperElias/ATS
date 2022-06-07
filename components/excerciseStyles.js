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
    red:"#8B0000"
};

const {primary, secondary, tertiary, black, grey, blue, red, darkLight} = Colors;

export const ExcerciseScroll = styled.ScrollView`
    borderWidth: 0px;
`;

export const PosterImage = styled.Image`
    flex: 1;
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

export const ExContainerTop = styled.View`
    width: 95%;
    left: 2%;
    flexDirection: row;
    marginTop: 10px;
    padding: 3px;
`;
export const ExContainerBottom = styled.View`
    width: 90%;
    left: 5%;
    marginTop: 20px;
    padding: 3px;
`;

export const ExTextContainer = styled.View`
    padding: 10px;
    width: 50%;
    backgroundColor: ${darkLight};
    top: 10%;
`;

export const ExText = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
`;
export const OverviewContainer = styled.View`
    width: 95%;
    left: 2.5%;
    marginTop: 5%;
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

export const VideoContainer = styled.View`
    flex:1;
    padding: 20px;
    borderColor: ${black};
    borderWidth: 3px;
    align-items: center;
    height: 200px;
    width: 300px;
    backgroundColor: ${red};
    left: 10%;
    marginTop: 5%;
`;