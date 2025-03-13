import { useState, React } from "react";
import { Text, TouchableOpacity, TextInput, View, SafeAreaView, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
export default function Home() {

    const [idade, setIdade] = useState();
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [sexo, setSexo] = useState();
    const [nivel, setNivel] = useState();

    const setarValorSexo = (valor) => {
        setSexo(valor)
        console.log("novo sexo definido: " + valor)
        console.log("novo " + sexo)
    }

    const setarValorNivel = (valor) => {
        setNivel(valor)
        console.log("novo nivel definido: " + valor)
        console.log("novo " + nivel)
    }

    function calcularIMC() {
        let tmb
        if (sexo === 'm') {
            tmb = (10 * parseFloat(peso)) + (6.25 * parseFloat(altura)) - (5 * parseInt(idade) + 5)
        } else {
            tmb = (10 * parseFloat(peso)) + (6.25 * parseFloat(altura)) - (5 * parseInt(idade)) - 161
        }

        let gastoFinal

        switch (nivel) {
            case 'sedentario':
                gastoFinal = tmb * 1.2
                break;
            case 'leve':
                gastoFinal = tmb * 1.375
                break;
            case 'moderado':
                gastoFinal = tmb * 1.55
                break;
            case 'intenso':
                gastoFinal = tmb * 1.725
                break;
            case 'muitoIntenso':
                gastoFinal = tmb * 1.9
                break;
        }

        Alert.alert(
            'Resultado',
            `Seu gasto calórico total é de ${gastoFinal} calorias.`,
            [{ text: 'Ok' }],
            { cancelable: true }
        )
        return
    }

    function Calcular() {
        function verificarDados() {
            if (isNaN(parseInt(altura))) {
                Alert.alert(
                    'Informações Inválidas',
                    'A altura digitada não é válida!',
                    [{ text: 'Ok' }],
                    { cancelable: true }
                )
                return
            }

            if (isNaN(parseInt(peso))) {
                Alert.alert(
                    'Informações Inválidas',
                    'A peso digitado não é válido!',
                    [{ text: 'Ok' }],
                    { cancelable: true }
                )
                return
            }

            if (isNaN(parseInt(idade))) {
                Alert.alert(
                    'Informações Inválidas',
                    'A idade digitada não é válida!',
                    [{ text: 'Ok' }],
                    { cancelable: true }
                )
                return
            }

            calcularIMC()
        }

        

        function verificarPreenchimento() {
            if (!idade == '' && !peso == '' && !altura == '' && !sexo == '' && !nivel == '') {
                verificarDados()
                
            } else {
                Alert.alert(
                    'Informações faltando',
                    'Você não prencheeu todas as lacunas necessárias!' + sexo,
                    [{ text: 'Ok' }],
                    { cancelable: true }
                )
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

                    <Picker style={esquilos.caixa_informacao} onValueChange={(valor) => {
                        setarValorSexo(valor)
                    }
                    }>
                        <Picker.Item label="Selecione sexo" value={undefined} />
                        <Picker.Item label="Masculino" value='m' />
                        <Picker.Item label="Feminino" value='f' />
                    </Picker>

                    <Picker style={esquilos.caixa_informacao} onValueChange={(valro) => {
                        setarValorNivel(valro)
                    }}>
                        <Picker.Item label="Selecione um nível de atividade física" value={undefined} />
                        <Picker.Item label="Sedentário" value='sedentario' />
                        <Picker.Item label="Leve" value='leve' />
                        <Picker.Item label="Moderado" value='moderado' />
                        <Picker.Item label="Intenso" value='intenso' />
                        <Picker.Item label="Muito Inteso" value='muitoIntenso' />
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
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        flex:1

    },
    titulo: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30,
        color: 'black'
    },
    dados: {
        textAlign: 'center',
        marginTop: 20
    },
    caixa_informacao: {
        padding: 10,
        marginTop: 5,
        borderRadius: 10,
        width: 200,
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