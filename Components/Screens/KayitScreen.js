import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import {KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const DismissKeyboard=({children})=>(
  <TouchableWithoutFeedback onPress ={()=>Keyboard.dismiss()}>
   { children}
  </TouchableWithoutFeedback>
);



export default class KayitScreen extends React.Component {
  constructor(props) {
    super(props);
    this.musteriEkle = this.musteriEkle.bind(this);
    this.state = {
      text: '',
      musteriAdi: '',
      musteriSoyad: '',
      adres: '',
      Tckn: '',
      iletisim: '',
      Sifre: '',
    }
  }
  musteriEkle() {
    console.log('girdim');

    const musteri = {
      musteriAdi: this.state.musteriAdi,
      musteriSoyad: this.state.musteriSoyad,
      Tckn: this.state.Tckn,
      adres: this.state.adres,
      iletisim: this.state.iletisim,
      Sifre: this.state.Sifre


    }
    console.log({ musteri });

    fetch('https://d3bankhttpservice.azurewebsites.net/api/Musteri', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(musteri),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('response object:', responseJson.results)
        if (responseJson != null) { this.props.navigation.navigate('LoginScreen') }

      })
      .catch((error) => {
        console.error(error);
      });



  }
  render() {
    return (<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <DismissKeyboard>
      <View style={styles.container}>
        <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <View style={styles.ınput}>
          
          <ScrollView>
        
            <TextInput 
            placeholder="Adınızı Giriniz" 
            value={this.state.musteriAdi} 
            returnKeyType={'next'}

            onChangeText={(musteriAdi) => this.setState({ musteriAdi })} 
            style={styles.textınput}></TextInput>


            <TextInput placeholder="Soyadınızı Giriniz" value={this.state.musteriSoyad} onChangeText={(musteriSoyad) => this.setState({ musteriSoyad })} style={styles.textınput}></TextInput>
            <TextInput placeholder="Tc nizi giriniz" 
            maxLength={11}
            keyboardType = {'number-pad'}
           
            value={this.state.Tckn} onChangeText={(Tckn) => this.setState({ Tckn })} style={styles.textınput}></TextInput>
            
            <TextInput placeholder="Mail Adresinizi Giriniz"
             value={this.state.adres}
              onChangeText={(adres) => this.setState({ adres })}
              keybordType = {"email-address"}
              style={styles.textınput}></TextInput>



            <TextInput placeholder="Numaranızı Giriniz" 
            value={this.state.iletisim} 
            keyboardType = {'number-pad'}
            maxLength = {11}
            onChangeText={(iletisim) => this.setState({ iletisim })} 
            style={styles.textınput}></TextInput>

            <TextInput placeholder="Şifrenizi Giriniz" 
            value={this.state.Sifre}
             onChangeText={(Sifre) => this.setState({ Sifre })} 
             maxLength = {6}
             style={styles.textınput}
             secureTextEntry = {true}
             >
             
             </TextInput>
             </ScrollView>
             
          </View>

          <TouchableOpacity
            style={{
              height: 40,
              marginTop: 10,
              width: 200,
              backgroundColor: '#3498db',
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 10,
              alignItems: 'center'
            }}
            onPress={this.musteriEkle}>
            <Text style={{ fontSize: 16, color: 'white' }} > KAYIT OL</Text>
          </TouchableOpacity>

        </ImageBackground>

      </View>
      </DismissKeyboard>
      </KeyboardAvoidingView>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 21,

    justifyContent: 'center',
  },
  ınput: {
    borderRadius: 10,
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textınput: {
    height: 40,
    width: 200,
    marginTop: 25,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,

  },

});