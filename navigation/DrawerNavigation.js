import React from 'react';
import {Platform,Dimensions} from 'react-native';
import {createNavigation,createAppContainer, DrawerNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import HomeScreen from '../Components/Screens/HomeScreen';
import LoginScreen from '../Components/Screens/LoginScreen';
import MenuDrawer from '../Components//Menu/MenuDrawer';
import KayitScreen from '../Components/Screens/KayitScreen';
import HesapScreen from '../Components/Screens/HesapScreen';
import HesapIslemScreen from '../Components/Screens/HesapIslemScreen';
import ParaYatirmaScreen from '../Components/Screens/ParaYatirmaScreen';
import ParaCekmeScreen from '../Components/Screens/ParaCekmeScreen';
import HesapSilmeScreen from '../Components/Screens/HesapSilmeScreen';
import EftHavaleScreen from '../Components/Screens/EftHavaleScreen';
import VirmanScreen from '../Components/Screens/VirmanScreen';
import MusteriBilgiScreen from '../Components/Screens/MusteriBilgiScreen';
import FaturaScreen from '../Components/Screens/FaturaScreen';



const WIDTH=Dimensions.get('window').width;
const DrawerConfig ={
    
    DrawerWidth: WIDTH*0.83,
    contentComponent:({navigation})=>{
        return (<MenuDrawer navigation={navigation}/>)
    }
}
const DrawerNavigation=createDrawerNavigator (
 
   {
    Home:{
        screen:HomeScreen
        
        },
    LoginScreen:{
        screen:LoginScreen
        }, 
    KayitScreen:{
            screen:KayitScreen
        },
        HesapScreen:{
            screen:HesapScreen,
            params: { MusteriID: 'tanımlanmadı',Tckn:'tanımlanmadı'}   
        },
        HesapIslemScreen:{
            screen:HesapIslemScreen,
            params: { MusteriID: 'tanımlanmadı'}   
        },
        ParaYatirmaScreen:{
            screen:ParaYatirmaScreen,
            params: { MusteriID: 'tanımlanmadı'}   
        },
        ParaCekmeScreen:{
            screen:ParaCekmeScreen,
            params: { MusteriID: 'tanımlanmadı'}   
        },
        HesapSilmeScreen:{
            screen:HesapSilmeScreen,
            params: { MusteriID: 'tanımlanmadı'}  
        },
        EftHavaleScreen:{
            screen:EftHavaleScreen,
            params: { MusteriID: 'tanımlanmadı'}  
        },
        VirmanScreen:{
            screen:VirmanScreen,
            params: { MusteriID: 'tanımlanmadı'} 
        },
        MusteriBilgiScreen:{
            screen:MusteriBilgiScreen,
            params: { MusteriID: 'tanımlanmadı'}  
        },
        FaturaScreen:{
            screen:FaturaScreen,
            params: { MusteriID: 'tanımlanmadı',Tckn:'tanımlanmadı'}   
        }
    
   },
   DrawerConfig
);
export default createAppContainer(DrawerNavigation);