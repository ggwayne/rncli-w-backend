import React, { useState } from 'react';
import { StatusBar, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Update image imports to directly reference image files
import levelsIcon from '../assets/levelsIcon.png';
import controlIcon from '../assets/controlIcon.png';
import updatesIcon from '../assets/updatesIcon.png';
import profileIcon from '../assets/profileIcon.png';

const Control = () => {
  const navigation = useNavigation();

  const navigateToScreen1 = () => {
    navigation.replace('Levels');
  };

  const navigateToScreen2 = () => {
    navigation.replace('Control');
  };

  const navigateToScreen3 = () => {
    navigation.replace('Updates');
  };

  const navigateToScreen4 = () => {
    navigation.replace('Profile');
  };

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonToggle = (buttonNumber) => {
    if (activeButton === buttonNumber) {
      setActiveButton(null);
    } else {
      if (activeButton !== null) {
        return;
      }
      setActiveButton(buttonNumber);
    }
  };

  const isButtonActive = (buttonNumber) => {
    return activeButton === buttonNumber;
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />

      <Text style={[styles.title, styles.heading]}>CONTROL</Text>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.profileInfo}>
          <View style={styles.buttonSection}>
            <Text style={styles.sectionTitle}>Valves</Text>
            <View style={styles.line}></View>

            <View style={styles.labelAndButtonContainer}>
              <Text style={styles.labelText}>Rainwater </Text>
              <TouchableOpacity
                onPress={() => handleButtonToggle(1)}
                style={[
                  styles.buttonP,
                  isButtonActive(1) ? styles.buttonOn : styles.buttonOff,
                ]}
              >
                <Text style={styles.buttonTextP}>
                  {isButtonActive(1) ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Label and Toggle Button 2 */}
            <View style={styles.labelAndButtonContainer}>
              <Text style={styles.labelText}>Deepwell</Text>
              <TouchableOpacity
                onPress={() => handleButtonToggle(2)}
                style={[
                  styles.buttonP,
                  isButtonActive(2) ? styles.buttonOn : styles.buttonOff,
                ]}
              >
                <Text style={styles.buttonTextP}>
                  {isButtonActive(2) ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Label and Toggle Button 3 */}
            <View style={styles.labelAndButtonContainer}>
              <Text style={styles.labelText}>Reservoir</Text>
              <TouchableOpacity
                onPress={() => handleButtonToggle(3)}
                style={[
                  styles.buttonP,
                  isButtonActive(3) ? styles.buttonOn : styles.buttonOff,
                ]}
              >
                <Text style={styles.buttonTextP}>
                  {isButtonActive(3) ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

 {/* Grouped Buttons with Title */}
 <View style={styles.buttonSection}>
            <Text style={styles.sectionTitle}>Pumps</Text>
            <View style={styles.line}></View>
            {/* Label and Toggle Button pH UP */}
            <View style={styles.labelAndButtonContainer}>
              <Text style={styles.labelText}>pH Up      </Text>
              <TouchableOpacity
                onPress={() => handleButtonToggle(5)}
                style={[
                  styles.buttonP,
                  isButtonActive(5) ? styles.buttonOn : styles.buttonOff,
                ]}
              >
                <Text style={styles.buttonTextP}>
                  {isButtonActive(5) ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Label and Toggle Button pH DOWN */}
            <View style={styles.labelAndButtonContainer}>
              <Text style={styles.labelText}>pH Down</Text>
              <TouchableOpacity
                onPress={() => handleButtonToggle(6)}
                style={[
                  styles.buttonP,
                  isButtonActive(6) ? styles.buttonOn : styles.buttonOff,
                ]}
              >
                <Text style={styles.buttonTextP}>
                  {isButtonActive(6) ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Label and Toggle Button Nutrients */}
            <View style={styles.labelAndButtonContainer}>
              <Text style={styles.labelText}>Nutrients </Text>
              <TouchableOpacity
                onPress={() => handleButtonToggle(7)}
                style={[
                  styles.buttonP,
                  isButtonActive(7) ? styles.buttonOn : styles.buttonOff,
                ]}
              >
                <Text style={styles.buttonTextP}>
                  {isButtonActive(7) ? 'ON' : 'OFF'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={navigateToScreen1} style={styles.bottomNavButton}>
          <Image source={levelsIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>LEVELS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToScreen2} style={styles.bottomNavButton}>
          <Image source={controlIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>CONTROL</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToScreen3} style={styles.bottomNavButton}>
          <Image source={updatesIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>UPDATES</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToScreen4} style={styles.bottomNavButton}>
          <Image source={profileIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: 0,
    //paddingTop:20,
    color: 'white',
    left: 25,
  },
  heading: {
    marginBottom: 20,
    fontSize: 50,
    fontWeight: 900,
    paddingTop: 10
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  labelP: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoP: {
    fontSize: 14,
    marginBottom: 15,
  },
  buttonP: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonTextP: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  logoutButtonP: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    width: 120,
    alignItems: 'center',
    marginVertical: 10,
  },
  logoutButtonTextP: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingVertical: 2,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30, 
  },
  bottomNavButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  bottomNavButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  line: {
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginTop: -5,
    marginBottom:20,
  },
  sectionTitle: {
    //fontFamily: 'DMSans',
    fontWeight:'bold',
    fontSize: 30,
    marginBottom: 10,
    color: 'white',  
  },
  labelAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  labelText: {
    //fontFamily:'DMSans',
    fontSize: 20,
    marginRight: 10,
    color: 'white',
    width: 120,
  },
  buttonSection: {
    marginBottom: 20,
  },
  buttonOn: {
    backgroundColor: 'lightgreen',
  },
  buttonOff: {
    backgroundColor: 'gray',
  },
});

export default Control;
