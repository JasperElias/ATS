/*
    Drawer content. Renders All categories and corresponding exercises
    with map() function. Uses map() instead of FlatList to prevent window
    breaking.

    Also contains Home, Shop, and Contact headers with corresponding icons.
*/

// imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Accordion from './Accordion';
import CATEGORY_INFO from './CategoryInfo';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import {
    Colors
} from './../../components/styles';

const {primary, secondary, tertiary, brand, black, grey, blue} = Colors;

export default function DrawerContent(props) {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} style={{backgroundColor:`#f5f5f5`}}>
                <View style={{ marginTop: 10 }}>
                    <View style={styles.headerContainer}>
                        <Entypo name="home" size={24} color={Colors.blue} />
                        <Text style={styles.header} onPress={() => props.navigation.navigate('Home')}>
                            Home
                        </Text>
                    </View>
                    <View style={styles.headerContainer}>
                        <Entypo name="list" size={24} color={Colors.blue} />
                        <Text style={styles.header}>Categories</Text>
                    </View>
                </View>
                {CATEGORY_INFO.map((category) => {
                    return (
                        <View>
                            <Accordion
                                title={category.title}
                                exercises={category.exercises}
                                navigation={props.navigation}
                            />
                        </View>
                    )
                })}
                <View style={styles.headerContainer2}>
                    <FontAwesome name="shopping-cart" size={24} color={Colors.blue} />
                    <Text style={styles.header} onPress={() => props.navigation.navigate('Shop')}>
                        Shop
                    </Text>
                </View>
                <View style={styles.headerContainer2}>
                    <MaterialIcons name="contact-mail" size={24} color={Colors.blue} />
                    <Text style={styles.header} onPress={() => props.navigation.navigate('Contact')}>Contact</Text>
                </View>

            </DrawerContentScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        marginHorizontal: 7,
        marginBottom: 5,
        marginTop: 10,
        color: Colors.blue,
        
    },
    headerContainer2: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 7,
        marginBottom: 5,
        color: Colors.blue,
    },
    header: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '700',
        color: Colors.blue
    },
});