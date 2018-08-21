import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import * as firebase from 'firebase';

export default class ForgotPasswordScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            email: ''
         };
    }

    onResetPasswordPress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert('Mot de passe réinitialisé, un email a été envoyé !');
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

                <Text>Forgot Password</Text>

                <TextInput style={ styles.input } 
                    value={ this.state.email }
                    onChangeText={(text) => { this.setState({email: text}) }}
                    underlineColorAndroid= 'transparent'
                    placeholder='Mot de passe'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            
                <Button title='Reset password' onPress={this.onResetPasswordPress} />
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
      paddingLeft: 10,
    },
});