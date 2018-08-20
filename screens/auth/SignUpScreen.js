import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class SignUpScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
            passwordConfirm: '',
         };
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
                <TextInput style={ styles.input } 
                    value={ this.state.passwordConfirm }
                    onChangeText={(pass) => { this.setState({passwordConfirm: pass}) }}
                />
                <Button title='Sign Up' onPress={this.onSignUpPress} />
                <Button title='Login' onPress={this.onBackLoginPress} />
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