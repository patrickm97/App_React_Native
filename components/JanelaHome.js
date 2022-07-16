import React from 'react';
import { Text, View, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import estilos from './Estilos';
import { db, auth, storage } from '../config';
import Produto from './Produto';

export default class JanelaHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: []
    }
  }
  
  componentDidMount() {
    db.ref('/produtos').on('value',snapshot => {
      let data = snapshot.val();
      let dados = Object.values(data);
      this.setState({produtos: dados});
    });
  }
  
  verDetalhes() {
    this.props.navigation.navigate("Detalhes");
  }
  
  registrarProduto() {
    this.props.navigation.navigate("Registro");
  }

  sair() {
    auth.signOut().then(() => {
      console.log("logout com sucesso");
      this.props.navigation.replace("Root");
    })
    .catch(error => console.log(error.message));
  }

  render() {
    return(
      <ScrollView style={estilos.pagina}>
        <Text style={estilos.texto}>
          {"Logado com "}{auth.currentUser?.email}
        </Text>
        <FlatList 
          data={this.state.produtos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => 
            <Produto item={item} 
            navigation={this.props.navigation} />}
        />
        <TouchableOpacity style={estilos.botao}
        onPress={() => this.registrarProduto()}>
          <Text style={estilos.textoBotao}>
            {"REGISTRAR PRODUTO"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.botao}
        onPress={() => this.sair()}>
          <Text style={estilos.textoBotao}>
            {"SAIR"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}