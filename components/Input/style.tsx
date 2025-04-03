import { TextInput } from "react-native";
import styled from "styled-components/native";

type CampoDeTextoProps = {
    erro: boolean
}

export const CampoTexto = styled.TextInput<CampoDeTextoProps>`
    background-color:#FF7DC7;
    font-size: 20px;
    padding: 20px;
    border-radius: 5px;
    border: 3px solid ${( {erro} : 
    {erro: boolean}) => erro ? '#ce2631' : '#FFCAE9'};
` 