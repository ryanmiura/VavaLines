import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity,Dimensions } from 'react-native';


const images = [
  { id: 1, source: require('../assets/agents/Brim.png') },
  { id: 2, source: require('../assets/agents/Kayo.png') },
  { id: 3, source: require('../assets/agents/Kj.png') },
  { id: 4, source: require('../assets/agents/Sova.png') },
  { id: 5, source: require('../assets/agents/Viper.png') },
  { id: 6, source: require('../assets/agents/Phoenix.png') },
  { id: 7, source: require('../assets/agents/Raze.png') },
  { id: 8, source: require('../assets/agents/Sage.png') },
  { id: 9, source: require('../assets/agents/Yoru.png') },
];

const AgentScreen = ({ navigation }) => {
  const handleImagePress = (id) => {
    if(id==1){
      navigation.navigate('Maps/Brimstone', { id });
    }else if(id==2){
      navigation.navigate('Maps/Kayo', { id });
    }else if(id==3){
      navigation.navigate('Maps/Killjoy', { id });
    }else if(id==4){
      navigation.navigate('Maps/Sova', { id });
    }else if(id==5){
      navigation.navigate('Maps/Viper', { id });
    }else if(id==6){
      navigation.navigate('Maps/Phoenix', { id });
    }else if(id==7){
      navigation.navigate('Maps/Raze', { id });
    }else if(id==8){
      navigation.navigate('Maps/Sage', { id });
    }else{
      navigation.navigate('Maps/Yoru', { id });
    }
  };

  return (
    <View style={styles.container}>
        {images.map((image) => (
          <TouchableOpacity
            key={image.id}
            onPress={() => handleImagePress(image.id)}
          >
            <Image source={image.source} style={styles.image} />
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flex: 1,
    paddingTop:20,
    backgroundColor:'#1E1E1E',
  
  },
  image: {
    width: Dimensions.get('window').width / 2 - 20,
    height: Dimensions.get('window').width / 3 - 15,
    borderRadius: 10,
    marginBottom: 20, 
  },

});

export default AgentScreen;
