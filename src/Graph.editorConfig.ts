import { GraphPreviewProps } from "../typings/GraphProps";
import { StructurePreviewProps, topBar } from "./tools/piw-utils-internal";
import { Properties } from "@mendix/pluggable-widgets-tools";

export function getProperties(_values: any, defaultProperties: Properties): Properties {
    return defaultProperties;
}
export function getPreview(values: GraphPreviewProps, isDarkMode: boolean): StructurePreviewProps | null {
    const content = [
        {
            type: "Text",
            content: values.class
        }
    ] as StructurePreviewProps[];
    return topBar("Bottom sheet", content, isDarkMode);
}
