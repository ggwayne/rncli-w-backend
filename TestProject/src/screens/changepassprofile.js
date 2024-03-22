import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Cancel = (navigation) => {
  navigation.replace('Profile'); 
};

const ChangePasswordScreen   = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [buttonColor, setButtonColor] = useState('green');
  
    const navigation = useNavigation();
      
    const toDashboard = () => {
      if (password !== confirmPassword) {
          
        alert("Passwords don't match. Please check your password.");
        return; 
  
      }else{
        navigation.replace ('Login');
      }
  
    };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <Text style={[styles.title, styles.heading]}>UPDATE PASSWORD</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Old Password"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="New Password"
          placeholderTextColor={'gray'}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm New Password"
          placeholderTextColor={'gray'}
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <TouchableOpacity onPress={toDashboard}>
          <View style={[styles.resetbutton, { backgroundColor: buttonColor }]}>
            <Text style={styles.buttonText}>RESET PASSWORD</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Cancel(navigation)}>
          <View style={[styles.button]}>
          <Text style={styles.buttonText}>CANCEL</Text>
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
    marginBottom: 40,
    fontSize: 25,
  },
  text: {
    marginBottom: 30,
    color: 'white',
  },
  smallText: {
    fontSize: 12,
  },
  linkGreen: {
    color: 'green',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#fd1a1a',
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetbutton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 25,
    marginTop: 35,
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default ChangePasswordScreen;