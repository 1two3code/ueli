import { basename } from "path";

const isDev = (processExecPath: string) => {
  return basename(processExecPath)
    .toLowerCase()
    .replace(".exe", "")
    .endsWith("electron");
};
export default isDev;
