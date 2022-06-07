import React, {useState, useEffect} from 'react';
import { 
    View, 
    Text,
    FlatList,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

import {
    Colors, 
    InputName,
    MessageBox,
    ContactScroll,
    ShopTitle,
    ShopButton,
    ShopButtonText,
    StyledFormArea,
    InputLabel
} from './../../components/styles.js';

import CheckBox from '../../components/CheckBox';

const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} >
        <Text>{item.label}</Text>
    </TouchableOpacity>
);

//ContactForm Screen
const ContactForm = props => {

    //**Controlled input text for phone number */
    const [text, setText] = useState('');
    const [code, setCode] = useState('228');
    const [textSize, setTextSize] = useState(15);
    
    //makes placeholder smaller than input 
    useEffect(() => {
        if (text.length > 0) setTextSize(18)
        else if (text.length === 0) setTextSize(15)
    }, [text])

    //controls text Input 
    const onTextChange = (number) => {
        const num = parsePhoneNumberFromString(number, CountryCodeKey[code][0])
        let reg = /^[0-9]/
        if (!!num && text.length > number.length && !reg.test(text[text.length -1])) {
            let phone = num.nationalNumber.split('')
            phone.pop()
            phone = phone.join('')
            setText(phone)
        } else {
            setText(new AsYouType(CountryCodeKey[code][0]).input(number))
        }
    }

    //const sendInfo
    const sendInfo = () => {
        const num = parsePhoneNumberFromString(text, CountryCodeKey[code][0])
        if (!!num && num.isPossible()) {
            console.log('Phone Number', num.number)
        } else {
            alert('Please enter a valid phone number')
        }
    }

    //CheckBox States
    const [skiTrips, setSkiTrips] = useState(false);
    const [skiClinics, setSkiClinics] = useState(false);
    const [consultant, setConsultant] = useState(false);
    const [webinar, setWebinar] = useState(false);
    const [producer, setProducer] = useState(false);
    const [presenter, setPresenter] = useState(false);

    //Terms and conditions
    const [termsConditions, setTermsConditions] = useState(false);

    return (
        <ContactScroll contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            
            <StyledFormArea>

                <InputLabel>First *</InputLabel>
                <InputName
                    label="First Name"
                    placeholder="Dan"
                />

                <InputLabel>Last</InputLabel>
                <InputName
                    label="Last Name"
                    placeholder="Egan"
                />

                <InputLabel>Email *</InputLabel>
                <InputName
                    label="Email"
                    placeholder="DanEgan@DeganMedia.com"
                />

                <InputLabel>Phone #</InputLabel>
                <InputName 
                    onChangeText={num => onTextChange(num)} 
                    value={text} 
                    keyboardType='phone-pad' 
                    placeholder='Enter Phone Number' 
                    textAlign='left' 
                />
                
                
                {/**Check Box List */}
                <InputLabel>I'm interested in: </InputLabel>
                <CheckBox
                    title="Ski Trips"
                    onPress={() => setSkiTrips(!skiTrips)}
                    isChecked={skiTrips}
                    style={{color: Colors.primary}}
                />
                <CheckBox
                    title="Ski Clinics"
                    onPress={() => setSkiClinics(!skiClinics)}
                    isChecked={skiClinics}
                    style={{color: Colors.primary}}
                />
                <CheckBox
                    title="Consultant"
                    onPress={() => setConsultant(!consultant)}
                    isChecked={consultant}
                    style={{color: Colors.primary}}
                />
                <CheckBox
                    title="Webinar Like a Boss!"
                    onPress={() => setWebinar(!webinar)}
                    isChecked={webinar}
                    style={{color: Colors.primary}}
                />
                <CheckBox
                    title="Producer"
                    onPress={() => setProducer(!producer)}
                    isChecked={producer}
                    style={{color: Colors.primary}}
                    textColor={Colors.primary}
                />
                <CheckBox
                    title="Presenter"
                    onPress={() => setPresenter(!presenter)}
                    isChecked={presenter}
                    style={{titleColor: Colors.primary}}
                    titleColor={Colors.primary}
                />
                
                <InputLabel style={{marginTop: 5}}>How can we help you?</InputLabel>
                <MessageBox
                    label="messageBox"
                    placeholder="Add message here"
                    multiline={true}
                />
                <CheckBox
                    title="Terms & Conditions"
                    onPress={() => setTermsConditions(!termsConditions)}
                    isChecked={termsConditions}
                />

                <ShopButton
                    title = "SubmitInfo"
                    onPress={ () => 
                        {WebBrowser.openBrowserAsync('https://dan-egan-shop.com/') }
                    }
                    style={{alignSelf: 'center', marginTop: 10}}
                >
                    <ShopButtonText>Submit</ShopButtonText>
                </ShopButton>

                <View style={{height: 70}}>
                {/**this is a spacer so scroll view doesnt cover the contact button */}
                </View>
            </StyledFormArea>
        </ContactScroll>
        
    );
}
const styles = StyleSheet.create({
    app: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    number: {
      flexDirection: "row",
      justifyContent: 'flex-start', 
      alignItems: 'center',
      width: '100%', 
      height: 95,
      
    },
    picker: {
      width: 90, 
      flex: 1,
      backgroundColor: "#ffffff",
      
    },
  })

export default ContactForm;
