import { Text, View } from "react-native";
import ScreenTemplate from "../templates/ScreenTemplate";
import Input from "../components/input";
import { useState } from "react";
import Button from "../components/Button";


function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    return <ScreenTemplate>

<View 
style={{flexDirection:"column",
justifyContent:"center",
alignItems:"center",
flex:1,    
}}
>
        <Text
        style={{fontSize:30,}}
        >
            Bonjour
        </Text>
        <View style={{ width: '90%' }}>
            <Input
                placeholder="Entrez votre mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Input
                placeholder="Entrez votre mot de passe"
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={{ marginTop: 12 }}
            />
            <Button
                title="Se connecter"
                onPress={() => {
                    null;
                }}
            />
        </View>

        </View>
         </ScreenTemplate>;
}

export default Login;