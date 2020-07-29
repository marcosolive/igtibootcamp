import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native"
import Input from "../components/form/Input"


const HomeScreen = () => {
    const [stateNome, setStateNome] = useState("");
    const [stateTel, setStateTel] = useState("");

    return (
        <>
            <View style={styles.viewStyles}>
                <Input label="Nome" onChange={(text) => setStateNome(text)} initialValue={""} ></Input>
                <Input label="Telefone" onChange={(text) => setStateTel(text)} initialValue={""} ></Input>
            </View>
        </>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        alignItems: "stretch",
        justifyContent: "flex-start"
    }
})