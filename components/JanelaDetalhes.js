import React from 'react';
import { Text, View, Image } from 'react-native';
import estilos from './Estilos';

function JanelaDetalhes({route}) {
  const { dados, imagem } = route.params;
  return(
    <View style={estilos.pagina}>
      <View style={estilos.containerDetalhes}>
        <Image style={estilos.imagemDesc} source={{uri: imagem}} />
        <View style={estilos.informacoes}>
          <Text style={estilos.tituloDesc}>
            {dados.nome}
          </Text>
          <Text style={estilos.tituloDesc}>
            {"R$ " + dados.preco}
          </Text>
          <Text style={estilos.desc} numberOfLines={3}>
            {"- " + dados.desc}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default JanelaDetalhes;