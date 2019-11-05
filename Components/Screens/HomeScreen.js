import React from 'react';
import { StyleSheet, View,Image,Text,ScrollView,TextInput,TouchableOpacity,ImageBackground } from 'react-native';


export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
 }
 
  render() {
    return (
        <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1563979954492-8111f02d6273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'}}style={styles.container}>
        
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:20,color:'white'}}>COIN BANK</Text>
        <Text style={{fontSize:15,color:'white',marginTop:20}}>Bir coinden daha fazlası</Text>
        </View>
   
       
       
       
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <TouchableOpacity  style={{height:40,width:200,backgroundColor:'#3498db',borderRadius:10,paddingHorizontal:20,paddingVertical:10,alignItems:'center'}}
            onPress={()=>this.props.navigation.navigate('LoginScreen')}>
              <Text style={{fontSize:16,color:'white'}} >
               Giriş Yap
              </Text>
              
        </TouchableOpacity>
        <TouchableOpacity  style={{height:40,marginTop:10,width:200,backgroundColor:'#3498db',borderRadius:10,paddingHorizontal:20,paddingVertical:10,alignItems:'center'}}
           onPress={()=>this.props.navigation.navigate('KayitScreen')}>
              <Text style={{fontSize:16,color:'white'}} >
              Kayıt Ol
              </Text>
              
        </TouchableOpacity>
         </View>       
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   
    alignContent:'center',
    justifyContent: 'center',
  
  },
  ınput:{
    borderRadius:10,
    flex:1,
    padding:5,  
    justifyContent:'center',
    alignItems:'center',

  },
 
  textınput:{
    height:40,
    width:200,
    marginTop:25,
    borderRadius:10,
    borderColor:'black',
    borderWidth:2,

  },
});