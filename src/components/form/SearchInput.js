import React,{useState} from "react";
import {StyleSheet, TextInput, Text} from "react-native";

const SearchInput = (props) => {
   const [stateValor, setStateValor] = useState(props.initialValue);
    const onChange=(text) =>{
        setStateValor(text);
        props.onChange(text);
    }
    return (
        <>
        
        <Text>{props.label}</Text>
        <TextInput value={stateValor} style={styles.textInputStyle} onChangeText={onChange}/>
        </>
    )
}

export default SearchInput;

const styles = StyleSheet.create({
    textInputStyle:{
        backgroundColor:"#d1cdcd"
    }
})