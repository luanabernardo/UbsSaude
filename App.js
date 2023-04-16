import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, ScrollView, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {

  //value pra pegar o que o usuario escreve e o showmessage pra mostrar onde está a parte de vacina
  const [value, setValue] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  //caso o usuario escrever vacina
  useEffect(() => {
    if (value === 'Vacina') {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [value]);


  const [op, setOp] = useState([
    { nome: 'Agendamento', key: 1, icone: 'calendar' },
    { nome: 'Vacinas', key: 2, icone: 'checksquareo' },
    { nome: 'Remédios', key: 3, icone: 'medicinebox' },
    { nome: 'Perfil', key: 4, icone: 'user' },
    { nome: 'Ubs', key: 5, icone: 'enviromento' },
  ])
  const [selectedItem, setSelectedItem] = useState(null);
  const [mostrando, setMostrando] = useState(false);

  const apertarBotao = (item) => {
    setSelectedItem(item);
    setMostrando(true);
    setOp([item]);  
  };
  //quando o usuario clica no botao ok para sumir o conteúdo
   const sumirMostrando = () => {
    setMostrando(false);
  };
  return (

    <View style={styles.container}>
      <View style={styles.conteudo}>
        <Text style={styles.texto}>UbsSaúde+</Text>
        <View style={styles.icone}>
          <FontAwesome5 name="hospital" size={40} color="white" />
        </View>
        
        <View>
          <TextInput
            multiline
            style={styles.input}
            placeholder='Pesquise o que você deseja encontrar'
            onChangeText={setValue}
            value={value}
          />
          {showMessage && (
            <Text style={styles.message}> *Item 2 do menu </Text>
          )}
        </View>
      </View>

      <FlatList
        numColumns={1}
        keyExtractor={(item) => item.key}
        data={op}
        renderItem={({ item }) => (
          <TouchableOpacity
          //apertar alguma opçao 
            onPress={() => apertarBotao(item)}>
            <View style={styles.item}>
              <AntDesign
                name={item.icone}
                size={24}
                color="#69DED7"
              />
              <Text style={styles.paragrafo}>{item.nome}</Text>
            </View>
            {mostrando && (
              <ScrollView>
              <View style={styles.pagina}>
                <Text style={styles.mostrandoTexto}> Você está na página de {selectedItem.nome} </Text>
                <Text style={styles.mostrandoTexto}>ConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdo
                ConteúdoConteúdoConteúdoConteúdoConteúdo
                ConteúdoConteúdoConteúdoConteúdoConteúdoCo
                nteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúd
                oConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoCont
                eúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdo
                ConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConte
                údoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdo
                ConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteú
                doConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdo
                ConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdoConteúdo
                ConteúdoConteúdoConteúdoConteúdo</Text>   
                <Button
                title='Ok'
                //sumir o texto
                onPress={sumirMostrando}
                color='#2F8E89'
                />
                </View>
                </ScrollView>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    backgroundColor: '#69DED7',
  },
  item: {
    flex: 2,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    marginBottom: 20,
    marginTop: 10,
    width: '80%',
    alignSelf: 'center'
  },
  conteudo: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 30,
  },
  paragrafo: {
    fontSize: 20,
  },
  icone: {
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 5,
    margin: 5,
    width: 300,
    fontSize: 15,
  },
  message: {
    color: 'black',
    fontSize: 15,
  },
  mostrandoTexto: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },
});
