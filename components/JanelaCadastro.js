import React, { useState } from 'react';
import { Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import estilos from './Estilos';
import { auth } from '../config';

function JanelaCadastro() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = () => {
    auth.createUserWithEmailAndPassword(email,senha)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log("Conta criada com: ", user.email);
      alert("Conta criada com sucesso!");
    })
    .catch(error => alert(error.message));
  }
  
  return(
    <View style={estilos.containerAuth}>
      <Text style={estilos.texto}>{"E-mail:"}</Text>
      <TextInput style={estilos.caixa}
      placeholder={"insira o e-mail"}
      value={email}
      onChangeText={texto => setEmail(texto)}></TextInput>
      <Text style={estilos.texto}>{"Senha:"}</Text>
      <TextInput style={estilos.caixa}
      placeholder={"insira a senha"}
      value={senha}
      onChangeText={texto => setSenha(texto)}
      secureTextEntry={true}></TextInput>
      <TouchableHighlight style={estilos.botao} onPress={cadastrar}>
        <Text style={estilos.textoBotao}>{"CADASTRAR"}</Text>
      </TouchableHighlight>
    </View>
  );
}

export default JanelaCadastro;