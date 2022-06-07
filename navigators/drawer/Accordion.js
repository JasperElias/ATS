/*
    Accordion drop down. Uses React Native paper for Accordion,
    and Section packages. 
    
    Renders all exercises based on index using map() function.

    Note: DrawerItems navigate to Drawer.Screens found in AppNavigator.js
    (i.e. DrawerItem with onPress to 'Home' navigates to Drawer.Screen 
    where name="Home").
*/

// imports
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Drawer, List } from 'react-native-paper';
import { DrawerItem } from '@react-navigation/drawer';

import {
    Colors
} from './../../components/styles';

const {primary, secondary, tertiary, brand, black, grey, blue} = Colors;

// Function that navigates to correct screen based on 
// the category's title
function getScreen(categoryTitle, exercise, props) {

    if (categoryTitle === 'Agility') {
        if (exercise === 'Description') {
            props.navigation.navigate('AgilityDesc')
        }
        else if (exercise === 'Drift Turns') {
            props.navigation.navigate('AgilityDriftTurns')
        }
        else if (exercise === 'Uphill Ski Pressure') {
            props.navigation.navigate('AgilityUphillSki')
        }

        else if (exercise === 'Fall Line Skiing') {
            props.navigation.navigate('AgilityFallLine')
        }
        else if (exercise === 'The Hump of the Bump') {
            props.navigation.navigate('AgilityHumpBump')
        }

        else if (exercise === 'The Joy of Skiing') {
            props.navigation.navigate('AgilityJoy')
        }
        else if (exercise === 'Nonstop Skiing') {
            props.navigation.navigate('AgilityNonstop')
        }
    }
    else if (categoryTitle === 'Balance') {
        if (exercise === 'Description') {
            props.navigation.navigate('BalanceDesc')
        }
        // else if (exercise === 'Drift Turns') {
        //     props.navigation.navigate('BalanceDriftTurns')
        // }
        // else if (exercise === 'Uphill Ski Pressure') {
        //     props.navigation.navigate('BalanceUphillSki')
        // }

        // else if (exercise === 'Fall Line Skiing') {
        //     props.navigation.navigate('BalanceFallLine')
        // }
        // else if (exercise === 'The Hump of the Bump') {
        //     props.navigation.navigate('BalanceHumpBump')
        // }

        // else if (exercise === 'The Joy of Skiing') {
        //     props.navigation.navigate('BalanceJoy')
        // }
        // else if (exercise === 'Nonstop Skiing') {
        //     props.navigation.navigate('BalanceNonstop')
        // }
    }
    else if (categoryTitle === 'Fluidity') {
        if (exercise === 'Description') {
            props.navigation.navigate('FluidityDesc')
        }
        else if (exercise === 'Thousand Steps') {
            props.navigation.navigate('ThousandSteps')
        }
        else if (exercise === 'Selective Edge Pressure') {
            props.navigation.navigate('SelectEdgePress')
        }
        else if (exercise === 'The Angle of Entry') {
            props.navigation.navigate('AngleEntry')
        }
        else if (exercise === 'Arcing a Turn') {
            props.navigation.navigate('ArcingTurn')
        }
        else if (exercise === 'Shorten your Transitions Fun And Games') {
            props.navigation.navigate('ShortTransition')
        }
        else if (exercise === 'You Go Where You Look') {
            props.navigation.navigate('GoWhere')
        }
        else if (exercise === 'Dropping and Settling In') {
            props.navigation.navigate('DropSettleIn')
        }
    }
    else if (categoryTitle === 'Power') {
        if (exercise === 'Description') {
            props.navigation.navigate('PowerDesc')
        }
        else if (exercise === 'Long Turns for Stability') {
            props.navigation.navigate('LongTurn')
        }
        else if (exercise === 'Power Position') {
            props.navigation.navigate('PowerPosition')
        }
        else if (exercise === 'Power Position Turn') {
            props.navigation.navigate('PowerPosTurn')
        }
        else if (exercise === 'Power Slide') {
            props.navigation.navigate('PowerSlide')
        }
        else if (exercise === 'Power Slide To Carve') {
            props.navigation.navigate('PowerSlideCarve')
        }
        else if (exercise === 'Power Slide To Traverse') {
            props.navigation.navigate('PowerSlideTraverse')
        }
    }
    else if (categoryTitle === 'Upper Body') {
        if (exercise === 'Description') {
            props.navigation.navigate('UpperBodyDesc')
        }
        else if (exercise === 'Downhill Hand Sweep') {
            props.navigation.navigate('DownhillHandSweep')
        }
        else if (exercise === 'Look Down The Hill') {
            props.navigation.navigate('LookDown')
        }
        else if (exercise === 'Mogul Pole') {
            props.navigation.navigate('MogulPole')
        }
        else if (exercise === 'Pole Clapping') {
            props.navigation.navigate('PoleClapping')
        }
        else if (exercise === 'Poles behind your Back Hand') {
            props.navigation.navigate('PolesBackHand')
        }
        else if (exercise === 'Ski without Poles') {
            props.navigation.navigate('SkiWithoutPoles')
        }
    }
}

const Accordion = props => {
    return (
        <View style={{ flex: 1 }}>
            <List.Accordion
                title={props.title}
                titleStyle={styles.accordianTitle}
                style={styles.drawerAccordion}
            >
                <Drawer.Section style={styles.drawerSection}>
                    {props.exercises.map((exercise) => {
                        return (
                            <View>
                                <DrawerItem
                                    labelStyle={styles.drawerLabel}
                                    label={exercise.eTitle}
                                    onPress={() => {
                                        // props.navigation.navigate('Home')
                                        getScreen(props.title, exercise.eTitle, props)
                                    }}
                                    style={styles.drawerItem}
                                />
                            </View>
                        );
                    })}
                </Drawer.Section>
            </List.Accordion>
        </View>
    )
}

export default Accordion;

const styles = StyleSheet.create({
    drawerAccordion: {
        padding: -10,

    },
    drawerSection: {
        marginBottom: '1%',
        backgroundColor: Colors.darkLight,
    },
    drawerItem: {
        fontSize: 12,
        marginVertical: 3,
        marginLeft: 30,
        color: Colors.blue,
        borderWidth: 1,
        borderColor: Colors.blue,
        backgroundColor: Colors.primary,
        
    },
    drawerLabel: {
        fontSize:13,
        fontWeight: '400',
        color: Colors.blue
    },
    accordianTitle: {
        fontSize: 17, 
        fontWeight: '700',
        left: 15, 
        color: Colors.blue
        
    },
});