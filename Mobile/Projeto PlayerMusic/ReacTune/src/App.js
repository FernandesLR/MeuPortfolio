import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App(){
  const [searchQuery, setSearchQuery] = useState('') // searchQuery representa o valor atual da barra de pesquisa
  const [imageColors, setImageColors] = useState({ // Coloca como padrão a cor cinza desses botões/imagens
    home: '#9F9F9F',
    song: '#9F9F9F',
    config: '#9F9F9F'
  });

  const mudarCor = (image) => {
    setImageColors(prevColors => ({ // atualiza o estado Imagecolors para uma outra cor
      ...prevColors,
      [image]: prevColors[image] === '#9F9F9F' ? '#47D7DD' : '#9F9F9F'
    }));
  };

  return(

    <LinearGradient
      colors={['#355F66', '#121820']}
      style={style.container}
    >{/* Altera a cor de fundo */}

      {/* Cabeçalho */}
      <View style={style.header}>
        <Text style={style.text}>Música</Text>
        <Pressable onPress={() => mudarCor('config')}>
          <Image 
            source={require("./assets/config.png")}
            style={[style.img, { tintColor: imageColors.config }]}
          />
        </Pressable>
      </View>

      {/* Conteúdo principal */}
      <View style={style.content}>
        {/* Barra de pesquisa */}
        <TextInput
          style={style.searchBar}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        

        {/* Seção de musicas tocadas recentemente */}
        <View style={style.recent}>
          <Text style={style.text}>Recentemente</Text>
        </View>


        {/* Seção de artistas preferido */}
        <View style={style.artist}>
          <Text style={style.text}>Artistas</Text>
        </View>
      </View>

      <View style={style.footer}>
        <Pressable onPress={() => mudarCor('home')}>
          <Image 
            source={require("./assets/home.png")}
            style={[style.img, { tintColor: imageColors.home }]}
          />
        </Pressable>

        <Pressable onPress={() => mudarCor('song')}>
          <Image 
            source={require("./assets/song.png")}
            style={[style.img, { tintColor: imageColors.song }]}
          />
        </Pressable>

        <Pressable onPress={() => mudarCor('config')}>
          <Image 
            source={require("./assets/config.png")}
            style={[style.img, { tintColor: imageColors.config }]}
          />
        </Pressable>
      </View>      
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  text: {
    fontSize: 24,
    color: "#9F9F9F",
    marginLeft: 10
  },
  img: {
    height: 80,
    width: 80,
  },
  content: {
    flex: 1,
  },
  searchBar: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: "#9F9F9F",
    alignSelf: 'center'
  },
  recent:{
    paddingLeft: 10,
    marginTop: 75,
  },
  artist:{
    paddingLeft: 10,
    marginTop: 115,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20
  }
});
