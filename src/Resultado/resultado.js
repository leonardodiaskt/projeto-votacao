import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import contador from '../cont';


export default function Resultado({navigation}) {

    return (
        <View style={result.container}>

            <Text style={result.text}>Lula: {contador[0].voto}</Text>
            <Text style={result.text} >Jair Bolsonaro: {contador[1].voto}</Text>
            <Text style={result.text} >Ciro Gomes: {contador[2].voto}</Text>
            <Text style={result.text} >Felipe D'avila: {contador[3].voto}</Text>
            <TouchableOpacity style={{ backgroundColor: "#ffa500", borderWidth: 2, borderColor: "#483d8b", width: 200, height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginTop: 20 }} onPress={() => navigation.navigate('Home')}>
                <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', }} >Home</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
            <StatusBar style="auto" />


        </View>
    )
}


const result = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        backgroundColor: "#000",
        width: 200, height: 30,
        alignItems: 'center',
        justifyContent: 'center', 
        borderRadius: 10,
        margin: 20 
    },
    text:{
        fontSize:20,
        fontWeight:500,
        margin:5,
        color:'#191970',

    }
});