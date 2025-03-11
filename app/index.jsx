import {
    View,
    Text,
    TextInput,
    Pressable,
     } from "react-native"

import styled from "styled-components/native";

export default function App(){
    return(
    <Tela>

        <Titulo>ENTRAR</Titulo>

        <ContainerCampos>
            <CampoTexto
            placeholder="Digite o email..."
            placeholderTextColor={'#495057'} />

            <CampoTexto
            placeholder="Digite a senha..."
            placeholderTextColor={'#495057'} />
        </ContainerCampos>

        <ContainerBotao>
            <Meio>
            <Botao>
                <Entrar>Entrar</Entrar>
            </Botao>
            </Meio>
        </ContainerBotao>

        <EspaçoTexto>
            <Cadastrar>Cadastre-se</Cadastrar>
            <Senha>Esqueci a senha</Senha>
        </EspaçoTexto>

    </Tela>)
}

const Tela = styled.View`
    flex: 1;
    background-color: #FFCAE9;
    padding: 26px;
`
const Titulo = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: #000000;
    margin: 80px 0px;
    text-align: center;
`

const CampoTexto = styled.TextInput`
    background-color:#FF7DC7;
    font-size: 20px;
    padding: 20px;
    border-radius: 5px;
`

const ContainerCampos = styled.View`
   gap: 80px;
`
const Botao = styled.Pressable`
    background-color:#FF91D1;
    border-radius: 5px;
    width: 100px;;
    height: 30px;
    gap: 30px;
`
const ContainerBotao = styled.View`
   gap: 30px;
   margin-top: 80px;
`
const Entrar = styled.Text`
   font-size: 20px;
   font-weight: bold;
   text-align: center;
`

const Meio = styled.View`
    flex-direction: row;
    justify-content: center;
    width: 100%;
`

const Cadastrar = styled.Text`
    font-size: 18;
    text-align: center;
`
const Senha = styled.Text`
    font-size: 18;
    text-align: center;
`

const EspaçoTexto = styled.View`
    margin-top: 80px;
`























/* const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#FFCAE9',
        padding: 30
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color:'#000000',
        marginTop: 60,
        marginBottom: 70,
        textAlign: 'center'
    },

    campos: {
        backgroundColor: '#FF7DC7',
        fontSize: 20,
        textAlignVertical: 'center',
        paddingHorizontal: 20,
        padding: 20, 
        borderRadius: 5,
        marginTop: 15,
    },

    container_campos: {
        gap: 60
    },

    botao: {
        backgroundColor: '#FF91D1',
        borderRadius: 5,
        width: 60,
    },

    container_botao:{
        gap: 45,
        marginTop: 35,

    },

    entrar: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    cadastrar: {
        fontSize: 18,
        textAlign: 'center'

    },

    senha: {
        fontSize: 18,
        textAlign: 'center'
    }
}) */ 
