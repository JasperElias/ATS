import React from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';

//Custom styled components
import {
    Colors,
    ShopButton,
    ShopButtonText,
    StyledContainer,
    ShopTitle,
    SubTitle,
    BookCover,
    BookImageContainer,
    BookDiscriptionView,
    ShopButtonView
} from './../../components/styles.js';

const {primary, secondary, tertiary, black, grey, blue, red, darkLight} = Colors;

//Imports weblinking for opening store
import * as WebBrowser from 'expo-web-browser';

const ShopScreen = props => {
    return (
        <StyledContainer 
            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
            <ShopTitle>
                Shop Degan Media
            </ShopTitle>
            <BookDiscriptionView>
                <SubTitle>
                    Dan Egan’s store is your one-stop-shop for all the best ski books, experiences, and media on the market.
                </SubTitle>
            </BookDiscriptionView>
            <BookImageContainer>
                <BookCover
                    source={require('./../../assets/AllTerrainSkiingII_Front.png')}
                />
            </BookImageContainer>
            <BookDiscriptionView>
                <SubTitle>
                    Get an in-depth analysis of All-Terrain Skiing with the new release of Volume II.
                </SubTitle>
            </BookDiscriptionView>
            <BookImageContainer style={{paddingBottom: 11}}>
                <BookCover
                    source={require('./../../assets/WhiteHaze.png')}
                />
            </BookImageContainer>
            
            <BookDiscriptionView>
                <SubTitle>
                    Dan and Eric Wilbur’s book Thirty Years in a White Haze is Dan’s tale of trials, success, and loss told through his epic worldwide adventure and the evolution of extreme skiing as 30 years of haze dissipates to clarity. 
                </SubTitle>
            </BookDiscriptionView>
            {//**shop buttons *// 
            }
            <BookDiscriptionView>
                <SubTitle>
                    Other titles include titles from and about the ski industry’s biggest icons like Warren Miller and Jake Burton. 
                </SubTitle>
            </BookDiscriptionView>
            
            <ShopButtonView>
                <ShopButton 
                    title="Shop"
                    onPress={ () => 
                        {WebBrowser.openBrowserAsync('https://dan-egan-shop.com/') }
                    }
                >
                    <ShopButtonText>Shop</ShopButtonText>
                </ShopButton>
            </ShopButtonView>
            

            <View style={{height: 70}}>
                {/**this is a spacer so scroll view doesnt cover the contact button */}
            </View>
        </StyledContainer>
    );
}

export default ShopScreen;