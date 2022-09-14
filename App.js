import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-Permissions'
export default function App() {

    const pickFromCamera= async ()=>{
    try{
      const permission= await ImagePicker.requestCameraPermissionsAsync();
      if(permission.status==="granted")
      {
       let data= await ImagePicker.launchCameraAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.Images,
          allowsEditing:true,
          aspect:[1,1],
          quality:0.7
        })
        console.log(data)
      }
      else{
        Alert.alert('You need to give this app permission to your camera')
      }
    }catch(error){
      console.error("Failed to open camera")
    }
      
    }
  
  
  const pickFromGallery= async ()=>{
  try{
    const {granted}= await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(granted)
    {
     let data= await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect:[1,1],
        quality:0.7
      })
      console.log(data)
    }
    else{
      Alert.alert('You need to give this app permission to your camera')
    }  
  }catch(err){
    console.error("Failed to go to gallery",err)
  }
  
  }
  return (
    <View style={styles.container}>
      <Pressable style={styles.btnCamera} onPress={pickFromCamera}><Text>Capture with camera</Text></Pressable>
      <Pressable style={styles.btnCamera} onPress={pickFromGallery}><Text>Choose from gallery</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCamera:{
    width:"90%",
    height:50,
    display:"flex",
    alignItems:"center",
    paddingHorizontal:12,
    paddingVertical:15,
    elevation:4,
    backgroundColor:"#458B74",
    justifyContent:"space-between",
    marginBottom:20
  },
});
