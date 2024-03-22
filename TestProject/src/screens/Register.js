import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [buttonColor, setButtonColor] = useState('green');

  const handleLoginPress = () => {
    navigation.replace('Login');
  };

  const handleRegisterPress = () => {
    navigation.replace('Login');
  };

  const toLevels = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match. Please check your password.");
      return;
    } else {
      // Replace the following line with your desired functionality when the user registers
      console.log('User registered:', {
        firstName,
        lastName,
        email,
        username,
        password,
      });
    }
  };

  return (
    <KeyboardAvoidingView style={[styles.appContainer, { flex: 1 }]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.inputContainer}>
        <Text style={[styles.title, styles.heading]}>REGISTER</Text>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setLastName(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={'gray'}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          placeholderTextColor={'gray'}
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <View style={styles.registerContainer}>
          <TouchableOpacity onPress={handleRegisterPress}>
            <View style={[styles.button, { backgroundColor: buttonColor }]}>
              <Text style={styles.buttonText}>REGISTER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.smallText}>Already have an account? </Text>
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={[styles.smallText, styles.linkGreen]}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
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
  registerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
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
  text: {
    marginBottom: 30,
    color: 'white',
  },
  smallText: {
    fontSize: 12,
    color: 'white'
  },
  linkGreen: {
    color: 'green',
    textDecorationLine: 'underline',
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
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Register;