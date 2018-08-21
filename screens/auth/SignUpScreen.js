import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import * as firebase from 'firebase';

export default class SignUpScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
            passwordConfirm: '',
         };
    }

    onSignUpPress = () => {
        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert('Les deux mot de passe ne sont pas identiques...');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {

            }, (error) => {
                Alert.alert(error.message);
            })
    }

    onBackLoginPress = () => {
        var navActions = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Login'})
            ]
        });

        this.props.navigation.dispatch(navActions);
    }

    render() {
        return (
            <View style={ styles.container }>

                <Text>Sign Up</Text>

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
                <TextInput style={ styles.input } 
                    value={ this.state.passwordConfirm }
                    onChangeText={(pass) => { this.setState({passwordConfirm: pass}) }}
                    underlineColorAndroid= 'transparent'
                    placeholder='Mot de passe'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <Button title='Sign Up' onPress={this.onSignUpPress} />
                <Button title='Back to Login' onPress={this.onBackLoginPress} />
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
        width: '70%',
        height: 20,
    },
});