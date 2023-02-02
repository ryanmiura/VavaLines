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
];

const AgentScreen = ({ navigation }) => {
  const handleImagePress = (id) => {
    // Aqui você pode navegar para outra tela usando navigation.navigate
    navigation.navigate('Teste', { id });
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


