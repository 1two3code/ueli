import { SearchResultItem } from "../common/search-result-item";
import PluginType from "./plugin-type";
import { defaultNoSearchResultIcon } from "../common/icon/default-icons";

export default function getNoSearchResultsFoundResultItem(
  message: string,
  description?: string
): SearchResultItem {
  return {
    description: description || "",
    executionArgument: "",
    hideMainWindowAfterExecution: false,
    icon: defaultNoSearchResultIcon,
    name: message,
    originPluginType: PluginType.None,
    searchable: []
  };
}
