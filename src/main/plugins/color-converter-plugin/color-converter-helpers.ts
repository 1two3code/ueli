import color from "color";
import { replaceWhitespace } from "../../../common/helpers/string-helpers";

export function isValidColorCode(value: string): boolean {
  const trimmedValue = replaceWhitespace(value.trim(), "");
  try {
    color(trimmedValue);
    return (
      trimmedValue.startsWith("#") ||
      trimmedValue.startsWith("rgb(") ||
      trimmedValue.startsWith("rgba(")
    );
  } catch {
    return false;
  }
}

export function toHex(value: string, defaultColor: string): string {
  try {
    return color(value).hex();
  } catch {
    return defaultColor;
  }
}
