import { useState } from "react"
import { View, Text, StyleSheet, NativeSyntheticEvent, TextInputChangeEventData } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { Colors } from "../../Styles/StyleGuide"

type inputProps = {
    onTextChange? : (text: string) => void
}


const Input: React.FC<inputProps> = (onTextChange) => {

    const [inputValue, setInputValue] = useState<string>("")

    const handleInputChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setInputValue(event.nativeEvent.text);
        onTextChange && onTextChange(inputValue);
    }



    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Search.."
                value={inputValue}
                onChange={handleInputChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.brandBackground,
    },
    input: {
        color: 'white',
        opacity: 0.6,
        fontSize: 14,
    }
})

export default Input