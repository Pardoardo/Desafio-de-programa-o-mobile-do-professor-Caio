import { useState, React } from "react";
import { Text, Picker, TouchableOpacity, TextInput, View, SafeAreaView, StyleSheet, Alert } from "react-native";

export default function Home() {

    const [ idade, setIdade ] = useState();
    const [ peso, setPeso ] = useState();
    const [ altura, setAltura ] = useState();
    const [ sexo, setSexo ] = useState();

    const setarValorSexo = (evento) => {
        setSexo(evento.target.value)
        console.log("novo sexo definido: " + evento.target.value)
    }
    
    function Calcular() {
        const alt = parseInt(altura)
        console.log(alt)
        function verificarDados(){
            if(!isNaN(parseInt(altura))){
                console.log("altura válida")
            } else {
                Alert.alert(
                    'Informações Inválidas',
                    'A altura digitada não é válida!',
                    [{ text: 'Ok' }],
                    { cancelable: true }
                )
                alert('A altura digitada não é válida!')
            }
        }

        function verificarPreenchimento() {
            if (!idade == '' && !peso == '' && !altura == '') {
                verificarDados()
            } else {
                Alert.alert(
                    'Informações faltando',
                    'Você não prencheeu todas as lacunas necessárias!',
                    [{ text: 'Ok' }],
                    { cancelable: true }
                )
                alert('Você não prencheeu todas as lacunas necessárias!')
                console.log(altura, idade, peso, sexo)
                return;
            }
        }

        verificarPreenchimento()

    }

    return (
        <SafeAreaView style={esquilos.container}>
            <View style={esquilos.conteudo}>
                <Text style={esquilos.titulo}>Calculadora de Gasto Calórico Diário</Text>

                <View style={esquilos.dados}>
                    <TextInput style={esquilos.caixa_informacao} placeholder="Insira Idade" onChangeText={setIdade} />
                    <TextInput style={esquilos.caixa_informacao} placeholder="Insira Peso" onChangeText={setPeso} />
                    <TextInput style={esquilos.caixa_informacao} placeholder="Insitra Altura" onChangeText={setAltura} />
                    <Picker style={esquilos.caixa_informacao} onChange={setarValorSexo}>
                        <Picker.Item label="Selecione sexo" value={undefined} />
                        <Picker.Item label="Masculino" value='m' />
                        <Picker.Item label="Feminino" value='f' />
                    </Picker>
                </View>

                <TouchableOpacity style={esquilos.botao} onPress={Calcular}>
                    <Text style={esquilos.texto_botao}>Calcular</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const esquilos = StyleSheet.create({
    container: {
        backgroundColor: '#C8E3FC',
        borderRadius: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        height: 480,
        width: 700,

    },
    titulo: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30,
        color: '#F7F2FB'
    },
    dados: {
        textAlign: 'center',
        marginTop: 20
    },
    caixa_informacao: {
        padding: 10,
        marginTop: 5,
        borderRadius: 10,
        width: 500,
        marginLeft: 102,
        backgroundColor: '#4D69BD',
        borderColor: '#070F25',
        color: 'white'
    },
    botao: {
        textAlign: 'center',
        width: 150,
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        alignSelf: 'flex-end',
        marginRight: 98,
        backgroundColor: '#4D69BD'
    },
    texto_botao: {
        textAlign: 'center',
        color: 'white'
    },
    conteudo: {
        marginTop: 60,
    }
})