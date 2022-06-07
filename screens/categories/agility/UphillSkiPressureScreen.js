import { View, Text, } from 'react-native';

import {
    Colors,
    ExcerciseScroll,
    TitleBar,
    BarText,
    ExContainerBottom,
    ExContainerTop,
    ExTextContainer,
    ExText,
    PosterImage,
    OverviewContainer,
    OverviewHeader,
    VideoContainer,
} from './../../../components/excerciseStyles.js';



const {primary, secondary, tertiary, black, grey, blue, red, darkLight} = Colors;

const UphillSkiPressureScreen = props => {
    return (
        <ExcerciseScroll>
            <TitleBar>
                <BarText>
                    Uphill Ski Pressure
                </BarText>
            </TitleBar>
            <OverviewContainer>
                <OverviewHeader>
                    ----- Overview -----
                </OverviewHeader>
            </OverviewContainer>
            <VideoContainer>

            </VideoContainer>
            <ExContainerTop>
                <ExTextContainer>
                    <ExText>
                        Add text here
                    </ExText>
                </ExTextContainer>
                <PosterImage
                    source={require('./../../../assets/ski_drop_DanEgan.png')}
                />
            </ExContainerTop>
        </ExcerciseScroll>

    )
}

export default UphillSkiPressureScreen;