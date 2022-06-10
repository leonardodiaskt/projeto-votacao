import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import contador from '../cont';


export default function Votar({ navigation }) {

    const [checked, setChecked] = useState('');
    const [bloq, setBloq] = useState(false)
    const [msg, setMsg] = useState('')

    function checkAtivo(valor) {
        if (valor === 1) {
            setChecked('first')
        }
        if (valor === 2) {
            setChecked('second')
        }
        if (valor === 3) {
            setChecked('thirt')
        }

        if (valor === 4) {
            setChecked('fourth')
        }
    }

    function Contador() {
        if (checked == 'first') {
            contador[0].voto += 1
            console.log(contador)
        }
        else if (checked == 'second') {
            contador[1].voto += 1
        }
        else if (checked == 'thirt') {
            contador[2].voto += 1
        }
        else if (checked == 'fourth') {
            contador[3].voto += 1
        }

        setBloq(true)

        if (bloq === false) {
            setMsg('Voto Concluído')
            
        }
    }

    return (
        <View >
            <View style={styles.container} >
            </View>
            <Text style={styles.h1}>VOTE EM SEU CANDIDATO: </Text>

            <View style={styles.checkbox}>
                <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => checkAtivo(1)}
                />
                <Text style={styles.candidato}>Lula</Text>
            </View>
            <View style={styles.checkbox}>
                <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => checkAtivo(2)}
                />
                <Text style={styles.candidato}>Jair Bolsonaro</Text>
            </View>
            <View style={styles.checkbox}>
                <RadioButton
                    value="thirt"
                    status={checked === 'thirt' ? 'checked' : 'unchecked'}
                    onPress={() => checkAtivo(3)}
                />
                <Text style={styles.candidato}>Ciro Gomes</Text>
            </View>

            <View style={styles.checkbox}>
                <RadioButton
                    value="fourth"
                    status={checked === 'fourth' ? 'checked' : 'unchecked'}
                    onPress={() => checkAtivo(4)}
                />
                <Text style={styles.candidato}>Felipe D'avila</Text>
            </View>


            <Text style={{ fontSize: 17, fontWeight: 500, color: 'red', marginBottom: 5, marginTop: 5, textAlign: 'center'}}>{msg}</Text>


            <TouchableOpacity style={styles.votar} disabled={bloq} onPress={() => Contador()}>
                <Text style={{fontWeight: 600, color: "white"}} >VOTAR</Text>
            </TouchableOpacity>


            <View style={styles.botoes}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Resultado")}>
                    <Text style={{fontWeight: 600, color: "white"}} >RESULTADO</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 150
    },
    checkbox: {
        paddingLeft: 20,
        marginTop: 30,
        flexDirection: "row"
    },
    candidato: {
        marginTop: 8,
        fontWeight: 700,
        color: "#191970",
        marginTop: 20,
    },
    botoes: {
        marginTop: 20,
        flexDirection: 'row'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#483D8b",
        borderWidth: 2,
        borderColor: "#ffa500",
        borderRadius: 10,
        padding: 10,
        width: 150,
        margin: 20,
        marginLeft: '30%',
    },
    votar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffa500',
        borderWidth: 2,
        borderColor: "#483D8B",
        borderRadius: 10,
        padding: 10,
        width: 150,
        marginLeft: '30%',

    },

    foto: {
        width: 70,
        height: 65,
        borderRadius: 80,
    },
})