import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import levelsIcon from '../assets/levelsIcon.png';
import controlIcon from '../assets/controlIcon.png';
import updatesIcon from '../assets/updatesIcon.png';
import profileIcon from '../assets/profileIcon.png';

const DashboardScreen = () => {
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

  const tankLevels = {
    Rainwater: 1.0, // Example tank level percentage for Rainwater
    Reservoir: 0.7, // Example tank level percentage for Reservoir
    Deepwell: 0.3, // Example tank level percentage for Deepwell
  };

  const doserLevels = {
    pHUp: 1.0, // Example tank level percentage for Rainwater
    pHDown: 0.3, // Example tank level percentage for Reservoir
    Nutrients: 0.5, // Example tank level percentage for Deepwell
  };

  const renderTankLevel = (label, tankLevel, tankColor) => {
    const tankWidth = 100;
    const tankHeight = 200;
    return (
      <View style={styles.tankLevelContainer}>
        <Text style={styles.tankLabel}>{label}</Text>
        <View style={[styles.tank, { backgroundColor: tankColor, height: tankHeight * tankLevel, width: tankWidth, marginBottom: 30 }]}>
          <Text style={styles.tankPercentage}>{`${(tankLevel * 100).toFixed(0)}%`}</Text>
        </View>
      </View>
    );
  };

  

  return (
    <View style={styles.appContainer}>
  <StatusBar style="auto" />

  {/* Header */}
  <Text style={[styles.title, styles.heading]}>LEVELS</Text>

  {/* Text under LEVELS */}
  <Text style={[styles.subTitle, { position: 'absolute', top: '17%', left: '50%', transform: [{ translateX: -170 }, { translateY: -30 }] }]}>Tank Levels</Text>
  <View style={[styles.line, { position: 'absolute', top: '17%', left: '50%', transform: [{ translateX: -180 }, { translateY: -5 }] }]}></View>
  <Text style={[styles.subTitle, { position: 'absolute', top: '17%', left: '50%', transform: [{ translateX: -170 }, { translateY: 320 }] }]}>Dosers Levels</Text>
  <View style={[styles.line, { position: 'absolute', top: '17%', left: '50%', transform: [{ translateX: -180 }, { translateY: 345 }] }]}></View>

  {/* Upper Container (Tank Levels) */}
  <View style={styles.upperContainer}>
    {renderTankLevel('Rainwater', tankLevels.Rainwater, '#6ecaff')}
    {renderTankLevel('Reservoir', tankLevels.Reservoir, '#7cf786')}
    {renderTankLevel('Deepwell', tankLevels.Deepwell, '#6ecaff')}
  </View>

  {/* Bottom Container (Doser Levels) */}
  <View style={styles.bottomContainer}>
  {renderTankLevel('pH Up', doserLevels.pHUp, '#b6a9ff')}
  {renderTankLevel('pH Down', doserLevels.pHDown, '#fc6767')}
  {renderTankLevel('Nutrients', doserLevels.Nutrients, '#fcf48b')}
</View>

  {/* Bottom Navigation Inside appContainer */}
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
    backgroundColor: 'black'
  },
  title: {
    position: 'absolute',
    top: 0,
    color: 'white',
    left: 25,
    marginBottom: 40,
  },
  heading: {
    fontSize: 50,
    fontWeight: '900',
    paddingTop:10
    
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flex: 1,
    width: '100%',
    marginTop: 110,
    paddingHorizontal: 20,
  },
  subTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
    
  },
  line: {
    width: 350, // Adjust the width of the line as needed
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom:10,
    marginTop:5,
  },
  
  bottomContainer: {
    top: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 140,
    paddingTop: -10
    
  },
  sensorTitle: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
  
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
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  tankLevelContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  tankLabel: {
    color: 'white',
    marginBottom: 5,
    fontSize: 15,
  },
  tank: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 5,
  },
  tankPercentage: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
});

export default DashboardScreen;
