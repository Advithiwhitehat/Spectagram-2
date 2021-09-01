import { View, Text, Image} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class CreatePost extends Component{
    constructor(props){
        super();
        this.state={
            author:"",
            caption:""
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <View style={styles.container}>
                        <Image source ={require("../assets/profile_img.png")}
                               style={styles.image}
                               ></Image>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.text}>{this.state.author}</Text>
                        </View>
                    </View>

                    <Image source={require("../assets/post.jpeg")} 
                           style={styles.image}></Image>

                    <View style={styles.container}>
                        <Text style={styles.text}>{this.state.caption}</Text>
                    </View>
 \               <View style={styles.container}>
                    <View>
                        <Ionicons name={"heart"}  size={RFValue(30)}  color={"white"}/>
                        <Text style={styles.text}>12k</Text>
                    </View>
                </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container={
        flex:0.85,
        justifyContent:"center"
    },
    image={
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    text={
        color:"black",
        fontSize:RFValue(28)
    }
})