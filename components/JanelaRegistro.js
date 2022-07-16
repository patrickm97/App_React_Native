import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Platform, Image, TextInput, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import estilos from './Estilos';
import { storage, db } from '../config';

export default function JanelaRegistro() {
  const [image, setImage] = useState(null);
  const [nome, setNome] = useState("");
  const [desc, setDesc] = useState("");
  const [imageName, setImageName] = useState("");
  const [avaliacao, setAvaliacao] = useState(0);
  const [preco, setPreco] = useState(0);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Erro, precisamos de acesso à galeria de fotos');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if(!result.cancelled) {
      console.log(result.uri);
      setImage(result.uri);
    }
  };

  const uploadImage = async (uri, imageName) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    const response = await fetch(uploadUri);
    const blob = await response.blob();
    
    const task = storage
    .ref("Images/" + imageName)
    .put(blob)
    .then(console.log("upload de imagem efetuado"));
  }

  const registrar = async () => {
    if(image && nome.length > 0 && desc.length > 0 
      && imageName.length > 0 && preco > 0
      && (avaliacao >= 0 && avaliacao <= 5)) {
        
      db.ref('/produtos').push({
      nome: nome,
      desc: desc,
      imageName: imageName,
      avaliacao: avaliacao,
      preco: preco
      }).then(console.log("Dados salvos no db"));
    
      uploadImage(image,imageName)
        .then(() => {
          alert("Sucesso no registro!");
        })
        .catch((error) => {
          console.log(error);
        })
    }
    else {
      alert("Falha no cadastro!");
    }
  }

  return(
    <ScrollView style={estilos.containerRegistro}>
      <Text style={estilos.texto}>{"Nome do produto:"}</Text>
      <TextInput style={estilos.caixa}
      placeholder={"Nome do produto"}
      value={nome}
      onChangeText={texto => setNome(texto)}></TextInput>
      <Text style={estilos.texto}>{"Descrição do produto:"}</Text>
      <TextInput style={estilos.caixa}
      placeholder={"Descrição do produto"}
      value={desc}
      onChangeText={texto => setDesc(texto)}></TextInput>
      <Text style={estilos.texto}>{"Avaliação do produto (0-5):"}</Text>
      <TextInput style={estilos.caixa}
      value={avaliacao}
      onChangeText={texto => setAvaliacao(texto)}></TextInput>
      <Text style={estilos.texto}>{"Preço do produto:"}</Text>
      <TextInput style={estilos.caixa}
      value={preco}
      onChangeText={texto => setPreco(texto)}></TextInput>
      <Text style={estilos.texto}>{"Nome da imagem do produto:"}</Text>
      <TextInput style={estilos.caixa}
      placeholder={"Não utilize espaços"}
      value={imageName}
      onChangeText={texto => setImageName(texto)}></TextInput>
      <TouchableOpacity style={estilos.botao} onPress={pickImage}>
        <Text style={estilos.textoBotao}>{"Escolher imagem"}</Text>
      </TouchableOpacity>
      <View style={estilos.containerImagem}>
        {image ? <Image source={{uri: image}} style={{width: 200, height: 200}} /> : null}
      </View>
      <TouchableOpacity style={estilos.botao} onPress={registrar}>
        <Text style={estilos.textoBotao}>{"Registrar produto"}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}