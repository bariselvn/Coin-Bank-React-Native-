import React from 'react';
import { StyleSheet, View,Text,ImageBackground,TextInput,TouchableOpacity } from 'react-native';
import MenuButton from '../Menu/MenuButton';

import { connect } from 'react-redux';
import {KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';

const DismissKeyboard=({children})=>(
  <TouchableWithoutFeedback onPress ={()=>Keyboard.dismiss()}>
   { children}
  </TouchableWithoutFeedback>
);
 class EftHavaleScreen extends React.Component {
  constructor(props){
    super(props);
    this.eftHavaleYap = this.eftHavaleYap.bind(this);

    this.state = {
      MusteriID: props.MusteriID,
      ekNO: '',
      gonderilecekMusteriID: '',
      gonderilecekEkNo: '',
      miktar: '',
     

    }
    
  }
  eftHavaleYap() {
    const EftHavale = {
      MusteriID:this.props.MusteriID,
      ekNO: this.state.ekNO,
      gonderilecekMusteriID: this.state.gonderilecekMusteriID,
      gonderilecekEkNo: this.state.gonderilecekEkNo,
      miktar: this.state.miktar,
      

    }
 
    fetch('https://d3bankhttpservice.azurewebsites.net/api/EftHavale', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(EftHavale),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('response object:', responseJson.results)
        if (responseJson != null) { this.props.navigation.navigate('HesapScreen') }

      })
      .catch((error) => {
        console.error(error);
      });



  }

  render() {
    return (
       
        <DismissKeyboard>
        <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}} style={styles.container}>
          <MenuButton navigation= {this.props.navigation} />
        <View style={styles.ınput}>
          <TextInput  placeholder="Gönderen Ek No Numarası"  keyboardType={'number-pad'}
              maxLength={4}
              onSubmitEditing={() => this.passwordInput.focus()}
              returnKeyType={'next'}
              value={this.state.ekNO} onChangeText={(ekNO) => this.setState({ ekNO })} style={styles.textınput}></TextInput>
          <TextInput  placeholder="Alıcı Müşteri No Giriniz" keyboardType={'number-pad'}
              maxLength={11}
              onSubmitEditing={() => this.passwordInput.focus()}
              returnKeyType={'next'}
              value={this.state.gonderilecekMusteriID} onChangeText={(gonderilecekMusteriID) => this.setState({ gonderilecekMusteriID })} style={styles.textınput}></TextInput>
          <TextInput  placeholder="Alıcı Ek No'sunu giriniz" keyboardType={'number-pad'}
              maxLength={4}
              onSubmitEditing={() => this.passwordInput.focus()}
              returnKeyType={'next'}
              value={this.state.gonderilecekEkNo} onChangeText={(gonderilecekEkNo) => this.setState({ gonderilecekEkNo })} style={styles.textınput}></TextInput>
          <TextInput  placeholder="Miktarı giriniz.." keyboardType={'number-pad'}
             onSubmitEditing={() => this.passwordInput.focus()}
              returnKeyType={'go'}
              value={this.state.miktar} onChangeText={(miktar) => this.setState({ miktar })} style={styles.textınput}></TextInput>
        
        
     
        </View>
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <TouchableOpacity 
    style={{
    height:40,
    marginTop:10,
    width:200,
    backgroundColor:'#3498db',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center'}}
    onPress={this.eftHavaleYap}>
      <Text style={{fontSize:16,color:'white'}} > ONAYLA</Text>
  </TouchableOpacity>
       </View>
      </ImageBackground>               
      </DismissKeyboard>
        
      

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
const mapStateToProps = (state, ownProps) => ({
    MusteriID: state.reducerMusteri.musteriId,
  
  
  
  })
  export default connect(mapStateToProps)(EftHavaleScreen);
  