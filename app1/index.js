import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';
// var View = require('react-native').View;
// var Button = require('react-native').Button;
// var AppRegistry = require('react-native').AppRegistry;

const geraNumeroAleatorio = () => {
  var numeroAleatorio = Math.floor(Math.random() * 10);
  alert(numeroAleatorio);
};

const App = () => {
  return (
    <View>
      <Text>Gerador de numeros randomicos</Text>
      <Button
        title = "Gerar um numero randomico"
        onPress = {geraNumeroAleatorio}
      />
    </View>
  );
};

                              //nome da aplicacao,  funcao de callback, sera executada na sequencia da funcao registerComponent
AppRegistry.registerComponent('app1', () => App);

// Arrow function
// quando o retorno for simples, como return App, pode-se remover os {} e remover a palavra return

// Funcao normal
// const App = function() { return algo }
