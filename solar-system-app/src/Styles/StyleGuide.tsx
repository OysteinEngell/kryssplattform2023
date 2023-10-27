import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextProps,
  TextStyle,
  ViewStyle,
} from "react-native";
//import LinearGradient from 'react-native-linear-gradient';

import { LinearGradient } from "expo-linear-gradient";

export const Colors = {
  brandBackground: "#151515",
  brandWhite: "#ffffff",
};

interface Styled {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  className?: string;
}

const button: React.FC<Styled> = ({ style, children, className }) => {
  return (
    <LinearGradient
      colors={["#EF5F53", "#FA8F70"]}
      start={[0, 0]}
      end={[1, 0]}
      style={style}
      className={className}
    >
      {children}
    </LinearGradient>
  );
};

const blue: React.FC<Styled> = ({ style, children, className }) => {
  return (
    <LinearGradient
      colors={["#5935FF", "#47408E"]}
      style={style}
      className={className}
    >
      {children}
    </LinearGradient>
  );
};

const pink: React.FC<Styled> = ({ style, children, className }) => {
  return (
    <LinearGradient
      colors={["#FF6CD9", "#FF2184"]}
      style={style}
      className={className}
    >
      {children}
    </LinearGradient>
  );
};

const cyan: React.FC<Styled> = ({ style, children, className }) => {
  return (
    <LinearGradient
      colors={["#01D4E4", "#009DE0"]}
      style={style}
      className={className}
    >
      {children}
    </LinearGradient>
  );
};

const yellow: React.FC<Styled> = ({ style, children, className }) => {
  return (
    <LinearGradient
      colors={["#F9C270", "#FFAA2B"]}
      style={style}
      className={className}
    >
      {children}
    </LinearGradient>
  );
};

export const Gradients = {
  button,
  blue,
  pink,
  cyan,
  yellow,
};

export const Fonts = {
  homeTitle(): StyleProp<TextStyle> {
    return {
      fontFamily: "Roboto_700Bold",
      fontWeight: "700",
      fontSize: 30,
    };
  },

  buttonTitle(): StyleProp<TextStyle> {
    return {
      fontFamily: "Roboto_700Bold",
      fontWeight: "700",
      fontSize: 16,
    };
  },
  paragraph(): StyleProp<TextStyle> {
    return {
      fontFamily: "Roboto_400Regular",
      fontWeight: "400",
      fontSize: 16,
    };
  },
  placeholder(): StyleProp<TextStyle> {
    return {
      fontFamily: "Roboto_400Regular",
      fontWeight: "400",
      fontSize: 14,
    };
  },
  bottomBarItem(): StyleProp<TextStyle> {
    return {
      fontFamily: "Roboto_400Regular",
      fontWeight: "400",
      fontSize: 12,
    };
  },
};
