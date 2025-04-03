import { TextInputProps } from "react-native";
import { CampoTexto } from "./style";

type InputTextProps = TextInputProps & {
    erro : boolean;
}

export default function InputTexto({ erro, ...rest} : InputTextProps){
    return(
        <CampoTexto
            erro={erro}
            placeholderTextColor={'#495057'}
            {...rest}
        />
    )
}