import { createElement, ReactElement, useCallback } from "react";
import { GraphProps } from "../typings/GraphProps";
import { Pressable, Text, View } from "react-native";
import { defaultGraphStyle, GraphStyle } from "./ui/Styles";
import { flattenStyles } from "./tools/piw-native-utils-internal";
import { executeAction } from "./tools/piw-utils-internal";

export function Graph(props: GraphProps<GraphStyle>): ReactElement {
    const styles = flattenStyles(defaultGraphStyle, props.style);

    const renderText = useCallback(() => {
        return (
            <Text testID={`${props.name}$caption`} style={styles.caption}>
                demo
            </Text>
        );
    }, [props.caption, styles]);

    return (
        <View style={styles.container} testID={props.name}>
            {props.onClick ? (
                <Pressable
                    onPress={() => executeAction(props.onClick)}
                    android_ripple={{
                        color: styles.container.rippleColor
                    }}
                >
                    {renderText()}
                </Pressable>
            ) : (
                renderText()
            )}
        </View>
    );
}
