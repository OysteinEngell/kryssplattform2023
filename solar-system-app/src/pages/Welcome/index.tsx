import React from "react";
import {StyleSheet, Text, View } from "react-native";
import Assets from "../../Assets";
import { Colors } from "../../Styles/StyleGuide";
import Button from "../../components/Button";
import useOwnNavigation from "../../hooks/useOwnNavigation"

const Welcome: React.FC = () => {

    const { navigate } = useOwnNavigation()

    const handleContinueClick = () => {
        navigate("HomeRoutes")

    }
    return(

    <View style={ styles.container}>

        <Assets.images.BackgroundApp style={styles.bgImage} />
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.welcome}>Let's Journey through the solar system</Text>
        <Text style={styles.welcome}>Press the button to embark</Text>
        <Button title="Continue" Icon={Assets.icons.Forward} onPress={handleContinueClick} />
    </View>
    );
    };

const styles = StyleSheet.create({

        container : {
            backgroundColor: Colors.brandBackground, 
            flex: 1,
            justifyContent: "center",
            alignItems : "center"
        },

        bgImage: {
            position: "absolute", 
            zIndex: 0,
         
        },

        welcome: {
            color: "white",
            
        },


        
    });


export default Welcome;