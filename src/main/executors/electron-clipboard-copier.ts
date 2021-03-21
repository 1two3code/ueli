import { clipboard } from "electron";

export default function electronClipboardCopier(value: string): Promise<void> {
  return new Promise(resolve => {
    clipboard.writeText(value);
    resolve();
  });
}
