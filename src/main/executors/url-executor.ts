import { shell } from "electron";

export default function openUrlInBrowser(url: string): Promise<void> {
  return shell.openExternal(url);
}
