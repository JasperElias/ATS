/*
    App navigator. Main body of the app, and contains the drawer. 
    Note: Version 5 for react-navigation, but installed 6.
*/

// Common imports.
import React from 'react';
import { View, Button } from 'react-native';

// Drawer imports.
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './drawer/DrawerContent';

// Agility screen imports.
import AgilityScreen from '../screens/categories/agility/AgilityScreen';
import DriftTurnsScreen from '../screens/categories/agility/DriftTurnsScreen';
import UphillSkiPressureScreen from '../screens/categories/agility/UphillSkiPressureScreen';
import FallLineSkiingScreen from '../screens/categories/agility/FallLineSkiingScreen';
import HumpBumpScreen from '../screens/categories/agility/HumpBumpScreen';
import NonstopSkiingScreen from '../screens/categories/agility/NonstopSkiingScreen';
import JoySkiingScreen from '../screens/categories/agility/JoySkiingScreen';

// Balance screen imports.
import BalanceScreen from '../screens/categories/balance/BalanceScreen';

// Fluidity screen imports
import FluidityScreen from '../screens/categories/fluidity/FluidityScreen';
import AngleEntry from '../screens/categories/fluidity/AngleEntry';
import ArcingTurn from '../screens/categories/fluidity/ArcingTurn';
import DropSettleIn from '../screens/categories/fluidity/DropSettleIn';
import GoWhere from '../screens/categories/fluidity/GoWhere';
import SelectEdgePress from '../screens/categories/fluidity/SelectEdgePress';
import ShortTransition from '../screens/categories/fluidity/ShortTransition';
import ThousandSteps from '../screens/categories/fluidity/ThousandSteps';

// Power screen imports.
import PowerScreen from '../screens/categories/power/PowerScreen';
import LongTurn from '../screens/categories/power/LongTurn';
import PowerPosition from '../screens/categories/power/PowerPosition';
import PowerPosTurn from '../screens/categories/power/PowerPosTurn';
import PowerSlide from '../screens/categories/power/PowerSlide';
import PowerSlideCarve from '../screens/categories/power/PowerSlideCarve';
import PowerSlideTraverse from '../screens/categories/power/PowerSlideTraverse';

// Upper-body screen imports.
import UpperBodyScreen from '../screens/categories/upperBody/UpperBodyScreen';
import DownhillHandSweep from '../screens/categories/upperBody/DownhillHandSweep';
import LookDown from '../screens/categories/upperBody/LookDown';
import MogulPole from '../screens/categories/upperBody/MogulPole';
import PoleClapping from '../screens/categories/upperBody/PoleClapping';
import PolesBackHand from '../screens/categories/upperBody/PolesBackHand';
import SkiWithoutPoles from '../screens/categories/upperBody/SkiWithoutPoles';

// Non-category imports.
import ShopScreen from '../screens/shop/ShopScreen';
import ContactForm from '../screens/contact/ContactForm';
import HomeScreen from '../screens/home/HomeScreen';



// Drawer Nav variable. 
const Drawer = createDrawerNavigator();


function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='HomeScreen' drawerContent={props => <DrawerContent {...props}  />}>
                {/* Non-category Screens */}
                <Drawer.Screen name='Home' component={HomeScreen} />
                <Drawer.Screen name='Shop' component={ShopScreen} />
                <Drawer.Screen name='Contact' component={ContactForm} />
                {/* Agility Screens */}
                <Drawer.Screen name='AgilityDesc' component={AgilityScreen} options={{ title: 'Description' }} />
                <Drawer.Screen name='AgilityDriftTurns' component={DriftTurnsScreen} options={{ title: 'Drift Turns' }} />
                <Drawer.Screen name='AgilityUphillSki' component={UphillSkiPressureScreen} options={{ title: 'Uphill Ski Pressure' }} />
                <Drawer.Screen name='AgilityFallLine' component={FallLineSkiingScreen} options={{ title: 'Fall Line Skiing' }} />
                <Drawer.Screen name='AgilityHumpBump' component={HumpBumpScreen} options={{ title: 'The Hump of the Bump' }} />
                <Drawer.Screen name='AgilityJoy' component={JoySkiingScreen} options={{ title: 'The Joy of Skiing' }} />
                <Drawer.Screen name='AgilityNonstop' component={NonstopSkiingScreen} options={{ title: 'Nonstop Skiing' }} />

                {/* Balance Screens */}
                <Drawer.Screen name='BalanceDesc' component={BalanceScreen} options={{ title: 'Description' }} />

                {/* Fluidity Screens */}
                <Drawer.Screen name='FluidityDesc' component={FluidityScreen} options={{ title: 'Description' }} />
                <Drawer.Screen name='AngleEntry' component={AngleEntry} options={{ title: 'The Angle of Entry' }} />
                <Drawer.Screen name='ArcingTurn' component={ArcingTurn} options={{ title: 'Arcing a Turn' }} />
                <Drawer.Screen name='DropSettleIn' component={DropSettleIn} options={{ title: 'Dropping & Settling In' }} />
                <Drawer.Screen name='GoWhere' component={GoWhere} options={{ title: 'You Go Where You Look' }} />
                <Drawer.Screen name='SelectEdgePress' component={SelectEdgePress} options={{ title: 'Selective Edge Pressure' }} />
                <Drawer.Screen name='ShortTransition' component={ShortTransition} options={{ title: 'Shorten your Transitions Fun & Games' }} />
                <Drawer.Screen name='ThousandSteps' component={ThousandSteps} options={{ title: 'Thousand Steps' }} />

                {/* Power Screens */}
                <Drawer.Screen name='PowerDesc' component={PowerScreen} options={{ title: 'Description' }} />
                <Drawer.Screen name='LongTurn' component={LongTurn} options={{ title: 'Long Turns for Stability' }} />
                <Drawer.Screen name='PowerPosition' component={PowerPosition} options={{ title: 'Power Position' }} />
                <Drawer.Screen name='PowerPosTurn' component={PowerPosTurn} options={{ title: 'Power Position Turn' }} />
                <Drawer.Screen name='PowerSlide' component={PowerSlide} options={{ title: 'Power Slide' }} />
                <Drawer.Screen name='PowerSlideCarve' component={PowerSlideCarve} options={{ title: 'Power Slide to Carve' }} />
                <Drawer.Screen name='PowerSlideTraverse' component={PowerSlideTraverse} options={{ title: 'Power Slide to Traverse' }} />

                {/* Upper-body Screens */}
                <Drawer.Screen name='UpperBodyDesc' component={UpperBodyScreen} options={{ title: 'Description' }} />
                <Drawer.Screen name='DownhillHandSweep' component={DownhillHandSweep} options={{ title: 'Downhill Hand Sweep' }} />
                <Drawer.Screen name='LookDown' component={LookDown} options={{ title: 'Look Down the Hill' }} />
                <Drawer.Screen name='MogulPole' component={MogulPole} options={{ title: 'Mogul Pole' }} />
                <Drawer.Screen name='PoleClapping' component={PoleClapping} options={{ title: 'Pole Clapping' }} />
                <Drawer.Screen name='PolesBackHand' component={PolesBackHand} options={{ title: 'Poles Behind your Back Hand' }} />
                <Drawer.Screen name='SkiWithoutPoles' component={SkiWithoutPoles} options={{ title: 'Ski without Poles' }} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;