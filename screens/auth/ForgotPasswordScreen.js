import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

export default class ForgotPasswordScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return <Text style={styles.container}>ForgotPasswordScreen</Text>
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