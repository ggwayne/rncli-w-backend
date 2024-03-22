import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Editprofile() {
  const navigation = useNavigation();

  const handleSaveChanges = () => {
    navigation.replace('Profile'); // Assuming you have a screen named 'EditProfile'
  };

  const handleCancel = () => {
    navigation.replace('Profile'); 
  };
  
  return (
    <KeyboardAvoidingView style={[styles.appContainer, { flex: 1 }]} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>EDIT PROFILE</Text>
      </View>

      {/* Form Fields */}
      <View style={styles.formFields}>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Full Name</Text>
          <TextInput
            defaultValue="Juan Dela Cruz"
            style={styles.fieldInput}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Username</Text>
          <TextInput
            defaultValue="juandc4545"
            style={styles.fieldInput}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Email</Text>
          <TextInput
            defaultValue="juandelacruz@email.com"
            style={styles.fieldInput}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Phone Number</Text>
          <TextInput
            defaultValue="09294452980"
            style={styles.fieldInput}
          />
        </View>
{/* Update Button */}
        <TouchableOpacity 
          style={styles.updateButton}
          onPress={handleSaveChanges}
        >
          <Text style={styles.updateButtonText}>SAVE CHANGES</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={handleCancel}
        >
          <Text style={styles.cancelButtonText}>CANCEL</Text>
        </TouchableOpacity>
          
        
      </View>
    </KeyboardAvoidingView>
  );
}




const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  topBar: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 1,
    paddingTop: 5,
    transform: [{ translateX: -5 }, { translateY: 10 }],
  },
  formFields: {
    alignItems: 'center',
    paddingTop: 70,
  },
  field: {
    marginBottom: 16,
    width: '70%',
  },
  fieldLabel: {
    fontSize: 14,
    color: '#8a8a8a',
  },
  fieldInput: {
    height: 40,
    backgroundColor: '#474241',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop: 4,
    color: 'white',
  },
  updateButton: {
    backgroundColor: '#008000',
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  cancelButton: {
    backgroundColor: '#fd1a1a',
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

