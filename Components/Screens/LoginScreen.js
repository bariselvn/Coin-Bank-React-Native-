import React from 'react';
import { StyleSheet, View,Text,TextInput,ImageBackground,Picker,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import {UpdateId,UpdateTC} from '../../redux/actions/index';
import {KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';

const DismissKeyboard=({children})=>(
  <TouchableWithoutFeedback onPress ={()=>Keyboard.dismiss()}>
   { children}
  </TouchableWithoutFeedback>
);

 class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.girisYap = this.girisYap.bind(this);
		this.state={
      MusteriID:'',
      Tckn:'',
      kullaniciID:0,
      kullaniciTc:0,
      sifre:'',
      errormessage:'',
    }
  };
  updateId=(MusteriID)=>{
    UpdateId(MusteriID);
  }
  updatetc=(Tckn)=>{
    UpdateTC(Tckn);
  }
  girisYap(){
  fetch("https://d3bankhttpservice.azurewebsites.net/api/Musteri/Login/"+this.state.Tckn+"/"+this.state.sifre+"/").then(res=>{
    
  if(res.ok){
     
     res.json()
     .then(data=>{
      this.updateId(data.results);
      this.updatetc(this.state.Tckn);
      console.log('dataResults',data.results);
      this.setState({kullaniciID:data.results});
      this.setState({kullaniciTc:this.state.Tckn});
      this.setState({errormessage:"Giriş Başarılı"});
      console.log(this.state.errormessage);
      this.props.navigation.navigate('HesapScreen',{ MusteriID: this.state.kullaniciID ,Tckn:this.state.kullaniciTc })
      
     })
    }
  else{
      this.setState({errormessage:"TCKN   veya şifre hatalı."});
      console.log(this.state.MusteriID);
      console.log(this.state.sifre);
      console.log(this.state.errormessage);
      return;
    }  
  }     
    );

    }
  render() {
    return (
      <DismissKeyboard>
    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1548580392-8d9c772d854e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}}style={styles.container}>
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      
       <View style={styles.ınput}>
           
           <TextInput 
             placeholder="TC Kimlik No Giriniz" 
             style={styles.textınput} 
             maxLength={11}
             value={this.state.Tckn}
             onChangeText={(Tckn)=>this.setState({Tckn})}
             keyboardType = {'number-pad'}
             onSubmitEditing={() => this.passwordInput.focus()}
             />
           <TextInput 
              placeholder="Şifre Giriniz" 
              style={styles.textınput} 
              value={this.state.sifre}
              maxLength={6}
              onChangeText={(sifre)=>this.setState({sifre})} 
              secureTextEntry = {true}
              returnKeyType={'go'}

           />
        </View>  
    
  <TouchableOpacity 
    style={{
    height:40,
    marginBottom:250,
    justifyContent:'center',
    width:200,
    backgroundColor:'#3498db',
    borderRadius:10,
    paddingHorizontal:20,
    paddingVertical:10,
    alignItems:'center'}}
    onPress={this.girisYap}>
      <Text style={{fontSize:16,color:'white'}} > LOGIN</Text>
  </TouchableOpacity>
 
      </View>   
    
  </ImageBackground>
  </DismissKeyboard>
    );
  
  };
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:21,
   alignItems:'center',
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
  MusteriID:state.reducerMusteri.musteriId,
  Tckn:state.reducerMusteri.tckn,
 
  

})
export default connect(mapStateToProps)(LoginScreen);