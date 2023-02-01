import React from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity,StatusBar } from 'react-native';

const HomeScreenn = ({ navigation,route}) => {
    return (    
      
        <View style={styles.container}>
            
          <Image
            source={
              require('./assets/valo-logo.png')
            }
            style={{width:200,height:200}}
            />
          <Text style={styles.logoText}>VavaLines{route.params.id}</Text>
          <Text style={styles.logo2Text}>Valorant Lineups</Text>
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
    btt: {
      marginTop:350,
    },
    logoText:{
      fontSize:36,
      color:'#FFF',
    },
    logo2Text:{
      fontSize:16,
      color:'#FFF'
  },
  
  });
  
  export default HomeScreenn;