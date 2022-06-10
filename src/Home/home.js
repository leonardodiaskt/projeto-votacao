import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App({navigation}) {
    return (
        <View style={styles.container}>
            <View>
                 <Image
                    style={{ width: 297, height: 189, marginBottom: 65 }}
                    source={require('../../assets/2022.png')}
                /> 
            </View>
            <Text style={{fontSize: 25, color: "#1b305a", fontWeight: 600}}>Eleições 2022</Text>
            <StatusBar style="auto" />
            <View style={styles.main}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Votacao")}>
                    <Text style={styles.text} >VOTAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAF0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: "center",
        fontWeight: 700,
        color: '#fff',
        fontSize: 25,
    },

    main: {
        marginTop: 60,
    },
    button: {
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#483D8B",
        backgroundColor: "#ffa500",
        padding: 10,
        width: 250,
        margin: 20,
        borderRadius: 10,
    }
});