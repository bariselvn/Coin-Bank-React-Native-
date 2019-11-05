import React from 'react';
import { Dimensions,StyleSheet, View,Text,ScrollView,FlatList,Image,ImageBackground,TouchableOpacity } from 'react-native';
import MenuButton from '../Menu/MenuButton';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';
const {width}=Dimensions.get('window')

  class HesapScreen extends React.Component {
  constructor(props){
		super(props);
    this.componentDidMount=this.componentDidMount.bind(this);

    this.state = {
        MusteriID: props.MusteriID,
        Tckn:props.Tckn,
        ekNO:props.ekNO,
        MusteriAdi:props.MusteriAdi,
        MusteriSoyad:props.MusteriSoyad,
        hesapID:props.hesapID,
        errormessage:'',
         Musteri:[],
         hesaplar:[],
        
    }
    
  };
  /*shouldComponentUpdate(nextProps, nextState) {
    // A typical shallow comparison
    if (this.props.MusteriID !== nextProps.MusteriID) {
      console.log('props color');
      return true;
    }
    if (this.state.hesaplar !== nextState.hesaplar) {
      console.log('state count');
      return true;
    }
    
    console.log('false');
    return false;
  }*/
 componentDidMount() {
  
    fetch("https://d3bankhttpservice.azurewebsites.net/api/Hesap/hesapID/"+this.props.MusteriID+"/").then(res=>{
            
      if(res.ok){
         
         res.json()
         .then(data=>{
           this.setState({hesaplar:data.results});           
         })
  
        }
        else{             
          return;
        }
          
      })
      fetch("https://d3bankhttpservice.azurewebsites.net/api/Musteri/"+this.props.MusteriID+"/").then(res=>{
      
    if(res.ok){
       
       res.json()
       .then(data=>{ 
        this.setState({errormessage:"Giriş Başarılı"});
        this.setState({Musteri:data.results});
        
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
 
  render() {
    return (
     
    <View style={styles.container}>
       <NavigationEvents onWillFocus={() => {
  this.componentDidMount();
}} />
      <MenuButton navigation= {this.props.navigation} />
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={[styles.column,styles.destinations]}>
        <ScrollView 
         horizontal
         pagingEnabled
         scrollEnabled
         showsHorizontalScrollIndicator={false}
         decelerationRate={0}
         scrollEventThrottle={16}
         snapToAlignment="center"
        
         style={{ overflow:'visible' }}>
            {this.state.hesaplar.map((l, i) => (
              
      <TouchableOpacity activeOpacity={0.8} key={i} onPress={()=>this.props.navigation.navigate('HesapBilgiScreen')}>
       <ImageBackground
           style={[styles.flex, styles.destination, styles.shadow]}
           imageStyle={{ borderRadius: 12 }}
          source={{ uri: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80'}}
        >
           <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <View style={{ flex: 0 }}>
              <Image source={{ uri:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' }} style={styles.avatar} />
            </View>
            <View style={[styles.column, { flex: 2, paddingHorizontal: 18 }]}>
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>COIN BANK</Text>
              <Text style={{ color: '#FFF' }}>
                <Text>Bank Card </Text>
              </Text>
            </View>
            <View style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-end', }}>
              <Text style={styles.rating}>7/24</Text>
            </View>
          </View>
          <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
            <Text  style={{
                  color:'#3498db' ,
                  fontSize: 14 * 1.25, 
                  fontWeight: '500',
                  paddingBottom: 8,alignItems:'center' }}
                 >{l.MusteriID}-{l.ekNO} </Text> 
            <Text style={{
                  color:'#3498db' ,
                  fontSize: 14 * 1.25, 
                  fontWeight: '500',
                  paddingBottom: 8,alignItems:'center' }} >
            {this.state.Musteri.MusteriAdi}   {this.state.Musteri.MusteriSoyad}
            </Text>
            
          </View>
        </ImageBackground>
        
    </TouchableOpacity>
            ))
            }
           
    </ScrollView>
    </View>
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
    onPress={()=>this.props.navigation.navigate('HesapIslemScreen')}>
      <Text style={{fontSize:16,color:'white'}} > HESAP İŞLEMLERİ</Text>
  </TouchableOpacity>
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
    onPress={()=>this.props.navigation.navigate('MusteriBilgiScreen')}>
      <Text style={{fontSize:16,color:'white'}}>MÜŞTERİ BİLGİLERİ</Text>
  </TouchableOpacity>
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
    onPress={()=>this.props.navigation.navigate('RandevuScreen')}>
      <Text style={{fontSize:16,color:'white'}} > GERİ</Text>
  </TouchableOpacity>
  
      </View>   
    
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:21,
   
   
  },
  destinations: {
    flex: 1,
    
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: 12,
   
    bottom: 5,
    left:  30,
    backgroundColor:'#FFF' ,
    width: 150,
  },
  rating: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row'
  },
  flex: {
    flex: 0,
  },
  destination: {
    width: 300,
    height: 200,
    marginHorizontal: 36,
    paddingHorizontal: 36,
    paddingVertical: 36 * 0.66,
    borderRadius: 12,
  },
  
  column: {
    flexDirection: 'column'
  },
  avatar: {
    width:  36,
    height: 36,
    borderRadius: 18,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    }}
 
});
const mapStateToProps = (state, ownProps) => ({
  MusteriID:state.reducerMusteri.musteriId,
  Tckn:state.reducerMusteri.tckn,
 
  

})
export default connect(mapStateToProps)(HesapScreen);