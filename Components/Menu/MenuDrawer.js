import React from 'react';
import {Platform,Dimensions,Text,View,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';



const WIDTH=Dimensions.get('window').width;
const HEIGHT=Dimensions.get('window').height;


export default class  MenuDrawer extends React.Component{
    navLink (nav,text){
        return(
            <TouchableOpacity style= {{height:50}} onPress={()=>this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>

            </TouchableOpacity>
        )

    }
render(){
    return(
 <View style={styles.Container}>
 <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1563979954492-8111f02d6273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'}} style={styles.topLinks}>
 <Text style={{justifyContent:'center',alignContent:'center',color:'white',fontSize:20}}>COIN BANK</Text>
 <Text style={{justifyContent:'center',alignContent:'center',color:'white',fontSize:15}}>BirCoinden Daha Fazlası</Text>
 </ImageBackground>
 <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1563979954492-8111f02d6273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'}} style={styles.bottomLinks}>
 {this.navLink('HesapScreen','Hesaplarım')}
 {this.navLink('HesapIslemScreen','Hesap İşlemleri')}
 {this.navLink('EftHavaleScreen','Eft Havale İşlemleri')}
 {this.navLink('VirmanScreen','Virman İşlemleri')}
 {this.navLink('ParaYatirmaScreen','Para Yatırma')}
 {this.navLink('ParaCekmeScreen','Para Çekme')}
 {this.navLink('FaturaScreen','Fatura İşlemleri')}
 {this.navLink('Home','Çıkış')}

 
 </ImageBackground>
  
 </View>

    )
}

}
const styles=StyleSheet.create({
    container:{
  flex:1,
  
    },
    topLinks:{
   height:160,
  
    },
    bottomLinks:{
        flex:1,
       
       

    },
    link:{
flex:1,
fontSize:20,

margin:5,
textAlign:'left'
    }
})
