import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Assets from "../../Assets";
import { Colors, Fonts } from "../../Styles/StyleGuide";
import DropDownListItem from "../../components/DropDownListItem";
import Header from "../../components/Header";
import useOwnNavigation from "../../hooks/useOwnNavigation";
import { usePlanetContext } from "../../providers/PlanetContextProvider";
import { doggoIpsum } from "../../data";

const DetailPage: React.FC = () => {
  const { currentPlanet } = usePlanetContext();
  const { name, description, Image } = currentPlanet;
  const { goBack } = useOwnNavigation();

  const handleBackPress = () => {
    goBack();
  };

  return (
    <View className="flex-1 bg-white pt-10 round">
      <View className="w-full absolute overflow-hidden pt-10 bg-brand h-[200px]">
        <Assets.images.BackgroundApp />
      </View>
      <Header handleBack={handleBackPress} />
      <Image
        width={200}
        height={200}
        className="self-center bottom-20 shadow-lg"
      />
      <ScrollView className="px-4 bottom-20">
        <View className="flex-row items-center justify-between">
          <Text className="text-3xl font-bold">{name}</Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="mr-6">
              <Assets.icons.Save width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Assets.icons.Share width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="mt-4 text-md">{description}</Text>
        <DropDownListItem title="History" text={doggoIpsum} />
        <View className="border border-brand opacity-10" />
        <DropDownListItem title="Physical Characteristics" text={doggoIpsum} />
        <View className="border border-brand opacity-10" />
        <DropDownListItem title="Notable people" text={doggoIpsum} />
        <View className="border border-brand opacity-10" />
        <DropDownListItem title="Location" text={doggoIpsum} />
      </ScrollView>
    </View>
  );
};

export default DetailPage;
