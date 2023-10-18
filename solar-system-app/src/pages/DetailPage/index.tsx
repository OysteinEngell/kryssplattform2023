import React from "react"
import { View, Text } from "react-native"
import { usePlanetContext } from "../../providers/PlanetContextProvider"

const DetailPage: React.FC = () => {
    const { currentPlanet } = usePlanetContext();
    const {planetName, PlanetImage} = currentPlanet
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <PlanetImage width={164} height={164}/>
            <Text>{planetName}</Text>
        </View>
    )
}

export default DetailPage