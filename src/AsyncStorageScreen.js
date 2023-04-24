import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage' 

let names=[];

const AsyncStorageScreen = () => {

    const [text,setText]=useState('');
    const [desig,setDesig]=useState('');
    const [city,setCity]=useState('');
    const [saveText,setSaveText]=useState('');

    const storeData=async(value)=>{
        names.push({'Name ':text,'Designation ':desig,'City ':city})
        // names.push(desig)
        // names.push(city)
        try{
            await AsyncStorage.setItem('TEXT', JSON.stringify(names));
        }catch(e){

        }
    }

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('TEXT')
            setSaveText(value)
            console.log('DATA : '+value);
        } catch(e) {
          // error reading value
        }
      }

  return (
    <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
    <TextInput placeholder='Enter Name' style={{width:'90%',height:50,borderWidth:.5,paddingLeft:15}}
         value={text}
        onChangeText={txt=>setText(txt)}/>

    <TextInput placeholder='Enter Designation' style={{width:'90%',height:50,borderWidth:.5,paddingLeft:15}}
         value={desig}
        onChangeText={txt=>setDesig(txt)}/>


        <TextInput placeholder='Enter City' style={{width:'90%',height:50,borderWidth:.5,paddingLeft:15}}
         value={city}
        onChangeText={txt=>setCity(txt)}/>

    
      <TouchableOpacity style={{
        width:200,
        height:50,
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:30
        }}
        onPress={()=>{storeData()}}
        >

<Text style={{color:'#fff'}}>Save Data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        width:200,
        height:50,
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:50
        }}
        onPress={()=>{
            getData()
        }}
        >

<Text style={{color:'#fff'}}>Display Data</Text>
      </TouchableOpacity>
      <Text style={{marginTop:20}}>{'Saved Text :' + saveText}</Text>

    </View>
  )
}

export default AsyncStorageScreen;