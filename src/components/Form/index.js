import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
} from "react-native";
import styles from "./style";
import ResultImc from './ResultImc/index';
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";


export default function Form() {

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState('preencha o peso e altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([]);

    function imcCalculator() {
        let heightFormat = height.replace(",", ".");
        let totalImc = ((weight / (heightFormat * heightFormat)).toFixed(2));
        setImcList((arr) => [...arr, { id: new Date().getMilliseconds(), imc: totalImc }]);
        setImc(totalImc);

    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo Obrigatório *");
        }
    }

    function validationImc() {

        Keyboard.dismiss();//ocultar teclado

        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("seu imc é igual:")
            setTextButton("Calcular novamente")
            setErrorMessage(null);
        } else {
            setImc(null)
            verificationImc()

            setTextButton("Calcular")
            setMessageImc("preencha o peso e altura")
        }
    }

    return (

        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex: 1.75"
                        keyboardType="numeric" />
                    <Text style={styles.formLabel}>Peso</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex: 75.365"
                        keyboardType="numeric" />
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => validationImc()}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.exhibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} />
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => validationImc()}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.listImcs}
                data={imcList.reverse()}
                renderItem={({item},key) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.TextResultItemList} key={key}>Resultado IMC = </Text>
                            {item.imc}
                          
                        </Text>

                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
