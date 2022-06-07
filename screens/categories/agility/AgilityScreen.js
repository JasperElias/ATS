import { View, Text, Button, ImageBackground} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.StatusBarHeight;

import {
    Colors,
    DescriptionScroll,
    TitleBar,
    BarText,
    DesTitleContainer,
    DesPageTitle,
    SubTitleContainer,
    SubTitle,
    OverviewContainer,
    OverviewHeader,
    TextContainer,
    DesText
} from './../../../components/descriptionStyles.js';

const AgilityScreen = props => {
    return (
        <DescriptionScroll>
            <TitleBar>
                <BarText>•  Agility •</BarText>
            </TitleBar>
            <DesTitleContainer>
                <DesPageTitle>
                    The Breakthrough Zone
                </DesPageTitle>
            </DesTitleContainer>
            <OverviewContainer>
                <OverviewHeader style={{left:'-40%', fontWeight: '600', fontSize: 20}}>
                    Intro:
                </OverviewHeader>
                <TextContainer style={{marginBottom: 10}} >
                    <DesText style={{lineHeight: 20}} >
                        Welcome to the Breakthrough Zone. The Breakthrough Zone (BZ) is the equivalent of reprogramming your computer’s hard drive. In the BZ, we update and reboot our physical and mental approach to skiing. Agility allows skiers to dance on any part of the mountain they desire, in just about any conditions. BZ skiing is all about busting wide open into new realms of experiences.
                    </DesText>
                </TextContainer>
                
                <OverviewHeader style={{left:'-32%', fontWeight: '600', fontSize: 20}}>
                    Main Points:
                </OverviewHeader>
                <TextContainer style={{width: '80%', left: '10%', marginBottom: 10}}>
                    <DesText style={{padding: 3, fontWeight: '600',}} >
                        • It’s important to find ski friends who match your motivation for improving. 
                    </DesText>
                    <DesText style={{padding: 3, fontWeight: '600',}}>
                        • You must always remain motivated enough to practice. 
                    </DesText>
                    <DesText style={{padding: 3,fontWeight: '600',}}>
                        • Focus on the basics—upper body, pole planting, and quick edge-to-edge transitions. 
                    </DesText>
                    <DesText style={{padding: 3,fontWeight: '600',}}>
                        • Turn “Oh No” into “Oh Ya.” 
                    </DesText>
                    <DesText style={{padding: 3,fontWeight: '600',}}>
                        • Switch your inner voice into positive reinforcing language, such as: “I can, I will, I am progressing
                    </DesText>
                    <DesText style={{padding: 3,fontWeight: '600',}}>
                        • Skiing is a visual sport. Find images and videos of other skiers who model your goals 
                    </DesText>

                </TextContainer>
                {/**Excercises  */}
                <TextContainer style={{marginBottom: 10}} >
                    <DesText style={{lineHeight: 20}}>
                        The discussion, drills, and skills in this final section of the book center around developing an instinctive reaction within yourself tying the whole package together to give you the time and freedom to experience the Zone of Excellence.
                    </DesText>
                </TextContainer>

                <TextContainer >
                    <OverviewHeader style={{fontSize: 20, fontWeight: '700'}}>
                        Excercises:
                    </OverviewHeader>
                    <DesText style={{padding: 3, fontWeight: '600',color: Colors.red}} >
                        •   Uphill Ski Pressure                   
                    </DesText>
                    <DesText style={{padding: 3, fontWeight: '600',color: Colors.red}} >
                        •   Drift Turns               
                    </DesText>
                    <DesText style={{padding: 3, fontWeight: '600',color: Colors.red}} >
                        •   Fall Line Skiing                
                    </DesText>
                    <DesText style={{padding: 3, fontWeight: '600',color: Colors.red}} >
                        •   The Hump of the Bump               
                    </DesText>
                    <DesText style={{padding: 3, fontWeight: '600',color: Colors.red}} >
                        •   The Joy of Skiing                  
                    </DesText>
                    <DesText style={{padding: 3, fontWeight: '600', color: Colors.red}} >
                        •   Nonstop Skiing                  
                    </DesText>
                </TextContainer>
            </OverviewContainer>

        </DescriptionScroll>
    )
}

export default AgilityScreen;