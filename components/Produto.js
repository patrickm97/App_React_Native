import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import estilos from './Estilos';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { db, storage } from '../config';

const Produto = (props) => {
  
  const [image, setImage] = useState(null);

  useEffect(() => {
    storage.ref("Images/" + props.item.imageName)
    .getDownloadURL()
    .then((url) => {
      setImage(url);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [props.item.imageName]);

  return(
    <View style={estilos.containerProdutos}>
      <TouchableOpacity 
      onPress={() => props.navigation.navigate("Detalhes",{
        dados: props.item,
        imagem: image ? image : null
      })}>
        <Image source={image ? {uri: image} : null} style={estilos.imagem}/>
      </TouchableOpacity>
      <View style={estilos.informacoes}>
        <TouchableOpacity
        onPress={() => props.navigation.navigate("Detalhes",{
        dados: props.item,
        imagem: image ? image : null
        })}>
          <Text style={estilos.texto} numberOfLines={2}>
            {props.item.nome}
          </Text>
        </TouchableOpacity>
        <View style={estilos.estrelas}>
          {Array(5).fill().map((item,idx) => (
            <MaterialCommunityIcons 
            style={estilos.estrela} 
            name={idx < props.item.avaliacao ? 'star' : 'star-outline'} 
            color={'blue'} 
            size={18} 
            />))
          }
        </View>
        <Text style={estilos.preco}>{"R$ " + props.item.preco}</Text>
      </View>
    </View>
  );
}

export default Produto;