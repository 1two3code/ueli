import { shell } from "electron";

export default function openFileLocation(filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      shell.showItemInFolder(filePath);
      resolve();
    } catch (error) {
      reject(new Error(`Could not open the location of ${filePath}`));
    }
  });
}
