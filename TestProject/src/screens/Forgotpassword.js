import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const [phoneNum, setPhoneNumber] = useState('');
  const [buttonColor, setButtonColor] = useState('green');
  const navigation = useNavigation();

  const forgotPassword = () => {
    navigation.navigate('VerifyCode');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Text style={[styles.title, styles.heading]}>Forgot Password?</Text>
        <Text style={{ color: '#ffffff', fontWeight: '100', fontSize:12, marginBottom: 40 }}>We will send you a verification code.</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter Phone Number"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TouchableOpacity onPress={forgotPassword}>
          <View style={[styles.button, { backgroundColor: buttonColor }]}>
            <Text style={styles.buttonText}>SEND CODE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    padding: 20, 
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    backdropFilter: 'blur(5px)', 
    border: '1px solid rgba(255, 255, 255, 0.3)', 
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    width: '80%',
    marginBottom: 10,
    padding: 8,
    color: 'white'
  },
  heading: {
    marginBottom: 8,
    fontSize: 25,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ForgotPassword;
