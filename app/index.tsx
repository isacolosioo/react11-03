import styled from "styled-components/native";
import Title from "../components/Titulo/titulo";
import InputTexto from "@/components/Input/input";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App(){

    const [email, setEmail] = useState('colosio@gmail.com')
    const [erroEmail, setErroEmail] = useState(false)
    
    const [senha, setSenha] = useState('@Example123')
    const [erroSenha, setErroSenha] = useState(false)

    const [MostrarSenha, setMostrarSenha] = useState(false)

    useEffect(()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailRegex.test(email))
        {
            setErroEmail(false)
        }
        else{
            setErroEmail(true)
        }

    }, [email])

    useEffect(()=>{
        const senhaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

        if(!senhaRegex.test(senha))
        {
            setErroSenha(true)
        }
        else
        {
            setErroSenha(false)
        }
    },[senha])

    
    return(
    <Tela>

        <Title 
             texto={"ENTRAR"} 
             flag={true}
        />
        <Title 
             texto={"BEM VINDO AO APP"} 
             flag={false}
        />

        <ContainerCampos>
        <View>
           <InputTexto
                erro = {erroEmail}
                placeholder="Digite seu email..."
                onChangeText={text => setEmail(text)}
           />
           {erroEmail ? 
                 <TextErrorHint>Email invalido</TextErrorHint>
                :
                null
            }
        </View>
        <View>
           <InputTexto
                erro = {erroSenha}
                placeholder="Digite sua senha..."
                secureTextEntry={!MostrarSenha}
                onChangeText={text => setSenha(text)}
           />

                
              <Ionicons onPress={() => setMostrarSenha(!MostrarSenha)}
                name={MostrarSenha ? "eye" : "eye-off"} 
                size={24} 
                color="gray" 
                style={{position: 'absolute', right: 20, top: 20}}
              />
             
           {erroSenha ? <TextErrorHint>Senha inválida</TextErrorHint> : null}
        </View>

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

const CampoTexto = styled.TextInput`
    background-color:#FF7DC7;
    font-size: 20px;
    padding: 20px;
    border-radius: 5px;
`

const ContainerCampos = styled.View`
   gap: 40px;
`
const Botao = styled.Pressable`
    background-color:#FF91D1;
    border-radius: 5px;
    width: 100px;;
    height: 30px;
`
const ContainerBotao = styled.View`
   margin-top: 100px;
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
    margin-top: 40px;
`

const TextErrorHint = styled.Text`
    font-size: 13px;
    color: #E63946;
    font-weight: bold;
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
