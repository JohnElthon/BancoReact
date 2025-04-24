import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Switch, TouchableOpacity } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorSlider: 300,
      valor: 0,
      nome:'',
      idade:'',

      sexo: 0,
      sexos: [
        { key: 1, nome: 'Masculino' },
        { key: 2, nome: 'Feminino' },
        { key: 3, nome: 'Outros' },



      ]
    };
  };

  cadastrarDados(){
    
   
    if (this.state.nome == "" || this.state.idade == ""){
      alert('Preencha todos dados Corretamente')
      return;
    }
    alert(
      'conta aberta com sucesso! \n\n' +
      'Nome: '+this.state.nome + '\n' +
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: '+ this.state.sexos[this.state.sexo].sexonome + '\n' +
      'Limite Conta: '+ this.state.valor.toFixed(2) + '\n' 
     
    );
    

  }
  render() {

    let SexoItens = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}></Picker.Item>
    });
    return (

      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.containerHeader}>
          <Text style={styles.textLogo}> Banco React</Text>

        </View>

        <View style={styles.containerForm}>
          <View style={styles.containerInput}>
            <Text style={styles.TextName}> Nome:</Text>
            <TextInput style={styles.inputs}
              placeholder='Digite seu nome' />
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.TextIdade}> Idade:</Text>
            <TextInput style={styles.inputs}
              placeholder='Digite sua Idade' />
          </View>
          <View style={styles.containerPicker}>
            <Text style={styles.genero}>Sexo:</Text>

            <Picker
              selectedValue={this.state.sexo}
              onValueChange={(itemValor) => this.setState({ sexo: itemValor })}>
              {SexoItens}
            </Picker>
          </View>

          <View style={styles.containerSlider}>
            <Text style={styles.limite}>Seu Limite: R${this.state.valor.toFixed(2)}</Text>

            <Slider value={this.state.valor}
              onValueChange={(valorSlider) => this.setState({ valor: valorSlider })}
              minimumValue={300}
              maximumValue={3000}
              step={100}
              minimumTrackTintColor='green'
              maximumTrackTintColor='red'
            ></Slider>

          </View>

          <View style={styles.containerSwitch}>

            <Text style={styles.estudante}>Estudante</Text>

            <Switch

              value={this.state.valorSwitch}
              onValueChange={(valorSelecionado) => this.setState({ valorSwitch: valorSelecionado })}
            >
            </Switch>
            <Text style={styles.valor}>
              {(this.state.valorSwitch) ? 'Sim' : 'Não'}
            </Text>

          </View>

          <TouchableOpacity style={styles.btnAbrirConta}>
            <Text style={styles.Textbtn}>Abrir conta</Text>
          </TouchableOpacity>


        </View>



      </View>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  },
  containerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '10%'

  },
  textLogo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20
  },
  containerForm: {
    flex: 1,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,

  },
  containerInput: {

  },
  TextName: {
    fontWeight: 'bold'

  },
  TextIdade: {
    fontWeight: 'bold',
    marginTop: 15

  },
  inputs: {
    marginTop: 4,
    backgroundColor: '#D3D3D3',
    borderRadius: 5
  },
  containerPicker:{
    //flexDirection:'row',
    //alignItems:'center',
    //justifyContent:'space-between',
    
  },
  containerSlider:{

  },
  containerSwitch:{
    
  },
  btnAbrirConta:{
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'gray',
    borderRadius:25,
    padding:10,
    
  },
  Textbtn:{
    color:'#FFF',
    fontSize:16
  }



});

export default app;
