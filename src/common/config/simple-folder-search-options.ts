import { homedir } from "os";

export interface SimpleFolderSearchFolderOption {
  folderPath: string;
  recursive: boolean;
  excludeHiddenFiles: boolean;
}
export interface SimpleFolderSearchOptions {
  isEnabled: boolean;
  folders: SimpleFolderSearchFolderOption[];
  showFullFilePath: boolean;
}

export const defaultSimpleFolderSearchOptions: SimpleFolderSearchOptions = {
  folders: [
    {
      excludeHiddenFiles: true,
      folderPath: homedir(),
      recursive: false
    }
  ],
  isEnabled: true,
  showFullFilePath: true
};
