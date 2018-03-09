import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Constants, Color, Images } from '../../themes'
export default class Welcome extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={Images.Landingscreen} style={styles.container}>
                <View style={{ flex: 1 }} >
                    <View style={styles.hicontainer}>
                        <Text style={styles.upperTextStyle}>Hi</Text>
                    </View>
                    <View style={styles.container} >

                        <TouchableOpacity style={styles.login}
                            onPress={() => navigate('Third')}
                        >
                            <Text style={styles.text} >Log in</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.signup} onPress={() => navigate('Second')}>
                            <Text style={styles.text} >Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground >
        )
    }

    goToSignUp = () => {
        alert("Its clicked man !!!");
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
    },
    text: {
        color: 'white',
        fontWeight: '900',
        fontSize: Constants.UnitFontSize*20,
    },

    login: {
        backgroundColor: '#FF398A',
        width: Constants.UnitMargin*650,
        height: Constants.UnitMargin*650/239*45,
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Constants.UnitMargin*650/239*45/2,
        shadowOffset:{  width: 0,  height: 0,  },
        shadowColor: 'black',
        shadowOpacity: 0.4,
    },
    signup: {
        backgroundColor: '#007AFF',
        width: Constants.UnitMargin*650,
        height: Constants.UnitMargin*650/239*45,
        marginTop: Constants.UnitMargin*650/239*25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Constants.UnitMargin*650/239*45/2,
        shadowOffset:{  width: 0,  height: 0,  },
        shadowColor: 'black',
        shadowOpacity: 0.4,
    },
    hicontainer: {
        height: 280,
        left: 0, marginTop: 20,
        alignItems: 'flex-start'
    },
    upperTextStyle: {
        fontSize: Constants.UnitFontSize*170,
        color: 'white',
        fontWeight: '900'
    },
    container1: {

    }

});
