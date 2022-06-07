import { View, Text, Button, ImageBackground} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

import {
    Colors,
    HomeScroll,
    HomeTitleContainer,
    HomePageTitle,
    HomeSubTitleContainer,
    HomeSubTitle,
    TextContainer,
    HomeText,
    TitleBar,
    BarText,
    OverviewContainer,
    OverviewHeader,
    BioContainerTop,
    BioContainerBottom,
    HeadShot,
    BioTextContainer,
    BioText
} from './../../components/styles.js';

const HomeScreen = props => {
    return (
        
        <HomeScroll >
                <TitleBar>
                    <BarText>Instruction  •  Drills  •  Tactics</BarText>
                </TitleBar>
                
                    <ImageBackground
                        source={require('./../../assets/Montana_DanEgan_IanAnderson3.png')}
                        style={{ flex:1, resizeMode: 'cover'}}
                    >
                    <View>
                        <HomeTitleContainer contentContainerStyle={{flex: 1 }}>
                            {/**<ImageBackground 
                                source={require('./../../assets/Montana_DanEgan_IanAnderson3.png')}
                                style={{height: '62%'}}
                            >*/}
                                
                                <HomePageTitle>All-Terrain Skiing</HomePageTitle>
                                <HomePageTitle>Vol. II</HomePageTitle>
                                <HomeSubTitle>By Dan Egan</HomeSubTitle>
                            {/**</ImageBackground>  */}
                        </HomeTitleContainer>
                            <OverviewContainer>
                            <OverviewHeader style={{color: Colors.primary}}>
                                ---- Overview ----
                            </OverviewHeader>
                        </OverviewContainer>
                        <OverviewContainer >
                        
                            <TextContainer contentContainerStyle={{ }}>
                                <HomeText style={{color: Colors.red}}>
                                    The founcdation of All_terrain Skiing is built on three concepts:
                                </HomeText>
                                <HomeText>
                                    1. The Four Golden Rules of Change - Skiers need to adapt to changes in:     
                                </HomeText>
                                <HomeText style={{fontWeight: '600'}}>
                                    • Terrain     • Speed     • Conditions    • Situations
                                </HomeText>

                            </TextContainer>
                        </OverviewContainer>
                        </View>
                    </ImageBackground>
                
                {/**Bio Info Below */}
                <ImageBackground
                    source={require('./../../assets/CoverPhoto.png')}
                    style={{height: '100%'}}
                >
                    <OverviewContainer>
                        <OverviewHeader style={{color: Colors.primary}}>
                            ---- About the Author ----
                        </OverviewHeader>
                </OverviewContainer>
                    <BioContainerTop>
                        <HeadShot source={require('./../../assets/Dan_headshot.png')} />
                        <BioTextContainer>
                            <BioText>
                                Dan has mastered areas in his life most of us can only dream of.   He has been an extreme skier traversing some of the most remote and hostile places on earth. He is an author, producer, presenter, podcaster, television host, sailor, and consultant.  It is his mission to draw from his wealth of experience and extensive network to guide you along your journey and help you achieve a level of mastery in your field of play.
                            </BioText>
                        </BioTextContainer>
                        
                    </BioContainerTop>
                    <BioContainerBottom>
                        <BioTextContainer>
                            <BioText>
                                I make my living by doing all the things my parents taught me to do by the age of 10.  Skiing, sailing, and soccer have been the main stays in my life.  My parents focused on teamwork, independent thinking and self-responsibility with a clear message of building foundational skills that have carried me through my life.
                            </BioText>
                        </BioTextContainer>
                    </BioContainerBottom>
                </ImageBackground>
                <View style={{height: 30}}>

                </View>
            
        </HomeScroll>
        
    )
}

export default HomeScreen;