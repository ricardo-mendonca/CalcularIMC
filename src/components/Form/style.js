import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
       flex:1,
        backgroundColor:"#ffffff",
        marginTop:30,
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:30,
    },
    form:{
        width:"100%",
        height:"auto",
       
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        fontSize:18,
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:50,
        margin:12,
        padding:10,
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FF0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft: 12,
        marginTop: 30,
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        padding:20,

    }

});

export default styles