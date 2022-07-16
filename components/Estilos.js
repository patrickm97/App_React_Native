import * as React from 'react';
import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  pagina: {
    padding: 5,
    width: '100%',
    backgroundColor: 'lightgray'
  },
  containerAuth: {
    flex: 1,
    justifyContent: 'center'
  },
  containerProdutos: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 1,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  containerDetalhes: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 1,
    margin: 2,
    backgroundColor: 'white',
  },
  containerRegistro: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bbded6'
  },
  containerImagem: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center'
  },
  caixa: {
    fontSize: 18,
    borderColor: 'dodgerblue',
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    margin: 1
  },
  texto: {
    color: 'black',
    fontFamily: 'verdana',
    fontSize: 18,
  },
  subcontainer: {
    backgroundColor: 'black',
    borderColor: 'dodgerblue',
    borderWidth: 1,
  },
  botao: {
    backgroundColor: 'dodgerblue',
    borderRadius: 10,
    padding: 5,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 3
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
  },
  imagemDesc: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    margin: 3,
    padding: 3,
  },
  desc: {
    fontSize: 14,
    fontFamily: 'verdana',
    marginVertical: 1
  },
  preco: {
    fontSize: 18,
    fontFamily: 'verdana',
    fontWeight: 'bold',
  },
  estrelas: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  estrela: {
    margin: 1,
  },
  informacoes: {
    padding: 3,
    width: 300,
    height: 150,
    margin: 2,
    justifyContent: 'center',
  },
  imagem: {
    width: 150,
    height: 150,
    margin: 5,
    resizeMode: 'contain',
    padding: 3,
  },
  tituloDesc: {
    color: 'black',
    fontFamily: 'verdana',
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
  }
})

export default estilos;