import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import * as React from 'react';
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
const [textButton, setTextButton] = useState("Calcular!");
var final = Weight/(height*height).toFixed(2);

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
    setMessageImc("Seu IMC é igual:  " +final.toFixed(2));
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
      <Text style={{alignItems:'center', fontSize:24, color:'#FF0043', fontWeight: 'bold'}}>Tiago Dolf</Text>
      <Text style={{ fontWeight: 'bold', fontSize:16, color:'#FF0043', fontWeight: 'bold'}}> {'\n'}Altura</Text>
      <TextInput 
            style={styles.textField} 
            onChangeText={setHeight}
            placeholder="Ex: 1,90" 
            placeholderTextColor= 'black' 
            value={height}
            keyboardType= 'numeric' />
    <Text style={{ fontWeight: 'bold', fontSize:16, color:'#FF0043', fontWeight: 'bold' }}>Peso</Text>
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
        <Text  style={{color:'#FFF', fontSize:23, borderRadius:50, borderWidth: 1, backgroundColor:'#FF0043', padding:10}}> Calcular</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      <Text style={{ fontWeight: 'bold', color:"#FF0043"}} >{'\n'} {mensagem}</Text>
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
