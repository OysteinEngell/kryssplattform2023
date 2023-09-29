import { View, Text, StyleSheet } from "react-native"
import Input from "../../components/Input"

const SearchPage: React.FC = () => {
    return (
        <View style={styles.container}>
            <Input/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
})

export default SearchPage