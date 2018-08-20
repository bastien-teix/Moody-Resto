import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class LoginScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
         };
    }

    onLoginPress = () => {

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

    render() {
        return (
            <View style={ styles.container }>
                <TextInput style={ styles.input } 
                    value={ this.state.email }
                    onChangeText={(text) => { this.setState({email: text}) }}
                />
                <TextInput style={ styles.input } 
                    value={ this.state.password }
                    onChangeText={(pass) => { this.setState({password: pass}) }}
                />
                <Button title='Login' onPress={this.onLoginPress} />
                <Button title='Create Account' onPress={this.onCreateAccountPress} />
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