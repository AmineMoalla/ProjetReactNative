import { PropsWithChildren } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";

function ScreenTemplate(props:PropsWithChildren) {
    return <View style={{backgroundColor:"white",flex:1,
        
    }}>

        <ScrollView
        style={{flex:1}}
        contentContainerStyle={{flexGrow:1}}>
        {props.children}
        </ScrollView>


    </View>
}
export default ScreenTemplate;