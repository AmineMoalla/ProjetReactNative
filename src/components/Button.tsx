import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

interface ButtonProps {
    title: string;
    onPress: (event?: GestureResponderEvent) => void;
    
}

function Button(props: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                width: "100%",
                backgroundColor: "#007AFF",
                paddingVertical: 12,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 12,
            }}
            onPress={props.onPress}
            
        >
            <Text style={{ color: "#fff", fontSize: 16 }}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default Button;

