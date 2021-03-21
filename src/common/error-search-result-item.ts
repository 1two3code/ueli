import { SearchResultItem } from "./search-result-item";
import PluginType from "../main/plugin-type";
import { defaultErrorIcon } from "./icon/default-icons";

export default function getErrorSearchResultItem(
  name: string,
  description?: string
): SearchResultItem {
  return {
    description: description || "",
    executionArgument: "",
    hideMainWindowAfterExecution: false,
    icon: defaultErrorIcon,
    name,
    originPluginType: PluginType.None,
    searchable: []
  };
}
