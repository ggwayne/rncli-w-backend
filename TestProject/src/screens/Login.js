import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    props.navigation.replace('Levels');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Text style={[styles.title, styles.heading]}>LOGIN</Text>
        <Text style={styles.text}>Welcome to HydroApp!</Text>
        <TextInput
          style={[styles.textInput]}
          placeholder="Username"
          placeholderTextColor={'gray'}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={[styles.textInput]}
          placeholder="Password"
          placeholderTextColor={'gray'}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={[styles.button]} onPress={handleLogin}>
          <Text style={[styles.buttonText]}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.smallText}>No account? </Text>
        <TouchableOpacity onPress={() => props.navigation.replace('Register')}>
          <Text style={[styles.smallText, styles.linkGreen]}>Register Here</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate ('ForgotPassword')}>
          <Text style={[styles.smallText, styles.linkGreen]}>Forgot Password?</Text>
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
  
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
  text: {
    marginBottom: 30,
    color: 'lightgreen'
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
    marginBottom:10 ,
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

export default Login;