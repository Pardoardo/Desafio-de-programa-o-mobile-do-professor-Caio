import { useState, React } from "react";
import { Text, Picker, TouchableOpacity, TextInput, View, SafeAreaView, StyleSheet } from "react-native";

export default function Home() {

    return (
        <SafeAreaView style={esquilos.container}>
            <View style={esquilos.conteudo}>
                <Text style={esquilos.titulo}>Calculadora de Gasto Calórico Diário</Text>

                <View style={esquilos.dados}>
                    <TextInput style={esquilos.caixa_informacao} placeholder="Insira Idade" />
                    <TextInput style={esquilos.caixa_informacao} placeholder="Insira Peso" />
                    <TextInput style={esquilos.caixa_informacao} placeholder="Insitra Altura" />
                    <Picker style={esquilos.caixa_informacao}>
                        <Picker.Item label="Selecione sexo" value={undefined} />
                        <Picker.Item label="Masculino" value='m' />
                        <Picker.Item label="Feminino" value='f' />
                    </Picker>
                </View>

                <TouchableOpacity style={esquilos.botao}>
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