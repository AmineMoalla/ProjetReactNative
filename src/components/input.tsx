import { StyleProp, TextInput } from "react-native";
import { TextStyle } from "react-native";

interface InputProps {
    placeholder: string;
    value: string;
    onChangeText: (e: string) => void;
    style?:StyleProp<TextStyle>;
}

function Input(props:InputProps) {
     
return <TextInput
    style={[{
        height:48,
        width:"100%",
        borderColor:"#EAEAEA",
        borderWidth:2,
        borderRadius:8,
        backgroundColor:"#FFF",
       
    },
        props.style ]

    }
        placeholder={props.placeholder}
        placeholderTextColor="#9AA0A6"
        value={props.value}
        onChangeText={props.onChangeText}
        />

}
export default Input;