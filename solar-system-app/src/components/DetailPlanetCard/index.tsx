import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Assets from "../../Assets";
import { Colors, Fonts } from "../../Styles/StyleGuide";
import { SvgProps } from "react-native-svg";

type DetailPlanetCardProps = {
  planetName: string;
  PlanetImage: React.FC<SvgProps>;
  planetInfo: string;
};

const DetailPlanetCard: React.FC<DetailPlanetCardProps> = ({
  planetName,
  PlanetImage,
  planetInfo,
}) => {
  return (
    <View className="flex-row my-2 overflow-hidden rounded-md w-9/10 bg-system-brandbg">
      <PlanetImage width={200} height={200} className="top-[-40] left-[-35]" />
      <View className="justify-center left-[-30] w-[45%] ml-1 mr-25">
        <View className="flex-row justify-between items-center">
          <Text style={Fonts.homeTitle()} className="text-system-white">
            {planetName}
          </Text>
          <TouchableOpacity>
            <Assets.icons.Save width={24} height={24} />
          </TouchableOpacity>
        </View>
        <Text className="text-white opacity-60 h-100">{planetInfo}</Text>
        <TouchableOpacity className="flex-row mt-2 items-center">
          <Text>Continue reading...</Text>
          <Assets.icons.OrangeForward
            width={16}
            height={16}
            className="ml-2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({


});

export default DetailPlanetCard;
