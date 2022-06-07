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
    red:"#8b0000"
};

const {primary, secondary, tertiary, brand, black, grey, blue, red, darkLight} = Colors;

/**general components for main pages */
export const BorderContainer = styled.View`
    flex: 1;
    padding: 20px;
    borderColor: ${black};
`;

/**styled componenets for video display */
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
    marginTop: 15%;
`;
/**
 * Home Screen custom components
 */

export const HomeScroll = styled.ScrollView`
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

export const HomeTitleContainer = styled.View`
   borderBottomWidth: 0px;
   borderColor: blue;
`;

export const HomePageTitle = styled.Text`
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    color: ${red};
`;

export const HomeSubTitleContainer = styled.View`
    width: 100%;
    height: 25px;
    position: center;
`;

export const HomeSubTitle = styled.Text`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: ${red};
`;
/**font-family: 'Trade Gothic LH Extended';*/

export const OverviewContainer = styled.View`
    backgroundColor: ${Colors.blue}
    width: 95%;
    left: 2.5%;
    marginTop: 2%;
    padding: 3px;
    marginBottom: 10;
    paddiingBottom: 5;
`;

export const OverviewHeader = styled.Text`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: ${primary};
`;

export const TextContainer = styled.View`
    width: 95%;
    left: 2.5%;
    marginTop: 2%;
    backgroundColor: ${primary};
    padding: 1%;
    marginBottom: 2%
`;

export const HomeText = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
`;

export const HomeImage = styled.Image`
    flex: 1,
    width: 100%,
`;

export const BioContainerTop = styled.View`
    
    width: 90%;
    left: 2%;
    flexDirection: row;
    marginTop: 10px;
    padding: 3px;
`;
export const BioContainerBottom = styled.View`
    
    width: 90%;
    left: 5%;
    marginTop: 20px;
    padding: 3px;
`;

export const HeadShot = styled.Image`
    borderRadius: 40px;
    height: 50%;
    width: 30%;
    borderWidth: 2px;
    borderColor: ${blue};
    padding: 5px;
    margin: 2%;
`;

export const BioTextContainer = styled.View`
    padding: 10px;
    width: 70%;
    backgroundColor: ${darkLight};
    top: 10%;
`;

export const BioText = styled.Text`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
`;
/**font-family: 'Arapey'; */


/**
 * contact form UI styles 
 * 
 * */

export const ContactScroll = styled.ScrollView`
    flex: 1;
    padding: 25px;
    padding-top: 10px;
    background-color: ${grey};
    borderWidth: 5px;
    borderColor: ${grey};
`;

export const HeaderText = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const InputLabel = styled.Text`
    color: #ffffff;
    font-size: 15px;
    text-align: left;
`;

export const InputName = styled.TextInput`
    background-color: ${secondary};
    padding: 8px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 5px;
    font-size: 16px;
    height: 50px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const InputPhone = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const MessageBox = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    font-size: 12px;
    height: 100px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

/**
 * CHECK BOX STYLES
 * Used for any checkbox situations
 */
export const CheckBoxContainer = styled.View`
    justifyContent: flex-start;
    alignItems: center;
    flexDirection: row;
    width: 150px;
    marginTop: 5px;
    marginHorizontal: 5px;
`;

export const CheckBoxTitle = styled.Text`
    fontSize: 16px;
    color: #000;
    marginLeft: 5px;
    fontWeight: 600;
`;

/**
UI Styles for SHOP SCREEN 

**/
export const StyledContainer = styled.ScrollView`
    flex: 1;
    padding: 25px;
    padding-top: 30px;
    background-color: ${darkLight};
`;

export const ShopTitle = styled.Text`
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: ${black};
    padding: 1px;
`;

export const SubTitle = styled.Text`
    font-size: 14px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
    padding: 5px;
`;

export const ShopButton = styled.TouchableOpacity`
    background-color: ${blue};
    height: 50px;
    justifyContent: center;
    align-items: center;
    width: 170px;
    border-radius:15px;
`;

export const ShopButtonText = styled.Text`
    color: ${primary};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
`;

export const BookCover = styled.Image`
    height: 225px;
    width: 150px;
`;

export const BookImageContainer = styled.View`
    height: 235px;
    width: 160px;
    justifyContent: center;
    align-items: center;
`;

export const BookDiscriptionView = styled.View`
    width: 100%;
    top: 5px;
`;

export const ShopButtonView = styled.View`
   
    padding: 5px;
    align-items: center;
    justifyContent: center;
    flex: 1;
`;