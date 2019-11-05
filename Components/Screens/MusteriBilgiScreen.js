import React from 'react';
import { StyleSheet, View,Text,ImageBackground,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import MenuButton from '../Menu/MenuButton';
import { connect } from 'react-redux';
import {KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';


const DismissKeyboard=({children})=>(
  <TouchableWithoutFeedback onPress ={()=>Keyboard.dismiss()}>
   { children}
  </TouchableWithoutFeedback>
);

 class MusteriBilgiScreen extends React.Component {
  constructor(props){
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.musteriBilgiGuncelle = this.musteriBilgiGuncelle.bind(this);
    
    this.state={
        MusteriID: props.MusteriID,
        MusteriAdi:props.MusteriAdi,
        MusteriSoyad:props.MusteriSoyad,
        adres: props.adres,
        Tckn: props.Tckn,
        iletisim: props.iletisim,
        Sifre: props.Sifre,
        errormessage:'',
         Musteri:[],
         MusteriBilgi:[],
     
    }
    
  };
  
 componentDidMount(){
    fetch("https://d3bankhttpservice.azurewebsites.net/api/Musteri/"+this.props.MusteriID+"/").then(res=>{
      
    if(res.ok){
       
       res.json()
       .then(data=>{
        console.log('dataResults',data.results);  
        this.setState({errormessage:"Giriş Başarılı"});
        this.setState({Musteri:data.results});
        console.log(this.state.errormessage);
        
        
       })
      }
    else{
        this.setState({errormessage:"Hesap Bulunamadı"});
        console.log(this.state.MusteriID);
        console.log(this.state.errormessage);
        
        
        return;
      }  
    }     
      );
  
  }
  musteriBilgiGuncelle(){
    if(this.state.MusteriAdi===''||this.state.MusteriAdi===null||this.state.MusteriSoyad==''||this.state.MusteriSoyad===null ||this.state.adres===''||this.state.adres===null||this.state.Sifre===''||this.state.Sifre===null){
      this.setState({errormessage:"Eksik yada yanlış bilgi girdiniz."})
    
     return;
    }
    const MusteriBilgi = {
        musteriAdi: this.state.musteriAdi,
        musteriSoyad: this.state.musteriSoyad,
        Tckn: this.state.Tckn,
        adres: this.state.adres,
        iletisim: this.state.iletisim,
        Sifre: this.state.Sifre
  
  
      }
   fetch('https://d3bankhttpservice.azurewebsites.net/api/Musteri', {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json;charset=UTF-8',
       "Access-Control-Allow-Origin": "*",
     },
     body:JSON.stringify(MusteriBilgi),
     })
     .then((response) => response.json())
     .then((responseJson) => {
         console.log('response object:',responseJson)
         if(responseJson!=null){this.props.navigation.navigate('HesapScreen')}
         
     })
     .catch((error) => {
       console.error(error);
     });
  
}
  render() {
    return (
        <DismissKeyboard>
        <View style={styles.container}>
 
        <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}} style={styles.container}>
        <MenuButton navigation= {this.props.navigation} />
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <ScrollView>
        <View style={styles.ınput}>
          <TextInput  
          placeholder={this.state.Musteri.MusteriAdi}  
          style={styles.textınput} 
          value={this.state.MusteriAdi}  onChangeText={(MusteriAdi) => this.setState({ MusteriAdi })}  >
          </TextInput>
          <TextInput 
           placeholder={this.state.Musteri.MusteriSoyad} 
            style={styles.textınput}
            value={this.state.MusteriSoyad}  onChangeText={(MusteriSoyad) => this.setState({ MusteriSoyad })} >  
            </TextInput>
          <TextInput  
          placeholder={this.state.Musteri.Tckn}  
          style={styles.textınput}
          value={this.state.Tckn}  onChangeText={(Tckn) => this.setState({ Tckn })} >
          {this.state.Musteri.Tckn}
          </TextInput>
          <TextInput 
           placeholder={this.state.Musteri.adres}  
           style={styles.textınput}
           value={this.state.adres}  onChangeText={(adres) => this.setState({ adres })} >     
           </TextInput>
          <TextInput  
          placeholder={this.state.Musteri.iletisim}  
          style={styles.textınput} 
          keyboardType = {'number-pad'} maxLength = {11}
          value={this.state.iletisim}  onChangeText={(iletisim) => this.setState({ iletisim })} >   
            </TextInput>
          <TextInput  
          placeholder={this.state.Musteri.Sifre}  
          style={styles.textınput} 
            maxLength = {6} value={this.state.Sifre} onChangeText={(Sifre) => this.setState({ Sifre })} > 
            </TextInput>
     
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
       <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
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
    onPress={this.musteriBilgiGuncelle}>
      <Text style={{fontSize:16,color:'white'}} > BİLGİLERİ DÜZENLE</Text>
  </TouchableOpacity>
       </View>
      </ImageBackground>               
        
        </View>
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
  export default connect(mapStateToProps)(MusteriBilgiScreen);
  