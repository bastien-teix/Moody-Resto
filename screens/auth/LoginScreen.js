import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
         };
    }

    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {

            }, (error) => {
                Alert.alert(error.message);
            })
    }

    onCreateAccountPress = () => {
        var navActions = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'SignUp'})
            ]
        });

        this.props.navigation.dispatch(navActions);
    }

    onForgotPasswordPress = () => {
        var navActions = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'ForgotPassword'})
            ]
        });

        this.props.navigation.dispatch(navActions);
    }

    render() {
        return (
            <View style={ styles.container }>

                <Text>Login</Text>

                <TextInput style={ styles.input } 
                    value={ this.state.email }
                    onChangeText={(text) => { this.setState({email: text}) }}
                    underlineColorAndroid='transparent'
                    placeholder='Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <TextInput style={ styles.input } 
                    value={ this.state.password }
                    onChangeText={(pass) => { this.setState({password: pass}) }}
                    underlineColorAndroid= 'transparent'
                    placeholder='Mot de passe'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <Button title='Login' onPress={this.onLoginPress} />
                <Button title='Create Account' onPress={this.onCreateAccountPress} />
                <Button title='Forgot Password' onPress={this.onForgotPasswordPress} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        alignItems: 'center',
    },
    input: {
        marginTop: 20,
        borderBottomWidth: 2,
        borderColor: 'green',
        width: '70%',
        height: 20,
    },
    button: {
        marginTop: 20,
        backgroundColor: 'green',
        color: '#fff',
        width: 260,
        height: 20,
        borderRadius: 50
    },
});