import { TextStyle, ViewStyle } from "react-native";
import { Style } from "../tools/piw-native-utils-internal";

export interface GraphStyle extends Style {
    container: ViewStyle & { rippleColor?: string };
    caption: TextStyle;
}

export const defaultGraphStyle: GraphStyle = {
    container: {
        alignSelf: "baseline",
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#ccc",
        justifyContent: "center"
    },
    caption: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#444"
    }
};
