import { useState, React } from "react";
import { Text, Picker, TouchableOpacity, TextInput, View, SafeAreaView, StyleSheet, Alert } from "react-native";

export default function Home() {

    const [ idade, setIdade ] = useState();
    const [ peso, setPeso ] = useState();
    const [ altura, setAltura ] = useState();
    const [ sexo, setSexo ] = useState();
    const [ nivel, setNivel ] = useState();

    const setarValorSexo = (evento) => {
        setSexo(evento.target.value)
        console.log("novo sexo definido: " + evento.target.value)
        console.log("novo " + sexo)
    }

    const setarValorNivel = (evento) => {
        setNivel(evento.target.value)
        console.log("novo nivel definido: " + evento.target.value)
        console.log("novo " + nivel)
    }
    
    function Calcular() {
        function verificarDados(){
            if(isNaN(parseInt(altura))){
                Alert.alert(
                    'Informações Inválidas',
                    'A altura digitada não é válida!',
                    [{ text: 'Ok' }],
                    { cancelable: true }
                )
                alert('A altura digitada não é válida!')
                return
            }

            if(isNaN(parseInt(peso))){
                Alert.alert(
                    'Informações Inválidas',
                    'A peso digitado não é válido!',
                    [{ text: 'Ok' }],
                    { cancelable: true }
                )
                alert('A peso digitado não é válido!')
                return
            }

            if(isNaN(parseInt(idade))){
                Alert.alert(
                    'Informações Inválidas',
                    'A idade digitada não é válida!',
                    [{ text: 'Ok' }],
                    { cancelable: true }
                )
                alert('A idade digitada não é válida!')
                return
            }
        }

        function calcularIMC(){
            let tmb
            if(sexo === 'm'){
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
                `Seu gasto calórico total é de ${gastoFinal}`,
                [{ text: 'Ok' }],
                { cancelable: true }
            )
            alert(`Seu gasto calórico total é de ${gastoFinal}`)
            return
        }

        function verificarPreenchimento() {
            if (!idade == '' && !peso == '' && !altura == '' && !sexo == '' && !nivel == '') {
                verificarDados()
                calcularIMC()    
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

                    <Picker style={esquilos.caixa_informacao} onChange={setarValorNivel}>
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
        borderRadius: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        height: 560,
        width: 700,

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