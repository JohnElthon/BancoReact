import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class app extends Component{
  constructor(props){
    super (props);
    this.state={
    
      Sexo:1,
      Sexo: [
        {key:1, nome:'Masculino'},
        {key:2, nome:'Feminino'},
        {key:3, nome:'Outros'},
       
       
       
      ]
    };
  };
  render(){

    let SexoItens= this.state.Sexo.map((v)=>{
      return  <Picker.Item key={v.key} value={v.key} label= {v.nome}></Picker.Item>
    });

    <View style={styles.container}>
    <StatusBar style="auto" />

    <View style={styles.containerHeader}>
    <Text style={styles.textLogo}> Banco React</Text>

    </View>
    
<View style={styles.containerForm}>
   <View style={styles.containerInput}>
      <Text style={styles.TextName}> Nome:</Text>
     <TextInput style={styles.inputs}
     placeholder='Digite seu nome'/>
   </View>

   <View style={styles.containerInput}>
      <Text style={styles.TextIdade}> Idade:</Text>
     <TextInput style={styles.inputs}
     placeholder='Digite sua Idade'/>
   </View>


   </View>
  
 </View>
 


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
    
  },
  containerHeader:{
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    marginTop:'10%'

  },
  textLogo:{
    fontSize:25,
    fontWeight:'bold',
    marginBottom:20
  },
  containerForm:{
    flex:1,
    width:'100%',
    paddingLeft:10,
    paddingRight:10,
       
  },
  containerInput:{
    
    
    
    

  },
  TextName:{
    fontWeight:'bold'

  },
  TextIdade:{
    fontWeight:'bold',
    marginTop:15

  },
  inputs:{
    marginTop:4,
    backgroundColor:'#D3D3D3',
    borderRadius:5

  },

});
