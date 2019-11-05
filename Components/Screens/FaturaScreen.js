import React from 'react';
import { StyleSheet, View,Text,ImageBackground,TextInput,TouchableOpacity,Picker } from 'react-native';
import MenuButton from '../Menu/MenuButton';
import {KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { connect } from 'react-redux';
const DismissKeyboard=({children})=>(
  <TouchableWithoutFeedback onPress ={()=>Keyboard.dismiss()}>
   { children}
  </TouchableWithoutFeedback>
);

 class FaturaScreen extends React.Component {
  constructor(props){
    super(props);
    this.faturaOde=this.faturaOde.bind(this);
    this.componentDidMount=this.componentDidMount.bind(this);
    this.state={
      ekNO: '',
      MusteriID: props.MusteriID,
      Tckn:props.Tckn,
      FaturaTutari:this.props.FaturaTutari,
      errormessage:'',
      Tarih:this.props.Tarih,
      FaturaID:'',
      Musteri:[],
      faturalar:[],
}
  }
  componentDidMount(){

          fetch("https://faturahttpservice20191104013156.azurewebsites.net/api/fatura/faturalar/"+this.props.Tckn).then(res=>{
            console.log("fetchinaltı",this.props.Tckn);
        
            if(res.ok){
               
               res.json()
               .then(data=>{
           
                 this.setState({faturalar:data.results});
                 console.log('Faturalarım', this.state.faturalar);            
               })
        
              }
              else{             
                return;
              }
                
            })
           
  }
  faturaOde(){
  
   
      const FaturaIslem={
        MusteriID:this.props.MusteriID,
        ekNO: this.state.ekNO,
        Tckn:this.props.Tckn,
        FaturaTutari:this.state.faturalar.FaturaTutari
      
      }
      console.log({FaturaIslem});

      fetch('https://d3bankhttpservice.azurewebsites.net/api/FaturaIslem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    },
    body:JSON.stringify(FaturaIslem),
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
        <DismissKeyboard>
        <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}} style={styles.container}>
        <MenuButton navigation= {this.props.navigation} /> 
        <View>
           <Picker 

                selectedValue={this.state.FaturaID}
                onValueChange={(cli) => this.setState({FaturaID: cli})}>
               {this.state.faturalar.map((l, i) => {return <Picker.Item value={l} label={l.FaturaTutari } key={i}  /> })}
            </Picker>
        </View>
       <View style={styles.ınput}>
         <TextInput  placeholder="ek no giriniz" value={this.state.ekNO}onChangeText={(ekNO)=>this.setState({ekNO})} style={styles.textınput}></TextInput>
        </View>
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
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
onPress={this.faturaOde}>
  <Text style={{fontSize:16,color:'white'}} > Fatura Öde</Text>
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
  Tckn: state.reducerMusteri.tckn,




})
export default connect(mapStateToProps)(FaturaScreen);