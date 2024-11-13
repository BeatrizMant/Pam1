import React, {useState} from 'react'; //importa react e o hook useState
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'; //importa os elementos

// Função principal do app
const App = () => {
  // Estados para armazenar nome de usuario e a senha
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função que é chamada quando botão de login é pressionado
  const handleLogin = () => {
    alert('Usuário: ${username}\nSenha: ${password}');
  }

  return (
    // Container principal que centraliza o conteúdo
    <View style = {styles.container}>
    <Text style = {styles.title}>Tela de login</Text> 

    <TextInput 
      style = {styles.input}
      placeholder = "Nome de usuário"
      value = {username}
      onChangeText = {setUsername} // Atualiza o estado do nome do usuário
    />

    <TextInput
      style = {styles.input}
      placeholder = "Senha"
      secureTextEntry = {true} // Esconde o texto digitado
      value = {password}
      onChangeText = {setPassword} // Atualiza o estado da senha
    />


    <Button title="Entrar" onPress={handleLogin}/>{/* Botão de login*/}
    </View>
  );
};

// Definição de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupar toda altura da tela
    display: 'flex',
    justifyContent: 'center', // Centraliza os itens verticalmente
    alingItems: 'center', // Centraliza os itens horizontalmente
    backgroundColor: '#f5f5f5', // cor do fundo

  }, 

  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 20,

  },

  input:{
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '80%',
  },

});

export default App;
