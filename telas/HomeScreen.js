import React from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity,StatusBar } from 'react-native';
import { Video } from 'expo-av';


const HomeScreen = ({ navigation }) => {
    return (    
        <View style={styles.container}>
          <Video
        source={require('../assets/video-background.mp4')}
        style={styles.video}
        muted={false}
        repeat={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        />
          <Image
            source={
              require('../assets/valo-logo.png')
            }
            style={{width:200,height:200}}
            />
          <Text style={styles.logoText}>VavaLines</Text>
          {/* <Text style={styles.logo2Text}>Valorant Lineups</Text> */}
          <View style={styles.btt}>
          <Button color={'red'} title="Começar" onPress={()=>navigation.navigate('Agents')} />
          </View>                                                                                                                                     
        </View>
        
      );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E1E1E',
      alignItems: 'center',
      justifyContent: 'center',
    },
    video: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    btt: {
      marginTop:350,
    },
    logoText:{
      fontSize:46,
      color:'#fff',
      fontWeight: 'bold',
      textDecorationColor: 'yellow',
      textShadowColor: 'red',
      textShadowRadius: 20,
      marginTop:10,

    },
    /* logo2Text:{
      fontSize:22,
      color:'#FFF',
      marginTop:10,
  }, */
  
  });
  
  export default HomeScreen;