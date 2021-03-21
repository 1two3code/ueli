import { shell } from "electron";
import { executeCommand } from "./command-executor";

function executeFilePathWindowsAsPrivileged(filePath: string): Promise<void> {
  return executeCommand(
    `powershell -Command "& {Start-Process -Verb runas '${filePath}'}"`
  );
}

function openFile(filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const result = shell.openPath(filePath);
    if (result) {
      resolve();
    } else {
      reject(new Error(`Failed to open: ${filePath}`));
    }
  });
}

export function executeFilePathWindows(
  filePath: string,
  privileged: boolean
): Promise<void> {
  return privileged
    ? executeFilePathWindowsAsPrivileged(filePath)
    : openFile(filePath);
}

function executeFilePathMacOsAsPrivileged(filePath: string): Promise<void> {
  return executeCommand(
    `osascript -e 'do shell script "open \\"${filePath}\\"" with administrator privileges'`
  );
}

export function executeFilePathMacOs(
  filePath: string,
  privileged: boolean
): Promise<void> {
  return privileged
    ? executeFilePathMacOsAsPrivileged(filePath)
    : openFile(filePath);
}
