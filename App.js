import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import * as React from 'react';
import InputMask from "react-input-mask";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import resultimc  from './projeto/resultimc';


export default function App() {

 
const [height, setHeight] = useState(null);
const [Weight, setWeight] = useState(null);
const [MessageImc, setMessageImc] = useState("Preencha os botoes");
const [imc, setimc] = useState(null);
const [textButton, setTextButton] = useState("Calcular2!");
console.log(height);
console.log(Weight);
var final = (Weight/((height*height) /10000)).toFixed(2);

console.log("Resultado é:" + final);

  function newFunction() {
    return "Preencha o peso e a altura";
  }

function imcCalculator(){
  return setimc((Weight/(height*height)).toFixed(2));
}

function validarIMC(){
  if(Weight != null && height != null){
    imcCalculator();
    setWeight(null);
    setHeight(null);
    setMessageImc("Seu IMC é igual:  " +final);
    setTextButton("Digite novamente");
    return
  }

  setimc(null);
  setTextButton("Calcular");
  setMessageImc("Preencha peso e altura");


}
var mensagem = MessageImc;
  return (
    <View style={styles.container}>
      <Text style={{alignItems:'center', fontSize:24, color:'#0a0fbb', fontWeight: 'bold'}}>Calculadora de IMC</Text>
      <Text style={{  fontWeight: 'bold', fontSize:16, color:'#0a0fbb', fontWeight: 'bold'}}> {'\n'}Altura</Text>
      <TextInput 
            style= {styles}
            onChangeText={setHeight}
            placeholder="Ex: 1,90" 
            placeholderTextColor= 'black' 
            value={height}
            borderColor= 'gray'
          
          
            keyboardType= 'numeric' />
    <Text style={{ fontWeight: 'bold', fontSize:16, color:'#0a0fbb', fontWeight: 'bold' }}>Peso</Text>
    <TextInput 
            style={styles.textField} 
            onChangeText={setWeight}
            placeholder="Ex: 90" 
            value={Weight}
            placeholderTextColor= 'black' 
            keyboardType= 'numeric' />
<TouchableOpacity
        onPress={() => validarIMC ()}
      >
        <Text  style={{color:'#FFF', fontSize:15, borderRadius:40, borderWidth: 2, backgroundColor:'#0a0fbb', padding:15, margin:15}}> Calcular</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      <Text style={{ fontWeight: 'bold', color:"#0a0fbb"}} >{'\n'} {mensagem}</Text>
{/*       <resultimc Messegeinputimc={MessageImc} Resultimc2={imc} /> 
 */}
    </View>

  );
    

}
const title = StyleSheet.create({
  Boxtitle: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Boxtitle: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },

  button: {
    fontSize:24,

  }
});
