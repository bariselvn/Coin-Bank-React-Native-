import React from 'react';
import { StyleSheet, View,Text,TextInput,ImageBackground,TouchableOpacity } from 'react-native';
import MenuButton from '../Menu/MenuButton';
import {connect} from 'react-redux';
 

 class HesapIslemScreen extends React.Component {
  constructor(props){
        super(props);
        this.hesapEkle=this.hesapEkle.bind(this);
		this.state={
            MusteriID: '',
	
    }
  };
  hesapEkle(){
    console.log('girdim');
   
      const Hesap={
        MusteriID:this.props.MusteriID,
      
        
      
      }
      console.log({Hesap});

      fetch('https://d3bankhttpservice.azurewebsites.net/api/Hesap', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    },
    body:JSON.stringify(Hesap),
    })
        .then((response) => response.json())
        .then((responseJson) => { 
            console.log('response object:',responseJson.results)
            if(responseJson!=null){this.props.navigation.navigate('HesapScreen')}
           
        })
        .catch((error) => {
          console.error(error);
        });
    
   
    
  }
   
  render() {

    return (
    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1548580392-8d9c772d854e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}style={styles.container}>
      <MenuButton navigation= {this.props.navigation} />
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

  <TouchableOpacity 
    style={{
    height:40,
    marginTop:10,
    justifyContent:'center',
    width:200,
    backgroundColor:'#3498db',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center'}}
    onPress={()=>this.props.navigation.navigate('EftHavaleScreen')}>
      <Text style={{fontSize:16,color:'white'}} >EFT HAVALE</Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={{
    height:40,
    marginTop:10,
    justifyContent:'center',
    width:200,
    backgroundColor:'#3498db',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center'}}
    onPress={()=>this.props.navigation.navigate('VirmanScreen')}>
      <Text style={{fontSize:16,color:'white'}} >VİRMAN</Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={{
    height:40,
    marginTop:10,
    justifyContent:'center',
    width:200,
    backgroundColor:'#3498db',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center'}}
    onPress={()=>this.props.navigation.navigate('ParaYatirmaScreen')}>
      <Text style={{fontSize:16,color:'white'}} >PARA YATIRMA</Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={{
    height:40,
    marginTop:10,
    justifyContent:'center',
    width:200,
    backgroundColor:'#3498db',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center'}}
    onPress={()=>this.props.navigation.navigate('ParaCekmeScreen')}>
      <Text style={{fontSize:16,color:'white'}} >PARA ÇEKME</Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={{
    height:40,
    marginTop:10,
    justifyContent:'center',
    width:200,
    backgroundColor:'#3498db',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center'}}
    onPress={()=>this.props.navigation.navigate('FaturaScreen')}>
      <Text style={{fontSize:16,color:'white'}} >Fatura Öde</Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={{
    height:40,
    marginTop:10,
    justifyContent:'center',
    width:200,
    backgroundColor:'#3498db',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center'}}
    onPress={this.hesapEkle}>
      <Text style={{fontSize:16,color:'white'}} >HESAP EKLE</Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={{
    height:40,
    marginTop:10,
    justifyContent:'center',
    width:200,
    backgroundColor:'#3498db',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center'}}
    onPress={()=>this.props.navigation.navigate('HesapSilmeScreen')}>
      <Text style={{fontSize:16,color:'white'}} >HESAP SİL</Text>
  </TouchableOpacity>
 
      </View>   
    
  </ImageBackground>

    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:21,
   alignContent:'center',
    justifyContent: 'center',
  },
 
 
 
});
const mapStateToProps = (state, ownProps) => ({
    MusteriID:state.reducerMusteri.musteriId,
   
    
  
  })
  export default connect(mapStateToProps)(HesapIslemScreen);